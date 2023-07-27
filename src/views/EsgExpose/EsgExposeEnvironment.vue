<template>
  <div
  class="issue-item pointer"
  v-for="issue in issueList"
  :key="issue.id"
  :class="{'opening': issue.opening}"

  >
    <div class="issue-title"  @click="toggleIssue(issue.id)">
      <span>
        環境 - {{ issue.id }} {{ issue.name }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div v-if="issue.id === 'E001'">
      <E001_GreenhouseGases :opening="issue.opening"/>
    </div>
    <div v-if="issue.id === 'E002'">
      <E002_EnergyManagement :opening="issue.opening"/>
    </div>
    <div v-if="issue.id === 'E003'">
      <E003_WaterManagement :opening="issue.opening"/>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import E001_GreenhouseGases from './EsgExposeEnvironment/E001_GreenhouseGases.vue';
import E002_EnergyManagement from './EsgExposeEnvironment/E002_EnergyManagement.vue';
import E003_WaterManagement from './EsgExposeEnvironment/E003_WaterManagement.vue';
const issueList = ref([
  { id:'E001', name:'溫室氣體排放', opening: false },
  { id:'E002', name:'能源管理', opening: false },
  { id:'E003', name:'水資源管理', opening: false },
]);

const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
}
</script>