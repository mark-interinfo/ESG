<template>
  <div id="issue-body">
    <div
    class="issue-item pointer"
    v-for="issue in props.allInternationalIssue"
    :key="issue.internationalIssueName"
    :data-item ="issue.guideLine"
    >
    <div class="issue-title">
      <span>
        {{ issue.internationalIssueName }}
      </span>
      <img src="../assets/images/select.svg" alt="">
    </div>
    <div class="issue-content">
        <table class="indicators">
          <tr>
              <td>
                指標代號
              </td>
              <td>
                <select v-model="props.showInternationalIssue[issue.internationalIssueNo]" style="margin-right: 12px;">
                  <option v-for="option in issue.internationalIssueList" :value="option.internationalTargetNo">
                    {{option.internationalTargetNo}}
                  </option>
                </select>
                <span class="color-green pointer" @click="showAddInternationalTargetNoDialog(issue.internationalIssueList.length, issue.guideLine, issue.internationalIssueNo)">
                  新增指標代號
                </span>
              </td>
          </tr>
          <template v-if="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo])">
            <tr>
                <td>
                  適用產業別
                </td>
                <td>
                  <div
                  class="items"
                  v-if="issue.internationalIssueList.length > 0"
                  @click="openDialogSelecter(
                    issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetCodeArray,
                    issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo])
                  )"
                  >
                    <span v-for="target in issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetCodeArray">
                      {{ props.allIndustry.find(item=> item.value === target).name }}
                    </span>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <input
                  type="text"
                  v-if="issue.internationalIssueList.length > 0"
                  v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetName"
                  >
                </td>
            </tr>
            <tr>
                <td>
                  指標備註
                </td>
                <td>
                  <input
                  type="text"
                  v-if="issue.internationalIssueList.length > 0"
                  v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetNote"
                  >
                </td>
            </tr>
            <tr>
                <td>
                  使用狀態
                </td>
                <td v-if="issue.internationalIssueList.length > 0">
                  <div>
                    <label>
                      <input type="radio"
                      v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOn"
                      :value="true"
                      >
                      <span>開啟</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio"
                      v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOn"
                      :value="false"
                      >
                      <span>停用，自</span>
                      <input type="text" class="year" placeholder="請輸入民國年"
                      :disabled="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOn === true"
                      v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === props.showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOnYear"
                      >
                      <span class="unit">年</span>
                      <span>起停用此項目</span>
                    </label>
                  </div>
                </td>
            </tr>
          </template>
        </table>
    </div>
  </div>
  <div class="buttonBox">
    <input
    type="button" class="button buttonColor3" value="新增議題"
    @click="showAddInternationalIssueDialog()"
    >
  </div>
  <CommonDialogSelecterComponent
  :isShowDialogSelecter="isShowDialogSelecter"
  :selectMulti="true"
  :option="props.allIndustry"
  :optionType="'array'"
  :selected="targetIndustry"
  @closeDialogSelecter="closeDialogSelecter"
  @industrySetting="industrySetting"
  />
  <!-- 新增議題 -->
  <div
  class="dialog-background"
  :class="{'show': isShowAddInternationalIssueDialog}"
  @click.self="isShowAddInternationalIssueDialog = false"
  >
    <div class="dialog-block">
      <div class="dialog-content">
        <div class="dialog-title">
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" width="48" height="48" rx="24" fill="#F5FDF9"/>
            <path d="M14.75 31V17C14.75 16.4696 14.9607 15.9609 15.3358 15.5858C15.7109 15.2107 16.2196 15 16.75 15H32.75C33.2804 15 33.7891 15.2107 34.1642 15.5858C34.5393 15.9609 34.75 16.4696 34.75 17V31C34.75 31.5304 34.5393 32.0391 34.1642 32.4142C33.7891 32.7893 33.2804 33 32.75 33H16.75C16.2196 33 15.7109 32.7893 15.3358 32.4142C14.9607 32.0391 14.75 31.5304 14.75 31Z" fill="#2FB86D" stroke="#2FB86D" stroke-width="1.5"/>
            <path d="M14.75 19H34.75H14.75ZM21.75 26H24.75H21.75ZM27.75 26H24.75H27.75ZM24.75 26V23V26ZM24.75 26V29V26Z" fill="#2FB86D"/>
            <path d="M14.75 19H34.75M21.75 26H24.75M24.75 26H27.75M24.75 26V23M24.75 26V29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          新增議題
        </div>
        <p>
          議題名稱
        </p>
        <input type="text" placeholder="請填寫" v-model="internationalIssueName">
      </div>
      <div class="dialog-footer">
        <button class="button buttonColor1" @click="closeAddInternationalIssueDialog">取消</button>
        <button class="button buttonColor1" @click="addInternationalIssue">確認</button>
      </div>
    </div>
  </div>

  <!-- 新增指標代號 -->
  <div
  class="dialog-background"
  :class="{'show': isShowAddInternationalTargetNoDialog}"
  @click.self="isShowAddInternationalTargetNoDialog = false"
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
              指標代號
            </p>
            <div class="input-group">
              <input type="text" v-model="newTargetNo" placeholder="請填寫">
            </div>
          </div>
          <div style="margin-bottom: 12px;">
            <p class="label-title">
              適用產業別
            </p>
            <div class="items pointer"
            style="max-width: 100%"
            @click="openDialogSelecter(newTargetCodeArray)"
            >
              <span v-for="industry in newTargetCodeArray" :key="item">
                {{ props.allIndustry.find(item => item.value === industry).name }}
              </span>
            </div>
          </div>
          <div style="margin-bottom: 12px;">
            <p class="label-title">
              指標名稱
            </p>
            <div class="input-group">
              <input type="text" v-model="newTargetName" placeholder="請填寫">
            </div>
          </div>
          <div style="margin-bottom: 12px;">
            <p class="label-title">
              指標備註（選填）
            </p>
            <div class="input-group">
              <input type="text" v-model="newTargetNote" placeholder="請填寫">
            </div>
          </div>
        </label>
      </div>
      <div class="dialog-footer">
        <button
        class="button buttonColor2"
        @click="closeAddInternationalTargetNoDialog"
        >
          取消
        </button>
        <button
        class="button buttonColor1"
        @click="addInternationalTargetNo()"
        >
          確認
        </button>
      </div>
    </div>
  </div>


