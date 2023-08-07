<template>
  <div id="issue" class="InternationalIndicatorsContent">
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
    <InternationalIndicatorsContent/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import InternationalIndicatorsContent from './InternationalIndicatorsContent.vue';

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

  .InternationalIndicatorsContent{
    margin-top:20px!important;

    span > input[type="button"]{width:350px;}
    td[colspan]{text-align: right;}
  }

</style>