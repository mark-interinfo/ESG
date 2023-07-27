<template>
  <div id="issue" class="ExchangeIndicators">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer" :class="{ 'selected': item.key === issueTypeSelected }" v-for="item in issueType"
          :key="item.key" @click="selectIssueType(item.key)">
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer">
        展開全部
      </div>
    </div>
    <template v-if="issueTypeSelected === 'environment'">
      <ExchangeIndicatorsContent />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';


const issueTypeSelected = ref('environment');
const issueType = ref([
  { name: '環境', key: 'environment' },
  { name: '社會', key: 'society' },
  { name: '治理', key: 'governance' },
]);
const selectIssueType = function (key) {
  issueTypeSelected.value = key;
}

</script>
<style lang="scss">

  .ExchangeIndicators{
    margin-top:20px!important;

    span > input[type="button"]{width:350px;}
    td[colspan]{text-align: right;}
  }

</style>