</div>
</template>
<script setup>
  import { ref } from 'vue';
  import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';

  const props = defineProps({
    allInternationalIssue: {
      type: Object,
    },
    allIndustry: {
      type: Array,
    },
    allInternationalTarget: {
      type: Array,
    },
    showInternationalIssue: {
      type: Object
    }
  });

  const emits = defineEmits(['addInternationalIssue', 'addInternationalTargetNo'])

  // 當前頁面的跳窗
  // 當前頁面的跳窗 新增議題
  const isShowAddInternationalIssueDialog = ref(false);
  const internationalIssueName = ref('');
  const internationalIssueNo = ref('');

  const showAddInternationalIssueDialog = function(){
    isShowAddInternationalIssueDialog.value = true;
  }
  const closeAddInternationalIssueDialog = function(){
    isShowAddInternationalIssueDialog.value = false;
    internationalIssueNo.value = '';
    internationalIssueName.value = '';
  }
  const addInternationalIssue = function(){
    let systemNo = 1;
    if(props.allInternationalIssue.find(item => item.internationalIssueNo === internationalIssueNo.value)){
      alert('錯誤：重複的 議題代號');
      return;
    }
    if(!internationalIssueName.value){
      alert('錯誤：必需填上 議題名稱');
      return;
    }
    if(!internationalIssueNo.value){
      while(!!props.allInternationalIssue.find(item => Number(item.internationalIssueNo) === systemNo)){
        systemNo += 1
      }
    }
    emits('addInternationalIssue',
      {
        guideLine: document.querySelector('#issue').dataset.open,
        internationalIssueNo: internationalIssueNo.value || systemNo,
        internationalIssueName: internationalIssueName.value,
        internationalIssueList: [],
      }
    );
    closeAddInternationalIssueDialog();
  }

  // 當前頁面的跳窗 新增指標代號
  const isShowAddInternationalTargetNoDialog = ref(false);
  const targetInternationalIssueNo = ref('0');
  const targetGuideLine = ref('');
  const newTargetNo = ref('');
  const newTargetName = ref('');
  const newTargetNote = ref('');
  const newTargetCodeArray = ref([]);

  const showAddInternationalTargetNoDialog = function(IssueListLength, guideLine, internationalIssueNo){
    isShowAddInternationalTargetNoDialog.value = true;
    targetGuideLine.value = guideLine;
    targetInternationalIssueNo.value = internationalIssueNo;
  };
  const closeAddInternationalTargetNoDialog = function(){
    isShowAddInternationalTargetNoDialog.value = false;
    targetInternationalIssueNo.value = '0';
    targetGuideLine.value = '';
    newTargetNo.value = '';
    newTargetName.value = '';
    newTargetNote.value = '';
    newTargetCodeArray.value = [];
  }
  const addInternationalTargetNo = function(){
    emits('addInternationalTargetNo', {
      issueNo: targetInternationalIssueNo.value,
      guideLine: targetGuideLine.value,
      data: {
        internationalTargetNo: newTargetNo.value,
        internationalTargetName: newTargetName.value,
        internationalTargetNote: newTargetNote.value,
        internationalTargetCodeArray: newTargetCodeArray.value,
        internationalTargetStatus: {isOnYear: "", isOn: true},
      }
    });
    closeAddInternationalTargetNoDialog();
  }

  // 跳窗篩選器
  const isShowDialogSelecter = ref(false);
  const targetIndustry = ref([]);
  const changeList = ref();

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
    if(isShowAddInternationalTargetNoDialog.value === true){
      newTargetCodeArray.value = data;
    } else {
      changeList.value.internationalTargetCodeArray = data;
    }
  }

</script>
<style lang="scss">
.color-green{
  color: #2FB86D !important;
}
.pointer{
  cursor: pointer;
}
</style>