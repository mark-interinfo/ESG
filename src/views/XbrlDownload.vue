<template>

  <div id="XbrlDownload">
    <div>
      <CommonCompanyTitle/>
      <div class="content">
        <span>
          選擇年度
        </span>
        <select>
          <option>110年</option>
          <option>111年</option>
          <option>112年</option>
        </select>
      </div>
      <div class="buttonBox">
        <a download href="" class="button buttonColor1">下載</a>
      </div>
    </div>
  </div>
  
</template>
<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
</script>
<style lang="scss">
  #XbrlDownload{
    box-shadow: 1px 1px 8px rgba(0, 0, 0, .2);
    width: 1000px;
    max-width: 90%;
    margin: 20px auto;
    border-radius: 3px;
    box-sizing: border-box;

    #company{
      padding:20px 0 10px;
      border-bottom:1px solid #efefef;
      display: block;
      margin: 0 40px;
    }

    .content{
      padding: 20px 40px;

       > span{
        width:100px;
       }

       select{
        width:350px;
       }
    }

    .buttonBox{
      text-align: right;
      padding: 12px 20px;
      background:#fafafa;
      border-top: 1px solid #efefef;
    }
  }

</style>