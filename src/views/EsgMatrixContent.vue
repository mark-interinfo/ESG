<template>
  <div id="issue-body">
    <div class="pointer">
      <div class="issue-content">
        <table>
          <tr>
            <td class="tableHead">
              項目
            </td>
            <td>
              <span>
                國際指標
              </span>
            </td>
          </tr>
          <tr
            v-for="issue in props.allMatrix"
            :key="issue.id"
            :data-item ="issue.ISSUE_KIND"
            class="issue-item"
          >
            <td class="tableHead">
              {{ issue.TAR_NAME }}
            </td>
            <td>
              <div
                class="items"
                @click="openDialogSelecter(issue.Matrix, issue)"
              >
                <template v-for="(checkedList, type) in issue.Matrix">
                  <span v-for="checkedItem in checkedList">
                    {{ props.allInternationalTarget[type].find(item => item.value === checkedItem).name }}
                  </span>
                </template>
                <!-- <input type="hidden" :name="issue.ISSUE_NO" v-model="issue.Matrix.GRI"> -->
              </div>
            </td>
          </tr>
        </table>
      </div>
      <CommonDialogSelecterComponent
      :isShowDialogSelecter="isShowDialogSelecter"
      :selectMulti="true"
      :option="props.allInternationalTarget"
      :optionType="'object'"
      :selected="targetIndustry"
      @closeDialogSelecter="closeDialogSelecter"
      @industrySetting="industrySetting"
      />
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';

  const props = defineProps({
    allInternationalTarget: {
      type: Object,
    },
    allMatrix: {
      type: Array,
    },
    top: {
      type: Array,
    },
  });

  // CommonDialogSelecterComponent
  const targetIndustry = ref([]);
  const changeList = ref([]);
  const isShowDialogSelecter = ref(false);

  const openDialogSelecter = function(industry, list){
    targetIndustry.value = industry;
    isShowDialogSelecter.value = true;
    changeList.value = list;
  }
  const closeDialogSelecter = function(){
    isShowDialogSelecter.value = false;
  }
  const industrySetting = function(data){
    isShowDialogSelecter.value = false;
    changeList.value.Matrix = data;
  }
</script>