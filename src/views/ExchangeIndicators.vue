<template>
  <div id="issue" class="ExchangeIndicators">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer"
        :class="{ 'selected': item.key === issueTypeSelected }"
        v-for="item in issueType"
        :key="item.key"
        :id="item.key">
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <template v-if="issueTypeSelected === 'environment'">
      <ExchangeIndicatorsContent
      :allIndustry="allIndustry"
      :allType="allType"
      />
    </template>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import { APICollection } from '../mixin/api.js';
  import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';

  const apiRequest = ref({
    companyId: "1101",
    year: '110'
  });

  const allIndustry = ref([]);
  const allIssue = ref([]);
  const allType = ref([]);

  (async() => {
    let apiData = await APICollection.QueryESGData(apiRequest);
    allIndustry.value = apiData.allIndustry;
    allIssue.value = apiData.allIssue;
    allType.value = apiData.allType;
  })();

  const issueTypeSelected = ref('environment');
  const issueType = ref([
    { name: '環境', key: 'environment' },
    { name: '社會', key: 'society' },
    { name: '治理', key: 'governance' },
  ]);
  onMounted(() => {
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