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
    <input type="button" class="button buttonColor3" value="新增指標議題">
  </div>
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