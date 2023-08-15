<template>
  <div id="issue" class="InternationalIndicatorsContent">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer"
        :class="{ 'selected': item.key === issueTypeSelected }"
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
    <InternationalIndicatorsContent
    :allInternationalIssue="allInternationalIssue"
    :allIndustry="allIndustry"
    :allInternationalTarget="allInternationalTarget"
    />
  </div>
</template>

<script setup>
  import { ref , onUpdated} from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import InternationalIndicatorsContent from './InternationalIndicatorsContent.vue';
  import { APICollection } from '../mixin/api.js';

  const apiRequest = ref({});
  const allInternationalIssue = ref([]);
  const allInternationalTarget = ref([]);
  const allIndustry = ref([]);
  const top = ref([]);

  (async() => {
    let apiData = await APICollection.QueryInternationalData(apiRequest);
    console.log(apiData)
    top.value = apiData.top;
    top.value.push("+");
    allInternationalIssue.value = apiData.allInternationalIssue;
    allIndustry.value = apiData.allIndustry;
    allInternationalTarget.value = apiData.allInternationalTarget;

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

  .InternationalIndicatorsContent{
    margin-top:20px!important;
    box-shadow: none!important;

    .issue-title{
      border-top: none!important;
    }

    .issue-item{

      &:not(:has( table)){
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
      }
    }

    span > input[type="button"]{width:350px;}
    
    td[colspan]{text-align: right;}
  }

</style>