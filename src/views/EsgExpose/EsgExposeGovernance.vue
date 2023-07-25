<template>
  <div
  class="issue-item pointer"
  v-for="issue in issueList"
  :key="issue.id"
  >
    <div
    class="issue-title"
    :class="{'opening': issue.opening}"
    @click="toggleIssue(issue.id)"
    >
      <span>
        治理 - {{ issue.id }} {{ issue.name }}
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div v-if="issue.id === 'G001'">
      <G001_DirectorsBoard
      :opening="issue.opening"
      />
    </div>
    <div v-if="issue.id === 'G002'">
      <G002_InvestorCommunication
      :opening="issue.opening"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import G001_DirectorsBoard from './EsgExposeGovernance/G001_DirectorsBoard.vue';
import G002_InvestorCommunication from './EsgExposeGovernance/G002_InvestorCommunication.vue';
const issueList = ref([
  {
    id:'G001',
    name:'董事會',
    opening: false,
  },
  {
    id:'G002',
    name:'投資人溝通',
    opening: false,
  },
]);

const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
}
</script>
<style lang="scss" scoped>
// common-setting
.color-waring{
  color: #F76868;
}
.d-flex{
  display: flex;
}
.align-items-center{
  align-items: center;
}
.me-8{
  margin-right: 8px;
}
.mb-0{
  margin-bottom: 0px;
}
.mb-8{
  margin-bottom: 8px;
}
.mb-20{
  margin-bottom: 20px;
}
p{
  margin-top: 0;
}
input{
  height: 40px;
  width: 180px;
  font-size: 14px;
  background: #EFEFEF;
  border: 1px solid #EFEFEF;
}
input[placeholder]{
  background: #fff;
}
// page-setting
.issue-title{
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  font-size: 14px;
  border: 1px solid #EFEFEF;
  svg{
    transition-duration: .3s;
    path{
      stroke: #272727;
    }
  }
  &.opening{
    background: #ebfbf2;
    svg{
      transform: rotate(180deg);
      path{
        stroke: #37d880;
      }
    }
  }
}
.issue-content{
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition-duration: .3s;
  &.opening{
    height: auto;
  }
  .issue-group{
    display: flex;
    flex-direction: row;
    .issue-left{
      flex: 0 0 180px;
      border: 1px solid #EFEFEF;
      padding: 12px 20px;
    }
    .issue-right{
      flex: 1 1 auto;
      border: 1px solid #EFEFEF;
      padding: 12px 20px;
    }
  }
}
</style>