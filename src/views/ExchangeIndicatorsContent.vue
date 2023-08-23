<template>
  <div class="issue-content" id="ExchangeIndicators">
    <div>
      <div
      class="issue-item pointer"
      v-for="(issue, issueIndex) in allIssueComputed"
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
                  <select v-model="props.showIssueList[issue.issueType]" @change="switchOpen" style="margin: 0 12px 0 0;">
                    <option :value="item.targetType" v-for="item in issue.issueList" :key="item">
                      {{ item.targetType }}. {{ item.targetTitle.length > 30 ? `${item.targetTitle.slice(0, 30)}...`  : item.targetTitle}}
                    </option>
                  </select>
                  <span class="color-green pointer" @click="showAddIssueCodeDialog(issue.issueList.length, issueIndex); dailogType='addIssueList';">
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
                    @click="openDialogSelecter(issue.issueList[props.showIssueList[issue.issueType] - 1].targetCodeArray, issue.issueList[props.showIssueList[issue.issueType] - 1])"
                    v-if="issue.issueList[props.showIssueList[issue.issueType] - 1] && issue.issueList[props.showIssueList[issue.issueType] - 1].targetCodeArray"
                    >
                      <span v-for="industry in issue.issueList[props.showIssueList[issue.issueType] - 1].targetCodeArray">
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
                    <template v-if="issue.issueList[props.showIssueList[issue.issueType] - 1]">
                      <input type="text" v-model="issue.issueList[props.showIssueList[issue.issueType] - 1].targetTitle">
                    </template>
                  </td>
              </tr>
              <tr>
                  <td>
                    指標備註
                  </td>
                  <td>
                    <template v-if="issue.issueList[props.showIssueList[issue.issueType] - 1]">
                      <input type="text" v-model="issue.issueList[props.showIssueList[issue.issueType] - 1].targetNote">
                    </template>
                  </td>
              </tr>
              <tr v-if="issue.issueList[props.showIssueList[issue.issueType] - 1]">
                <td v-if="issue.issueList[props.showIssueList[issue.issueType] - 1].targetStatus">
                  使用狀態
                </td>
                <td v-if="issue.issueList[props.showIssueList[issue.issueType] - 1].targetStatus">
                    <div>
                      <label>
                        <input type="radio"
                        v-model="issue.issueList[props.showIssueList[issue.issueType] - 1].targetStatus.isOn"
                        :value="true"
                        >
                        <span>開啟</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="radio"
                        v-model="issue.issueList[props.showIssueList[issue.issueType] - 1].targetStatus.isOn"
                        :value="false"
                        >
                        <span>停用，自</span>
                        <input type="text" class="year" placeholder="請輸入民國年"
                        :disabled="issue.issueList[props.showIssueList[issue.issueType] - 1].targetStatus.isOn === true"
                        v-model="issue.issueList[props.showIssueList[issue.issueType] - 1].targetStatus.isOnYear"
                        >
                        <span class="unit">年</span>
                        <span>起停用此項目</span>
                      </label>
                    </div>
                  </td>
              </tr>
              <template v-if="issue.issueList[props.showIssueList[issue.issueType] - 1]">
                <tr v-for="(target, targetIndex) in issue.issueList[props.showIssueList[issue.issueType] - 1].targetList">
                  <td></td>
                  <td>
                    <table class="indicators">
                      <tr>
                        <td class="color-green text-start detailList" colspan="2">
                          <div class="issue-item">
                            <div class="issue-title">
                              <span>指標細項（{{ chineseNumber(targetIndex + 1) }}）</span>
                              <img src="/src/assets/images/select.svg" alt="">
                            </div>
                            <div class="issue-content">
                              <table>
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
                                <tr>
                                  <td>
                                    項目類別
                                  </td>
                                  <td>
                                    <label :for="`${target.fieldId}notIsCore`">
                                      <input type="checkbox" :id="`${target.fieldId}notIsCore`" v-model="target.notIsCore">
                                      設定為非核心指標
                                    </label>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </template>
              <tr>
                <td class="buttonBox" colspan="2">
                  <input type="button" value="新增指標細項" class="button buttonColor3"
                  @click="showAddIssueDetailDialog(issue.issueType, issue.issueList)"
                  >
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>
    <div class="buttonBox">
      <input type="button" class="button buttonColor3" value="新增議題" @click="showAddIssueDialog(); dailogType = 'addIssue'">
    </div>

    <!-- 新增議題 -->
    <div
    class="dialog-background"
    :class="{'show': isShowAddIssueDialog}"
    @click.self="closeAddIssueDialog()"
    >
      <div class="dialog-block">
        <div class="dialog-content">
          <div class="dialog-title">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.25" y="0.5" width="48" height="48" rx="24" fill="#F5FDF9"/>
              <path d="M14.25 31.5V17.5C14.25 16.9696 14.4607 16.4609 14.8358 16.0858C15.2109 15.7107 15.7196 15.5 16.25 15.5H32.25C32.7804 15.5 33.2891 15.7107 33.6642 16.0858C34.0393 16.4609 34.25 16.9696 34.25 17.5V31.5C34.25 32.0304 34.0393 32.5391 33.6642 32.9142C33.2891 33.2893 32.7804 33.5 32.25 33.5H16.25C15.7196 33.5 15.2109 33.2893 14.8358 32.9142C14.4607 32.5391 14.25 32.0304 14.25 31.5Z" fill="#2FB86D" stroke="#2FB86D" stroke-width="1.5"/>
              <path d="M14.25 19.5H34.25H14.25ZM21.25 26.5H24.25H21.25ZM27.25 26.5H24.25H27.25ZM24.25 26.5V23.5V26.5ZM24.25 26.5V29.5V26.5Z" fill="#2FB86D"/>
              <path d="M14.25 19.5H34.25M21.25 26.5H24.25M24.25 26.5H27.25M24.25 26.5V23.5M24.25 26.5V29.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            新增議題
          </div>
          <div style="margin-bottom: 12px;">議題代號 : {{ newIssueNumber }}</div>
          <label for="newIssueName">
            <p class="label-title">
              議題名稱
            </p>
            <div class="input-group">
              <input type="text" id="newIssueName" v-model="newIssueName" placeholder="請填寫">
            </div>
          </label>
        </div>
        <div class="dialog-footer">
          <button
          class="button buttonColor2"
          @click="closeAddIssueDialog()"
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

    <!-- 新增指標代號 -->
    <div
    class="dialog-background"
    :class="{'show': isShowAddIssueCodeDialog}"
    @click.self="closeAddIssueCodeDialog"
    >
      <div class="dialog-block">
        <div class="dialog-content">
          <div class="dialog-title">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.25" y="0.5" width="48" height="48" rx="24" fill="#F5FDF9"/>
              <path d="M14.25 31.5V17.5C14.25 16.9696 14.4607 16.4609 14.8358 16.0858C15.2109 15.7107 15.7196 15.5 16.25 15.5H32.25C32.7804 15.5 33.2891 15.7107 33.6642 16.0858C34.0393 16.4609 34.25 16.9696 34.25 17.5V31.5C34.25 32.0304 34.0393 32.5391 33.6642 32.9142C33.2891 33.2893 32.7804 33.5 32.25 33.5H16.25C15.7196 33.5 15.2109 33.2893 14.8358 32.9142C14.4607 32.5391 14.25 32.0304 14.25 31.5Z" fill="#2FB86D" stroke="#2FB86D" stroke-width="1.5"/>
              <path d="M14.25 19.5H34.25H14.25ZM21.25 26.5H24.25H21.25ZM27.25 26.5H24.25H27.25ZM24.25 26.5V23.5V26.5ZM24.25 26.5V29.5V26.5Z" fill="#2FB86D"/>
              <path d="M14.25 19.5H34.25M21.25 26.5H24.25M24.25 26.5H27.25M24.25 26.5V23.5M24.25 26.5V29.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            新增指標代號
          </div>
          <label>
            <div style="margin-bottom: 12px;">
              <p class="label-title">
                指標代號 {{ newIssueCodeNumber }}
              </p>
            </div>
            <div style="margin-bottom: 12px;">
              <p class="label-title">
                適用產業別
              </p>
              <div class="items pointer"
              style="max-width: 100%"
              @click="openDialogSelecter(newIssueCodeIndustry)"
              >
                <span v-for="industry in newIssueCodeIndustry" :key="item">
                  {{ props.allIndustry.find(item => item.value === industry).name }}
                </span>
              </div>
            </div>
            <div style="margin-bottom: 12px;">
              <p class="label-title">
                指標名稱
              </p>
              <div class="input-group">
                <input type="text" v-model="newIssueCodeName" placeholder="請填寫">
              </div>
            </div>
            <div style="margin-bottom: 12px;">
              <p class="label-title">
                指標備註（選填）
              </p>
              <div class="input-group">
                <input type="text" v-model="newIssueCodeNote" placeholder="請填寫">
              </div>
            </div>
          </label>
        </div>
        <div class="dialog-footer">
          <button
          class="button buttonColor2"
          @click="closeAddIssueCodeDialog()"
          >
            取消
          </button>
          <button
          class="button buttonColor1"
          @click="addNewIssueCode()"
          >
            確認
          </button>
        </div>
      </div>
    </div>

    <!-- 新增指標細項 -->
    <div
    class="dialog-background"
    :class="{'show': isShowAddIssueDetailDialog}"
    @click.self="closeAddIssueDetailDialog()"
    >
      <div class="dialog-block">
        <div class="dialog-content">
          <div class="dialog-title">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.25" y="0.5" width="48" height="48" rx="24" fill="#F5FDF9"/>
              <path d="M14.25 31.5V17.5C14.25 16.9696 14.4607 16.4609 14.8358 16.0858C15.2109 15.7107 15.7196 15.5 16.25 15.5H32.25C32.7804 15.5 33.2891 15.7107 33.6642 16.0858C34.0393 16.4609 34.25 16.9696 34.25 17.5V31.5C34.25 32.0304 34.0393 32.5391 33.6642 32.9142C33.2891 33.2893 32.7804 33.5 32.25 33.5H16.25C15.7196 33.5 15.2109 33.2893 14.8358 32.9142C14.4607 32.5391 14.25 32.0304 14.25 31.5Z" fill="#2FB86D" stroke="#2FB86D" stroke-width="1.5"/>
              <path d="M14.25 19.5H34.25H14.25ZM21.25 26.5H24.25H21.25ZM27.25 26.5H24.25H27.25ZM24.25 26.5V23.5V26.5ZM24.25 26.5V29.5V26.5Z" fill="#2FB86D"/>
              <path d="M14.25 19.5H34.25M21.25 26.5H24.25M24.25 26.5H27.25M24.25 26.5V23.5M24.25 26.5V29.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            新增指標細項
          </div>
          <div>
            <p class="label-title">
              指標名稱
            </p>
            <div class="input-group">
              <input type="text" v-model="newIssueDetailTitle" placeholder="請填寫">
            </div>
          </div>
          <div>
            <p class="label-title">
              輸入方式
              {{newIssueDetailType}}
            </p>
            <input
            type="button"
            class="button buttonColor3"
            :value="inputMethodComputed(newIssueDetailType)"
            @click="openDialog(newIssueDetailOptionList, newIssueDetailType); dailogType = 'input';"
            style="width: 100%"
            >
          </div>
          <div>
            <p class="label-title">
              指標備註（選填）
            </p>
            <div class="input-group">
              <input type="text" v-model="newIssueDetailNote" placeholder="請填寫">
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <button
          class="button buttonColor2"
          @click="closeAddIssueDetailDialog"
          >
            取消
          </button>
          <button
          class="button buttonColor1"
          @click="addIssueDetailDialog"
          >
            確認
          </button>
        </div>
      </div>
    </div>


    <!-- 元件 -->
    <CommonDialogComponent
    :isShowDialog="isShowInputSetDialog"
    :dailogType="dailogType"
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
    :optionType="'array'"
    :selected="targetIndustry"
    @closeDialogSelecter="closeDialogSelecter"
    @industrySetting="industrySetting"
    />
  </div>
