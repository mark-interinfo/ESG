<template>
  <div id="issue" class="InternationalIndicatorsContent">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer"
        :class="{ 'selected': item.key === issueTypeSelected }"
        v-for="item in issueType"
        :key="item.key"
        :data-id="item.key">
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <InternationalIndicatorsContent/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onUpdated ,onMounted } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import InternationalIndicatorsContent from './InternationalIndicatorsContent.vue';

  const issueType = ref([
    { name: 'GRI', key: 'GRI' },
    { name: 'SASB', key: 'SASB' },
    { name: 'TCFD', key: 'TCFD' },
  ]);

  onMounted(()=>{
    switchOpen();
  });

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
      border-top: 1px solid #efefef;

      &:not(:has( table)){
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
      }
    }

    span > input[type="button"]{width:350px;}
    
    td[colspan]{text-align: right;}
  }

</style>