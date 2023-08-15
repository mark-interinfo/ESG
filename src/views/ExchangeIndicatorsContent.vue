<template>
  <div class="issue-content" id="ExchangeIndicators">
    <div>
      <div
      class="issue-item pointer"
      v-for="issue in props.allIssue"
      :key="issue.issueType"
      :data-item="issue.issueKind"
      >
        <div class="issue-title">
          <span>
            {{ issue.issueType }} {{ issue.issueTitle }}
          </span>
          <img src="../assets/images/select.svg" alt="">
        </div>
        <div id="ExchangeIndicators" class="issue-content">
          <table class="indicators">
            <template v-for="list in issue.issueList" :key="list.targetType">
              <tr>
                  <td>
                    指標代號
                  </td>
                  <td>
                    <input type="text" v-model="list.targetType" disabled>
                  </td>
              </tr>
              <tr>
                  <td>
                    適用產業別
                  </td>
                  <td>
                    <div class="items pointer" @click="openDialogSelecter(list.targetCodeArray, list)">
                      <span v-for="industry in list.targetCodeArray">
                        {{ props.allIndustry.find(item => item.value === industry).name }}
                      </span>
                  </div>
                  </td>
              </tr>
              <tr>
                  <td>
                    指標名稱
                  </td>
                  <td>
                    <input type="text" v-model="list.targetTitle">
                  </td>
              </tr>
              <tr>
                  <td>
                    指標備註
                  </td>
                  <td>
                    <input type="text" v-model="list.targetNote">
                  </td>
              </tr>
              <tr>
                  <td>
                    使用狀態
                  </td>
                  <td v-if="list.targetStatus">
                    <div>
                      <label :for="`${list.targetType}.${list.targetTitle}on`">
                        <input type="radio"
                        :id="`${list.targetType}.${list.targetTitle}on`"
                        v-model="list.targetStatus.isOn"
                        :value="true"
                        >
                        <span>開啟</span>
                      </label>
                    </div>
                    <div>
                      <label :for="`${list.targetType}.${list.targetTitle}off`">
                        <input type="radio"
                        :id="`${list.targetType}.${list.targetTitle}off`"
                        v-model="list.targetStatus.isOn"
                        :value="false"
                        >
                        <span>停用，自</span>
                        <input type="text" class="year" placeholder="請輸入民國年"
                        :disabled="list.targetStatus.isOn === true"
                        v-model="list.targetStatus.isOnYear"
                        >
                        <span class="unit">年</span>
                        <span>起停用此項目</span>
                      </label>
                    </div>
                  </td>
              </tr>
              <tr v-for="(target, targetIndex) in list.targetList">
                <td></td>
                <td>
                  <table class="indicators">
                    <tr>
                      <td class="color-green text-start" colspan="2">指標細項（{{ chineseNumber(targetIndex + 1) }}）</td>
                    </tr>
                    <tr>
                      <td>細項名稱</td>
                      <td>
                        <input type="text" v-model="target.title">
                      </td>
                    </tr>
                    <tr>
                      <td>細項備註</td>
                      <td>
                        <input type="text" v-model="target.note">
                      </td>
                    </tr>
                    <tr>
                      <td>輸入方式</td>
                      <td>
                        <input
                        type="button"
                        class="button buttonColor3"
                        :value="inputMethodComputed(target.type)"
                        @click="openDialog(target.optionList, target.type, target)"
                        >
                      </td>
                    </tr>
                    <tr>
                        <td>
                          使用狀態
                        </td>
                        <td v-if="target.status">
                          <div>
                            <label :for="`${target.fieldId}on`">
                              <input type="radio"
                              :id="`${target.fieldId}on`"
                              v-model="target.status.isOn"
                              :value="true"
                              >
                              <span>開啟</span>
                            </label>
                          </div>
                          <div>
                            <label :for="`${target.fieldId}off`">
                              <input type="radio"
                              :id="`${target.fieldId}off`"
                              v-model="target.status.isOn"
                              :value="false"
                              >
                              <span>停用，自</span>
                              <input type="text" class="year" placeholder="請輸入民國年"
                              :disabled="target.status.isOn === true"
                              v-model="target.status.isOnYear"
                              >
                              <span class="unit">年</span>
                              <span>起停用此項目</span>
                            </label>
                          </div>
                        </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </template>
            <tr>
              <td colspan="2">
                <input type="button" value="新增指標細項" class="button buttonColor3">
                <input type="button" value="更新設定" class="button buttonColor1" @click="updateInputSetting">
              </td>
            </tr>
          </table>
        </div>
      </div>
      <CommonDialogComponent
      :isShowDialog="isShowDialog"
      :dailogType="'input'"
      :inputOption="allType"
      :optionList="targetOptionList"
      :inputMethod="targetInputMethod"
      @closeDialog="closeDialog"
      @inputSetting="inputSetting"
      />
    </div>
    <div class="buttonBox">
      <input type="button" class="button buttonColor3" value="新增指標議題">
    </div>
    <CommonDialogComponent
    :isShowDialog="isShowDialog"
    :dailogType="'input'"
    :inputOption="allType"
    :optionList="targetOptionList"
    :inputMethod="targetInputMethod"
    @closeDialog="closeDialog"
    @inputSetting="inputSetting"
    />
    <CommonDialogSelecterComponent
    :isShowDialogSelecter="isShowDialogSelecter"
    :selectMulti="true"
    :option="props.allIndustry"
    :selected="targetIndustry"
    @closeDialogSelecter="closeDialogSelecter"
    @industrySetting="industrySetting"
    />
  </div>
