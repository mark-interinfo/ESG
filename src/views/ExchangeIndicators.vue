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
      <ExchangeIndicatorsContent />
    </template>
    <template v-if="issueTypeSelected === 'society'">
      <ExchangeIndicatorsContent />
    </template>
    <template v-if="issueTypeSelected === 'governance'">
      <ExchangeIndicatorsContent />
    </template>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';

  const apiRequest = ref({
      companyId: "1101",
      year: '110'
  });
  // (async() => {
  //     console.log(await APICollection.QueryESGData(apiRequest));
  // })();

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