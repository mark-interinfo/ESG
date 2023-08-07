<template>
  <div id="issue" class="EsgMatrix">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer" 
        v-for="item in issueType"
        :key="item.key"
        :id="item.key">
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <template v-if="issueTypeSelected === 'environment'">
      <EsgMatrixContent />
    </template>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import EsgMatrixContent from './EsgMatrixContent.vue';

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

  .EsgMatrix{
    margin-top:20px!important;

    select{
      background-color:#fff;
    }

    .add:before{
      content:"";
      width:20px;
      height:20px;
      display:inline-block;
      background:url(../assets/images/add.svg)center/cover no-repeat;
      vertical-align: middle;
    }

    div > span:first-of-type{
      text-align: inherit!important;
    }

    div > span > div:first-of-type{
      color:#37D880;
    }

    .title{
      background-color:#fafafa!important;

      select{
        width:100%!important;
      }

      > span{
        width:calc(50% - 10px);
        > span:nth-of-type(1){
          width:120px;
        }
        > span:nth-of-type(2){
          width:calc(100% - 140px);
        }
      }
      
    }

    .item > span{
      width:calc(100% / 3 - 20px)!important;
      padding:10px!important;
      vertical-align: top!important;
      select{width:100%!important;}
      input[type="button"]{width:100%;}
      >div{padding:5px 0;}
    }

    tr > td{width:inherit!important;background:#fff!important;}

    tr > td[rowspan]{text-align: center;}

    tr > td[colspan]{
      width:inherit!important;
      text-align: right;
      background: #fafafa!important;
    }
  }

</style>