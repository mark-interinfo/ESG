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
      <input type="button" class="button buttonColor3" value="新增議題" @click="showTargetDialog(); dailogType = 'addIssue'">
    </div>
    <!-- 新增議題 -->
    <div
    class="dialog-background"
    :class="{'show': isShowTargetDialog}"
    >
      <div class="dialog-block">
        <div class="dialog-content">
          <div class="dialog-title">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#F5FDF9"/>
              <path d="M24.0023 28.2C22.8884 28.2 21.8202 27.7575 21.0325 26.9698C20.2448 26.1822 19.8023 25.1139 19.8023 24C19.8023 22.8861 20.2448 21.8178 21.0325 21.0302C21.8202 20.2425 22.8884 19.8 24.0023 19.8C25.1163 19.8 26.1845 20.2425 26.9722 21.0302C27.7598 21.8178 28.2023 22.8861 28.2023 24C28.2023 25.1139 27.7598 26.1822 26.9722 26.9698C26.1845 27.7575 25.1163 28.2 24.0023 28.2ZM32.9183 25.164C32.9663 24.78 33.0023 24.396 33.0023 24C33.0023 23.604 32.9663 23.208 32.9183 22.8L35.4503 20.844C35.6783 20.664 35.7383 20.34 35.5943 20.076L33.1943 15.924C33.0503 15.66 32.7263 15.552 32.4623 15.66L29.4743 16.86C28.8503 16.392 28.2023 15.984 27.4463 15.684L27.0023 12.504C26.978 12.3627 26.9043 12.2345 26.7945 12.1423C26.6847 12.05 26.5458 11.9996 26.4023 12H21.6023C21.3023 12 21.0503 12.216 21.0023 12.504L20.5583 15.684C19.8023 15.984 19.1543 16.392 18.5303 16.86L15.5423 15.66C15.2783 15.552 14.9543 15.66 14.8103 15.924L12.4103 20.076C12.2543 20.34 12.3263 20.664 12.5543 20.844L15.0863 22.8C15.0383 23.208 15.0023 23.604 15.0023 24C15.0023 24.396 15.0383 24.78 15.0863 25.164L12.5543 27.156C12.3263 27.336 12.2543 27.66 12.4103 27.924L14.8103 32.076C14.9543 32.34 15.2783 32.436 15.5423 32.34L18.5303 31.128C19.1543 31.608 19.8023 32.016 20.5583 32.316L21.0023 35.496C21.0503 35.784 21.3023 36 21.6023 36H26.4023C26.7023 36 26.9543 35.784 27.0023 35.496L27.4463 32.316C28.2023 32.004 28.8503 31.608 29.4743 31.128L32.4623 32.34C32.7263 32.436 33.0503 32.34 33.1943 32.076L35.5943 27.924C35.7383 27.66 35.6783 27.336 35.4503 27.156L32.9183 25.164Z" fill="#2FB86D"/>
            </svg>
            新增指標
          </div>
          <div style="margin-bottom: 12px;">指標代號 : {{ newIssueNumber }}</div>
          <div style="margin-bottom: 12px;">
            <p class="label-title">
              適用產業別
            </p>
            <div class="items pointer"
            style="max-width: 100%"
            @click="openDialogSelecter(newIssueIndustry)"
            >
              <span v-for="industry in newIssueIndustry" :key="item">
                {{ props.allIndustry.find(item => item.value === industry).name }}
              </span>
            </div>
          </div>
          <label for="newIssueListName">
            <p class="label-title">
              指標名稱
            </p>
            <div class="input-group">
              <input type="text" id="newIssueListName" v-model="newIssueListName" placeholder="請填寫">
            </div>
          </label>
        </div>
        <div class="dialog-footer">
          <button
          class="button buttonColor2"
          @click="closeTargetDialog()"
          >
            取消
          </button>
          <button
          class="button buttonColor1"
          @click="addNewIssue()"
          >
            確認
          </button>
        </div>
      </div>
    </div>
    <CommonDialogComponent
    :isShowDialog="isShowInputSetDialog"
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
    :optionType="'array'"
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

  const emits = defineEmits(['addNewIssue']);

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

  // 當前頁面的跳窗
  // 新增指標
  const isShowTargetDialog = ref(false);
  const newIssueNumber = ref(0);
  const newIssueKind = ref('');
  const newIssueIndustry = ref([]);

  const showTargetDialog = function(){
    isShowTargetDialog.value = true;
    newIssueNumber.value = document.querySelectorAll("#issue-body .issue-item:not([style*='none'])").length + 1;
    newIssueKind.value = document.querySelector('')
  };
  const closeTargetDialog = function(){
    isShowTargetDialog.value = false;
  }
  const addNewIssue = function(data){
    isShowTargetDialog.value = false;
    emits('addNewIssue',
      {
        issueKind: "環境",
        issueList: [],
        issueTitle: data,
        issueType: 'E0005'
      }
    );
  }

  // CommonDialogComponent
  // 欄位設定
  const targetOptionList = ref();
  const targetInputMethod = ref();
  const changeTarget = ref();

  const dailogType = ref('');
  const isShowInputSetDialog = ref(false);
  const openDialog = function(optionList, inputMethod, target){
    isShowInputSetDialog.value = true;
    targetOptionList.value = optionList;
    targetInputMethod.value = inputMethod;
    changeTarget.value = target;
  }
  const closeDialog = function(){
    isShowInputSetDialog.value = false;
  }
  const inputSetting = function(data){
    isShowInputSetDialog.value = false;
    changeTarget.value.optionList = data.optionSetting;
    changeTarget.value.type = data.inputMethod;
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
    if(isShowTargetDialog.value === true){
      newIssueIndustry.value = data
    } else {
      changeList.value.targetCodeArray = data;
    }
    isShowDialogSelecter.value = false;
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