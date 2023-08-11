<template>
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
      <div class="issue-content" id="ExchangeIndicators">
        <table class="indicators">
          <template v-if="true">
            
            <tr>
                <td>
                  指標代號
                </td>
                <td>
                  <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                  適用產業別
                </td>
                <td>
                  <div class="items">
                    <span>全部產業別</span>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                  指標備註
                </td>
                <td>
                  <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                  使用狀態
                </td>
                <td>
                  <div>
                    <input type="radio">
                    <span>開啟</span>
                  </div>
                  <div>
                    <input type="radio">
                    <span>停用，自</span>
                    <input type="text" class="year" placeholder="請輸入民國年">
                    <span class="unit">年</span>
                    <span>起停用此項目</span>
                  </div>
                </td>
            </tr>
          </template>
          <tr>
            <td colspan="2">
              <input type="button" value="新增指標細項" class="button buttonColor3">
              <input type="button" value="更新設定" class="button buttonColor1">
            </td>
          </tr>
        </table>
      </div>
    </div>
    <CommonDialogComponent
    :isShowDialog="isShowDialog"
    :dailogType="'input'"
    :inputOption="allType"
    @closeDialog="closeDialog"
    @dailogType="dailogType"
    />
  </div>
</template>
<script setup>
  import { computed, ref } from 'vue';
  import CommonDialogComponent from '../components/CommonDialogComponent.vue';

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

  const isShowDialog = ref(false);
  const openDialog = function(){
    isShowDialog.value = true;
  }
  const closeDialog = function(){
    isShowDialog.value = false;
  }
  const dailogType = function(method){
    isShowDialog.value = false;
  }
</script>