</template>
<script setup>
  import { computed, ref } from 'vue';
  import CommonDialogComponent from '../components/CommonDialogComponent.vue';
  import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';
  import { APICollection } from '../mixin/api.js';
  import { chineseNumber } from '../mixin/mixin.js';

  const props = defineProps({
    allIndustry: {
      type: Array,
    },
    allIssue: {
      type: Array,
    },
    allType: {
      type: Array,
    },
  });

  const inputMethodComputed = computed(()=>{
    return (inputType)=>{
      if(inputType){
        return props.allType.find(item => item.value === inputType).name
      }
      return '請選擇'
    }
  });

  const targetOptionList = ref();
  const targetInputMethod = ref();
  const changeTarget = ref();

  const isShowDialog = ref(false);
  const openDialog = function(optionList, inputMethod, target){
    isShowDialog.value = true;
    targetOptionList.value = optionList;
    targetInputMethod.value = inputMethod;
    changeTarget.value = target;
  }
  const closeDialog = function(){
    isShowDialog.value = false;
  }
  const inputSetting = function(data){
    isShowDialog.value = false;
    changeTarget.value.optionList = data.optionSetting;
    changeTarget.value.type = data.inputMethod;
  }

  const targetIndustry = ref([]);
  const changeList = ref([]);

  const isShowDialogSelecter = ref(false);
  const openDialogSelecter = function(industry, list){
    isShowDialogSelecter.value = true;
    targetIndustry.value = industry;
    changeList.value = list;
  }
  const closeDialogSelecter = function(){
    isShowDialogSelecter.value = false;
  }
  const industrySetting = function(data){
    isShowDialogSelecter.value = false;
    changeList.value.targetCodeArray = data;
  }

  const updateInputSetting = function(){
    APICollection.ExecESGData({
      allIssue: props.allIssue,
    });
  }

</script>
<style lang="scss">
.text-start{
  text-align: left !important;
}

.color-green{
  color: #2FB86D !important;
}

.indicators .indicators{
  td > input[type="text"]{
    width: 460px !important;
  }
  td > input[type="button"]{
    width: 460px;
  }
}

.buttonBox{
  padding:10px;
  text-align:right;
  }
</style>