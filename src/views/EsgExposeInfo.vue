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
    <template v-if="issueTypeSelected === 'environment' || issueTypeSelected === 'all'">
      <EsgExposeEnvironment/>
    </template>
    <template v-if="issueTypeSelected === 'society' || issueTypeSelected === 'all'">
      <EsgExposeSociety/>
    </template>
    <template v-if="issueTypeSelected === 'governance' || issueTypeSelected === 'all'">
      <EsgExposeGovernance/>
    </template>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import EsgExposeEnvironment from './EsgExpose/EsgExposeEnvironment.vue';
import EsgExposeSociety from './EsgExpose/EsgExposeSociety.vue';
import EsgExposeGovernance from './EsgExpose/EsgExposeGovernance.vue';

import { testCallAPI } from '../mixin/api';

const issueTypeSelected = ref('all');
const issueType = ref([
  {name:'全部議題', key:'all'},
  {name:'環境', key:'environment'},
  {name:'社會', key:'society'},
  {name:'治理', key:'governance'},
]);
const selectIssueType = function(key){
  issueTypeSelected.value = key;
}

testCallAPI();
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