<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div
        class="issue-tag pointer"
        :class="{'selected': item.key === issueTypeSelected}"
        v-for="item in issueType"
        :key="item.key"
        @click="selectIssueType(item.key)"
        >
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer">
        展開全部
      </div>
    </div>
    <template v-if="issueTypeSelected === 'environment' || issueTypeSelected === 'all'">
      <EsgExposeEnvironment/>
    </template>
    <template v-if="issueTypeSelected === 'society' || issueTypeSelected === 'all'">
      <EsgExposeSociety/>
    </template>
    <template v-if="issueTypeSelected === 'governance' || issueTypeSelected === 'all'">
      <EsgExposeGovernance/>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EsgExposeEnvironment from './EsgExpose/EsgExposeEnvironment.vue';
import EsgExposeSociety from './EsgExpose/EsgExposeSociety.vue';
import EsgExposeGovernance from './EsgExpose/EsgExposeGovernance.vue';

const issueTypeSelected = ref('all');
const issueType = ref([
  {name:'全部議題', key:'all'},
  {name:'環境', key:'environment'},
  {name:'社會', key:'society'},
  {name:'治理', key:'governance'},
]);
const selectIssueType = function(key){
  issueTypeSelected.value = key;
}

</script>
<style lang="scss" scoped>
  #issue{
    width: 1000px;
    max-width: 90%;
    margin: 0 auto 12px auto;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 4px 4px 0px #EFEFEF;
    #issue-header{
      display: flex;
      justify-content: space-between;
      #issue-tags{
        font-size: 0;
        .issue-tag{
          box-sizing: border-box;
          display: inline-block;
          width: 96px;
          font-size: 14px;
          text-align: center;
          padding: 10px 20px;
          color: #BEBEBE;
          background: #fff;
          outline: 1px solid #EFEFEF;
          &.selected{
            color: #fff;
            background: #37D880;
          }
        }
      }
      #issue-toggle{
        font-size: 14px;
        padding: 10px 20px;
        color: #808080;
      }
    }
    .issue-item{
      display: flex;
      justify-content: space-between;
      padding: 13px 20px;
      font-size: 14px;
      border: 1px solid #EFEFEF;
    }
  }

  :deep(.issue-content){
    height: 0;
    overflow: hidden;
    &.opening{
        height: auto;
    }
    table{
        background:#ccc;border-spacing:1px;width: 100%;
        
        tr > td:first-of-type{
          background:#fafafa;
          vertical-align: text-top;
          width:25%;
      } 

        td{
            background:#fff;
            padding:10px;
            color:#525252;
            span{padding:5px;vertical-align: middle;}
        }
    }

    .small{width: 167px!important;}

    li{
        + li{margin-top:20px;}
        div > span{
            vertical-align: middle;
            &:first-of-type{width:90px;text-align:right;}
            + span{width: calc(100% - 114px);}

            > input[type="text"],select{
                width:350px;
            }
            > input[type="text"] + .unit{margin-left: -80px;font-size:14px;padding: 0 20px;}
            > input[type="text"]:has( + .unit){padding-right:60px;}
        }
    }

    div > input[type="text"]{
        width: 460px;margin-top:10px;
    }

  }
</style>