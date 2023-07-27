<template>
  <div
  class="issue-item pointer"
  v-for="issue in issueList"
  :key="issue.id"
  :class="{'opening': issue.opening}"
  @click="toggleIssue(issue.id)"
  >
    <div class="issue-title">
      <span>
        社會 - {{ issue.id }} {{ issue.name }}
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <S001_HumanDevelopment :opening="issue.opening"/>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import S001_HumanDevelopment from './EsgExposeSociety/S001_HumanDevelopment.vue';
const issueList = ref([
  { id:'S001', name:'人力發展', opening: false },
]);

const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
}
</script>