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
            <tr>
                <td>
                  議題代號
                </td>
                <td>
                  <input type="text" :value="issue.issueType" disabled>
                </td>
            </tr>
            <tr>
                <td>
                  議題名稱
                </td>
                <td>
                  <input type="text" :value="issue.issueTitle" disabled>
                </td>
            </tr>
            <tr>
                <td>
                  指標代號
                </td>
                <td>
                  <select v-model="showIssueList[issue.issueType]" style="margin: 0 12px 0 0;">
                    <option :value="item" v-for="item in issue.issueList.map(item => item.targetType)" :key="item">{{ item }}</option>
                  </select>
                  <span class="color-green" @click="openDialog(); dailogType='addIssueList';">
                    新增指標代號
                  </span>
                </td>
            </tr>
            <template v-if="issue.issueList.length > 0">
              <tr>
                  <td>
                    適用產業別
                  </td>
                  <td>
                    <div
                    class="items pointer"
                    @click="openDialogSelecter(issue.issueList[showIssueList[issue.issueType] - 1].targetCodeArray, issue.issueList[showIssueList[issue.issueType] - 1])"
                    v-if="issue.issueList[showIssueList[issue.issueType] - 1].targetCodeArray"
                    >
                      <span v-for="industry in issue.issueList[showIssueList[issue.issueType] - 1].targetCodeArray">
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
                    <input type="text" v-model="issue.issueList[showIssueList[issue.issueType] - 1].targetTitle">
                  </td>
              </tr>
              <tr>
                  <td>
                    指標備註
                  </td>
                  <td>
                    <input type="text" v-model="issue.issueList[showIssueList[issue.issueType] - 1].targetNote">
                  </td>
              </tr>
              <tr>
                  <td v-if="issue.issueList[showIssueList[issue.issueType] - 1].targetStatus">
                    使用狀態
                  </td>
                  <td v-if="issue.issueList[showIssueList[issue.issueType] - 1].targetStatus">
                    <div>
                      <label>
                        <input type="radio"
                        v-model="issue.issueList[showIssueList[issue.issueType] - 1].targetStatus.isOn"
                        :value="true"
                        >
                        <span>開啟</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="radio"
                        v-model="issue.issueList[showIssueList[issue.issueType] - 1].targetStatus.isOn"
                        :value="false"
                        >
                        <span>停用，自</span>
                        <input type="text" class="year" placeholder="請輸入民國年"
                        :disabled="issue.issueList[showIssueList[issue.issueType] - 1].targetStatus.isOn === true"
                        v-model="issue.issueList[showIssueList[issue.issueType] - 1].targetStatus.isOnYear"
                        >
                        <span class="unit">年</span>
                        <span>起停用此項目</span>
                      </label>
                    </div>
                  </td>
              </tr>
              <tr v-for="(target, targetIndex) in issue.issueList[showIssueList[issue.issueType] - 1].targetList">
                <td></td>
                <td>
                  <table class="indicators">
                    <tr>
                      <td class="color-green text-start" colspan="2">
                        指標細項（{{ chineseNumber(targetIndex + 1) }}）
                      </td>
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
                        @click="openDialog(target.optionList, target.type, target); dailogType = 'input'"
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
              <tr>
                <td class="buttonBox" colspan="2">
                  <input type="button" value="新增指標細項" class="button buttonColor3">
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>
    <div class="buttonBox">
      <input type="button" class="button buttonColor3" value="新增議題"
      @click="openDialog(); dailogType = 'addIssue'"
      >
    </div>
    <CommonDialogComponent
    :isShowDialog="isShowDialog"
    :dailogType="dailogType"
    :inputOption="allType"
    :optionList="targetOptionList"
    :inputMethod="targetInputMethod"
    @closeDialog="closeDialog"
    @inputSetting="inputSetting"
    @addNewIssue="addNewIssue"
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
  import { computed, ref, watch } from 'vue';
  import CommonDialogComponent from '../components/CommonDialogComponent.vue';
  import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';
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

  const showIssueList = ref({});
  watch(props, ()=>{
    showIssueList.value = {};
    props.allIssue.forEach(issue => {
      showIssueList.value[issue.issueType] = '1';
    });
  });

  const inputMethodComputed = computed(()=>{
    return (inputType)=>{
      if(inputType){
        return props.allType.find(item => item.value === inputType).name
      }
      return '請選擇'
    }
  });

  // CommonDialogComponent
  // 欄位設定
  const targetOptionList = ref();
  const targetInputMethod = ref();
  const changeTarget = ref();

  // 新增指標

  const dailogType = ref('');
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
  const addNewIssue = function(data){
    isShowDialog.value = false;
    props.allIssue.push({
      issueKind: "環境",
      issueList: [],
      issueTitle: data,
      issueType: 'E0005'
    });
  }

  // CommonDialogSelecterComponent
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