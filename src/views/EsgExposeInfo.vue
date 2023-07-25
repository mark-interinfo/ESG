<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div
        class="issue-tag pointer"
        :class="{'selected': item.key === issueTypeSelected}"
        v-for="item in issueType"
        :key="item.key"
        @click="selectIssueType(item.key)"
        >
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer">
        展開全部
      </div>
    </div>
    <div class="issue-item pointer" v-for="issue in issueListFilter" :key="issue.id">
      <span>
        {{ issueType.find(item => item.key === issue.type).name }} - {{ issue.id }} {{ issue.name }}
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9.5L11.7778 14.5L18 9.5" stroke="#272727" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
const issueTypeSelected = ref(false);
const issueType = ref([
  {name:'全部議題', key:false},
  {name:'環境', key:'environment'},
  {name:'社會', key:'society'},
  {name:'治理', key:'governance'},
]);
const selectIssueType = function(key){
  issueTypeSelected.value = key;
}

const issueList = ref([
  {type: 'environment', id:'E001', name:'溫室氣體排放'},
  {type: 'environment', id:'E002', name:'能源管理'},
  {type: 'environment', id:'E003', name:'水資源管理'},
  {type: 'society', id:'S001', name:'人力發展'},
  {type: 'governance', id:'G001', name:'董事會'},
  {type: 'governance', id:'G002', name:'投資人溝通'},
]);
const issueListFilter = computed(() => {
  if(issueTypeSelected.value){
    return issueList.value.filter(item => item.type === issueTypeSelected.value);
  }
  return issueList.value;
})
</script>
<style lang="scss" scoped>
  #issue{
    width: 1000px;
    max-width: 90%;
    margin: 0 auto 12px auto;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 4px 4px 0px #EFEFEF;
    #issue-header{
      display: flex;
      justify-content: space-between;
      #issue-tags{
        font-size: 0;
        .issue-tag{
          box-sizing: border-box;
          display: inline-block;
          width: 96px;
          font-size: 14px;
          text-align: center;
          padding: 10px 20px;
          color: #BEBEBE;
          background: #fff;
          outline: 1px solid #EFEFEF;
          &.selected{
            color: #fff;
            background: #37D880;
          }
        }
      }
      #issue-toggle{
        font-size: 14px;
        padding: 10px 20px;
        color: #808080;
      }
    }
    .issue-item{
      display: flex;
      justify-content: space-between;
      padding: 13px 20px;
      font-size: 14px;
      border: 1px solid #EFEFEF;
    }
  }
</style>