<template>
  <div>
    <div
    class="issue-item pointer"
    v-for="issue in props.allIssue"
    :key="issue.issueType"
    data-item="environment"
    >
      <div class="issue-title">
        <span>
          {{ issue.issueType }} {{ issue.issueTitle }}
        </span>
        <img src="../assets/images/select.svg" alt="">
      </div>
      <div class="issue-content">
        <table>
          <tr>
              <td>
                適用產業別
              </td>
              <td>
                <span>
                    <select>
                        <option>請選擇</option>
                        <option
                        v-for="item in props.allIndustry"
                        :key="item.value"
                        :value="item.value"
                        >
                          {{item.name}}
                        </option>
                    </select>
                </span>
              </td>
          </tr>
          <template v-for="item in issue.issueList">
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <span>
                      <select>
                          <option>請填寫</option>
                          <option selected :value="item.targetTitle">{{ item.targetTitle }}</option>
                      </select>
                  </span>
                </td>
            </tr>
            <tr v-for="input in item.targetList">
                <td>
                  指標細項（一）
                </td>
                <td>
                  <div>
                    <span>
                      使用狀態
                    </span>
                    <span>
                        <span><input type="radio" name="a"><span>開啟</span></span>
                        <span><input type="radio" name="a"><span>停用</span></span>
                    </span>
                  </div>
                  <div>
                    <span>
                      細項名稱
                    </span>
                    <span>
                        <input type="text" placeholder="請填寫"
                        :value="input.title">
                    </span>
                  </div>
                  <div>
                    <span>
                      輸入方式
                    </span>
                    <span>
                        <input
                        type="button"
                        class="button buttonColor3"
                        :value="inputMethodComputed(input.type)"
                        @click="openDialog"
                        >
                    </span>
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
  import { computed, ref , onUpdated ,onMounted} from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
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

  onMounted(()=>{
    switchOpen();
  });
  
  
  onUpdated(()=>{
    switchOpen();
  });

</script>