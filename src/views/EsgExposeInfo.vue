<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div
        class="issue-tag pointer"
        v-for="item in issueType"
        :key="item.key"
        :id="item.key"
        >
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <div
    class="issue-item pointer"
    v-for="issue in issueList"
    :key="issue.key"
    :data-item ="issue.key"
    >
      <div class="issue-title">
        <span>
          {{ issueType.find(item => item.key === issue.key).name }} - {{ issue.id }} {{ issue.name }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <template v-if="issue.id === 'E001'">
        <E001_GreenhouseGases/>
      </template>
      <template v-if="issue.id === 'E002'">
        <E002_EnergyManagement/>
      </template>
      <template v-if="issue.id === 'E003'">
        <E003_WaterManagement/>
      </template>
      <template v-if="issue.id === 'S001'">
        <S001_HumanDevelopment/>
      </template>
      <template v-if="issue.id === 'G001'">
        <G001_DirectorsBoard/>
      </template>
      <template v-if="issue.id === 'G002'">
        <G002_InvestorCommunication/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import E001_GreenhouseGases from './EsgExpose/EsgExposeEnvironment/E001_GreenhouseGases.vue';
  import E002_EnergyManagement from './EsgExpose/EsgExposeEnvironment/E002_EnergyManagement.vue';
  import E003_WaterManagement from './EsgExpose/EsgExposeEnvironment/E003_WaterManagement.vue';
  import S001_HumanDevelopment from './EsgExpose/EsgExposeSociety/S001_HumanDevelopment.vue';
  import G001_DirectorsBoard from './EsgExpose/EsgExposeGovernance/G001_DirectorsBoard.vue';
  import G002_InvestorCommunication from './EsgExpose/EsgExposeGovernance/G002_InvestorCommunication.vue';

  const issueType = ref([
    { name: '全部議題', key: 'all' },
    { name: '環境', key: 'environment' },
    { name: '社會', key: 'society' },
    { name: '治理', key: 'governance' },
  ]);

  const issueList = ref([
    // 環境
    { id:'E001', key: 'environment', name:'溫室氣體排放' },
    { id:'E002', key: 'environment', name:'能源管理' },
    { id:'E003', key: 'environment', name:'水資源管理' },
    // 社會
    { id:'S001', key: 'society', name:'人力發展' },
    // 治理
    { id:'G001', key: 'governance', name:'董事會' },
    { id:'G002', key: 'governance', name:'投資人溝通' },
  ]);

  onMounted(() => {
    switchOpen();
  });
  
</script>
