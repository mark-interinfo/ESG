<template>
  <div id="issue" class="EsgMatrix">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer"
          :class="{ 'selected': item.key === issueTypeSelected }"
          v-for="item in top"
          :data-id="item"
          :key="item.key"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <EsgMatrixContent
    :allInternationalTarget="allInternationalTarget"
    :allMatrix="allMatrix"
    :top="top"
    />
  </div>
</template>

<script setup>
  import { ref ,onUpdated, watch} from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import EsgMatrixContent from './EsgMatrixContent.vue';
  import { APICollection } from '../mixin/api';

  const emits = defineEmits(['watchData']);

  const apiRequest = ref({});
  const allInternationalTarget = ref();
  const allMatrix = ref();
  const top = ref();
  const data = ref();

  (async() => {
    data.value = await APICollection.QueryMatrixData(apiRequest);
    allInternationalTarget.value = data.value.allInternationalTarget;
    allMatrix.value = data.value.allMatrix;
    top.value = data.value.top;
    issueTypeSelected.value = top.value[0];
  })().catch(err=>{
      alert(err.resultMessage);
  });

  const issueTypeSelected = ref();

  watch(allMatrix, ()=>{
    emits('watchData', { allMatrix: allMatrix.value });
  }, {deep: true});

  onUpdated(()=>{
    switchOpen();
  });

</script>
<style lang="scss">

  .EsgMatrix{
    margin-top:20px!important;

    .items{
      min-height:45px;
    }

    select{
      background-color:#fff;
      width: 550px;
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

    .tableHead{
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