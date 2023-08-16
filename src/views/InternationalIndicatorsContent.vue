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
                <select v-model="showInternationalIssue[issue.internationalIssueNo]">
                  <option v-for="option in issue.internationalIssueList" :value="option.internationalTargetNo">
                    {{option.internationalTargetNo}}
                  </option>
                </select>
              </td>
          </tr>
          <template v-if="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo])">
            <tr>
                <td>
                  適用產業別
                </td>
                <td>
                  <div
                  class="items"
                  v-if="issue.internationalIssueList.length > 0"
                  @click="openDialogSelecter(
                    issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetCodeArray,
                    issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo])
                  )"
                  >
                    <span v-for="target in issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetCodeArray">
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
                  v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetName"
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
                  v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetNote"
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
                      v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOn"
                      :value="true"
                      >
                      <span>開啟</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio"
                      v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOn"
                      :value="false"
                      >
                      <span>停用，自</span>
                      <input type="text" class="year" placeholder="請輸入民國年"
                      :disabled="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOn === true"
                      v-model="issue.internationalIssueList.find(item => item.internationalTargetNo === showInternationalIssue[issue.internationalIssueNo]).internationalTargetStatus.isOnYear"
                      >
                      <span class="unit">年</span>
                      <span>起停用此項目</span>
                    </label>
                  </div>
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
  <div class="buttonBox">
    <input
    type="button" class="button buttonColor3" value="新增指標議題"
    @click="showDialog()"
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
  <!-- 彈跳視窗 -->
  <div
  class="dialog-background"
  :class="{'show': isShowDialog}"
  @click.self="isShowDialog = false"
  >
    <!-- 新增指標 -->
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
          議題代號
          <span>
            （選填）
          </span>
        </p>
        <input type="text" placeholder="請填寫" v-model="internationalIssueNo">
        <p>
          議題名稱
        </p>
        <input type="text" placeholder="請填寫" v-model="internationalIssueName">
      </div>
      <div class="dialog-footer">
        <button class="button buttonColor1" @click="isShowDialog = false">取消</button>
        <button class="button buttonColor1" @click="addInternationalIssue">確認</button>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
  import { ref, watch } from 'vue';
  import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';

  const props = defineProps({
    allInternationalIssue: {
      type: Array,
    },
    allIndustry: {
      type: Array,
    },
    allInternationalTarget: {
      type: Array,
    }
  });

  const emits = defineEmits(['addInternationalIssue'])

  const isShowDialog = ref(false);
  const showDialog = function(){
    isShowDialog.value = true;
  }
  // 跳窗新增指標
  const internationalIssueName = ref('');
  const internationalIssueNo = ref('');
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
    isShowDialog.value = false;
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
    changeList.value.internationalTargetCodeArray = data;
  }

  const showInternationalIssue = ref({});
  watch(props, ()=>{
    props.allInternationalIssue.forEach((issue)=>{
      showInternationalIssue.value[issue.internationalIssueNo] = `${issue.internationalIssueNo}-1`;
    });
  })
</script>
<style lang="scss">

</style>