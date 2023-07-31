<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div
        class="issue-tag pointer"
        v-for="item in issueType"
        :key="item.key"
        :class="{ 'selected': item.key === issueTypeSelected }"
        @click="selectIssueType(item.key)">
          {{ item.name }}
        </div>
      </div>
      <div
      id="issue-toggle"
      class="pointer"
      @click="toggleAll()"
      >
        {{ toggleAllText }}
      </div>
    </div>
    <div
    class="issue-item pointer"
    v-for="issue in issueListComputed"
    :key="issue.id"
    :class="{'opening': issue.opening}"
    >
      <div
      class="issue-title"
      @click="toggleIssue(issue.id)"
      >
        <span>
          {{ issueType.find(item => item.key === issue.key).name }} - {{ issue.id }} {{ issue.name }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <template v-if="issue.id === 'E001' && ( issueTypeSelected === 'all' || issueTypeSelected === 'environment')">
        <E001_GreenhouseGases :opening="issue.opening"/>
      </template>
      <template v-if="issue.id === 'E002' && ( issueTypeSelected === 'all' || issueTypeSelected === 'environment')">
        <E002_EnergyManagement :opening="issue.opening"/>
      </template>
      <template v-if="issue.id === 'E003' && ( issueTypeSelected === 'all' || issueTypeSelected === 'environment')">
        <E003_WaterManagement :opening="issue.opening"/>
      </template>
      <template v-if="issue.id === 'S001' && ( issueTypeSelected === 'all' || issueTypeSelected === 'society')">
        <S001_HumanDevelopment :opening="issue.opening"/>
      </template>
      <template v-if="issue.id === 'G001' && ( issueTypeSelected === 'all' || issueTypeSelected === 'governance')">
        <G001_DirectorsBoard :opening="issue.opening"/>
      </template>
      <template v-if="issue.id === 'G002' && ( issueTypeSelected === 'all' || issueTypeSelected === 'governance')">
        <G002_InvestorCommunication :opening="issue.opening"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import E001_GreenhouseGases from './EsgExpose/EsgExposeEnvironment/E001_GreenhouseGases.vue';
import E002_EnergyManagement from './EsgExpose/EsgExposeEnvironment/E002_EnergyManagement.vue';
import E003_WaterManagement from './EsgExpose/EsgExposeEnvironment/E003_WaterManagement.vue';
import G001_DirectorsBoard from './EsgExpose/EsgExposeGovernance/G001_DirectorsBoard.vue';
import G002_InvestorCommunication from './EsgExpose/EsgExposeGovernance/G002_InvestorCommunication.vue';
import S001_HumanDevelopment from './EsgExpose/EsgExposeSociety/S001_HumanDevelopment.vue';

const issueTypeSelected = ref('all');
const issueType = ref([
  { name: '全部議題', key: 'all' },
  { name: '環境', key: 'environment' },
  { name: '社會', key: 'society' },
  { name: '治理', key: 'governance' },
]);
const selectIssueType = function (key) {
  issueTypeSelected.value = key;
  issueList.value.forEach(item => {
    item.opening = false;
  })
};

const issueList = ref([
  // 環境
  { id:'E001', key: 'environment', name:'溫室氣體排放', opening: false },
  { id:'E002', key: 'environment', name:'能源管理', opening: false },
  { id:'E003', key: 'environment', name:'水資源管理', opening: false },
  // 社會
  { id:'S001', key: 'society', name:'人力發展', opening: false },
  // 治理
  { id:'G001', key: 'governance', name:'董事會', opening: false },
  { id:'G002', key: 'governance', name:'投資人溝通', opening: false },
]);
const issueListComputed = computed(()=>{
  if( issueTypeSelected.value === 'all' ){
    return issueList.value;
  }
  return issueList.value.filter(item => item.key === issueTypeSelected.value);
});
const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
};
const toggleAllText = computed(() => {
  for(let i=0 ; i<issueListComputed.value.length ; i+=1){
    if(issueListComputed.value[i].opening === false){
      return '展開全部';
    }
  }
  return '收闔全部';
});
const toggleAll = function(){
  let isAllOpen = issueListComputed.value.reduce((num, item) => {
    return num*=item.opening;
  }, 1);
  if( isAllOpen === 1 ){
    issueList.value.forEach(item => {
      item.opening = false;
    })
  } else {
    issueList.value.forEach(item => {
      item.opening = true;
    })
  }
};

</script>
<style lang="scss" scoped>
@import './EsgExpose/EsgExpose.scss';
</style>