</template>
<script setup>
  import { computed, ref, watch , onUpdated } from 'vue';
  import CommonDialogComponent from '../components/CommonDialogComponent.vue';
  import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';
  import { chineseNumber,switchOpen } from '../mixin/mixin.js';

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
    showIssueList: {
      type: Object
    }
  });

  const emits = defineEmits(['addNewIssue', 'addNewIssueCode', 'addIssueDetailDialog']);

  const allIssueComputed = computed(()=> props.allIssue);

  const inputMethodComputed = computed(()=>{
    return (inputType)=>{
      if(inputType){
        return props.allType.find(item => item.value === inputType).name
      }
      return '請選擇'
    }
  });

  // 當前頁面的跳窗
  // 當前頁面的跳窗 新增指標
  const isShowAddIssueDialog = ref(false);
  const newIssueNumber = ref(0);
  const newIssueName = ref('');
  const newIssueKind = ref('');
  const newIssueType = ref('');

  const showAddIssueDialog = function(){
    isShowAddIssueDialog.value = true;
    newIssueNumber.value = document.querySelectorAll("#issue-body .issue-item:not([style*='none'])").length + 1;
    newIssueKind.value = [...document.querySelectorAll("#issue-body .issue-item:not([style*='none'])")].at(-1).dataset.item;
    newIssueType.value = [...document.querySelectorAll("#issue-body .issue-item:not([style*='none'])")].at(-1).querySelector('.issue-title span').innerText.split(' ')[0].slice(0, 1);
  };
  const closeAddIssueDialog = function(){
    isShowAddIssueDialog.value = false;
    newIssueNumber.value = 0;
    newIssueName.value = '';
    newIssueKind.value = '';
    newIssueType.value = '';
  };
  const addNewIssue = function(){
    emits('addNewIssue',
      {
        issueKind: newIssueKind.value,
        issueList: [],
        issueTitle: newIssueName.value,
        issueType: `${newIssueType.value}${String(newIssueNumber.value).padStart(4, '0')}`
      }
    );
    closeAddIssueDialog();
  };

  // 當前頁面的跳窗 新增指標代號
  const isShowAddIssueCodeDialog = ref(false);
  const targetIssueIndex = ref(-1);
  const newIssueCodeNumber = ref(0);
  const newIssueCodeIndustry = ref([]);
  const newIssueCodeName = ref('');
  const newIssueCodeNote = ref('');

  const showAddIssueCodeDialog = function(optionLength, issueIndex){
    isShowAddIssueCodeDialog.value = true;
    newIssueCodeNumber.value = optionLength + 1;
    targetIssueIndex.value = issueIndex;
  }
  const closeAddIssueCodeDialog = function(){
    isShowAddIssueCodeDialog.value = false;
    targetIssueIndex.value = -1;
    newIssueCodeNumber.value = 0;
    newIssueCodeIndustry.value = [];
    newIssueCodeName.value = '';
    newIssueCodeNote.value = '';
  }
  const addNewIssueCode = function(){
    emits('addNewIssueCode',
      {
        issueIndex: targetIssueIndex.value,
        data: {
          targetCodeArray: newIssueCodeIndustry.value,
          targetTitle: newIssueCodeName.value,
          targetNote: newIssueCodeNote.value,
        }
      }
    );
    closeAddIssueCodeDialog();
  };

  // 當前頁面的跳窗 新增指標細項
  const isShowAddIssueDetailDialog = ref(false);
  const newIssueDetailFieldId = ref('');
  const newIssueDetailTitle = ref('');
  const newIssueDetailType = ref('');
  const newIssueDetailOptionList = ref([{}]);
  const newIssueDetailNote = ref('');

  const showAddIssueDetailDialog = function(issueType, issueList){
    newIssueDetailFieldId.value = `${issueType}_${props.showIssueList[issueType]}`;
    isShowAddIssueDetailDialog.value = true;
  };
  const closeAddIssueDetailDialog = function(){
    isShowAddIssueDetailDialog.value = false;
    newIssueDetailFieldId.value = '';
    newIssueDetailNote.value = '';
    newIssueDetailTitle.value = '';
    newIssueDetailOptionList.value = [{}];
    newIssueDetailType.value = '';
  };
  const addIssueDetailDialog = function(){
    emits('addIssueDetailDialog',
      {
        fieldId: newIssueDetailFieldId.value,
        optionList: newIssueDetailOptionList.value,
        note: newIssueDetailNote.value,
        title: newIssueDetailTitle.value,
        type: newIssueDetailType.value
      }
    );
    closeAddIssueDetailDialog();
  };

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
    if(target){
      changeTarget.value = target;
    }
  }
  const closeDialog = function(){
    isShowInputSetDialog.value = false;
  }
  const inputSetting = function(data){
    isShowInputSetDialog.value = false;
    if(isShowAddIssueDetailDialog.value === true){
      newIssueDetailOptionList.value = data.optionSetting;
      newIssueDetailType.value = data.inputMethod;
    } else {
      changeTarget.value.optionList = data.optionSetting;
      changeTarget.value.type = data.inputMethod;
    }
  }

  // CommonDialogSelecterComponent
  // 跳窗篩選器
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
    if(isShowAddIssueCodeDialog.value === true){
      newIssueCodeIndustry.value = data
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

.pointer{
  cursor: pointer;
}

.detailList {
  padding: 0!important;
  line-height: inherit!important;
}

.detailList .issue-item{
  display:block!important;
}

.detailList table{
  background: #fff!important;
}


.detailList .opening .issue-title{
  background:#ebfbf2;
  
}
</style>