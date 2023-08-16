<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer"
        :class="{ 'selected': item === issueTypeSelected }"
        v-for="item in top"
        :data-item="item.issueKind"
        :data-id="item"
        :key="item"
        :id="item"
        >
          {{ item }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <div id="issue-body">
      <ExchangeIndicatorsContent
      :allIndustry="allIndustry"
      :allIssue="allIssue"
      :allType="allType"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, onUpdated, watch } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import { APICollection } from '../mixin/api.js';
  import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';

  const apiRequest = ref({});
  const emits = defineEmits(['watchData']);

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
    top.value.push("+");
    issueTypeSelected.value = top.value[0];
  })().catch(err=>{
      alert(err.resultMessage);
  });;

  const issueTypeSelected = ref();

  watch(allIssue, ()=>{
    emits('watchData', { allIssue: allIssue.value });
  }, {deep: true});

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