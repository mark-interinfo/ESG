<template>
  
  <div id="issue-body">
    <div
    class="pointer"
    
    >
      
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
                @click="openDialogSelecter(issue.Matrix.GRI,issue)"
              >
                <span 
                  v-for="target in issue.Matrix"
                >
                {{props.allInternationalTarget.GRI.find((item)=> item.value == target).name}}</span>
                <input type="hidden" :name="issue.ISSUE_NO" v-model="issue.Matrix.GRI">
              </div>
            </td>
          </tr>
          
          </table>
      </div>
      <CommonDialogSelecterComponent
      :isShowDialogSelecter="isShowDialogSelecter"
      :selectMulti="true"
      :option="props.allInternationalTarget && props.allInternationalTarget.GRI"
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

  const openDialogSelecter = function(industry,list){
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