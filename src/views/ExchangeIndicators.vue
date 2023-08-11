<template>
  <div id="issue" class="ExchangeIndicators">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer"
        :class="{ 'selected': item === issueTypeSelected }"
        v-for="item in top"
        :data-id="item"
        :key="item"
        :id="item"
        >
          {{ item }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <ExchangeIndicatorsContent
    :allIndustry="allIndustry"
    :allIssue="allIssue"
    :allType="allType"
    />
  </div>
</template>

<script setup>
  import { ref, onUpdated } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import { APICollection } from '../mixin/api.js';
  import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';

  const apiRequest = ref({});

  const allIndustry = ref([]);
  const allIssue = ref([]);
  const allType = ref([]);
  const top = ref([]);

  (async() => {
    let apiData = await APICollection.QueryESGData(apiRequest);
    allIndustry.value = apiData.allIndustry;
    allIssue.value = apiData.allIssue;
    allType.value = apiData.allType;
    top.value = apiData.top;
    issueTypeSelected.value = top.value[0];
  })().catch(err=>{
      alert(err.resultMessage);
  });;

  const issueTypeSelected = ref();

  onUpdated(()=>{
    switchOpen();
  });

</script>
<style lang="scss">

  .ExchangeIndicators{
    margin-top:20px!important;

    span > input[type="button"]{width:350px;}
    td[colspan]{text-align: right;}
  }

</style>