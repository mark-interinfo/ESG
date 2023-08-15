<template>
    <div id="editEsgInfo">
        <div class="content">
          <div class="title">
            <CommonCompanyTitle/>
            <span id="buttonBox">
              <input v-if="pathName1.includes(route.path)" class="button buttonColor3" id="del" type="button" value="下載範本">

              <input v-if="['/EditEsgInfo'].includes(route.path)" class="button buttonColor3" id="del" type="button" value="刪除">

              <span v-if="pathName1.includes(route.path)">
                <label for="inner" class="button buttonColor3">匯入</label>
                <input id="inner" type="file" accept=".csv,.xls,.xlsx" @input="FileInfo">
              </span>

              <span v-if="pathName1.includes(route.path)">
                <label for="aiInner" class="button buttonColor3">AI智能輸入</label>
                <input id="aiInner" type="file" accept=".pdf" @input="FileInfo">
              </span>

              <input v-if="pathName.includes(route.path)" class="button buttonColor1" id="submit" type="button" value="送出" @click="safeData">

              <input v-if="pathName2.includes(route.path)" class="button buttonColor3" id="submit" type="button" value="儲存" @click="safeData">
            </span>
          </div>
          <ExchangeIndicators @watchData="watchData" v-if="['/ExchangeIndicators'].includes(route.path)"/>
          <InternationalIndicators @watchData="watchData" v-if="['/InternationalIndicators'].includes(route.path)"/>
          <EsgMatrix @watchData="watchData" v-if="['/EsgMatrix'].includes(route.path)"/>
      </div>
      <div id="esgExposeInfo">
          <EsgExposeInfo @watchData="watchData" v-if="pathName.includes(route.path)"/>
      </div>
    </div>
</template>
<script setup>
    import EsgExposeInfo from "../views/EsgExposeInfo.vue";
    import ExchangeIndicators from "../views/ExchangeIndicators.vue";
    import InternationalIndicators from "../views/InternationalIndicators.vue";
    import EsgMatrix from "../views/EsgMatrix.vue";
    import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    import { APICollection } from '../mixin/api';

    const route = useRoute();
    const pathName = ref(["/EditEsgInfo","/ApplyEsgInfo"]);
    const pathName1 = ref(["/EditEsgInfo","/ApplyEsgInfo","/ExchangeIndicators","/InternationalIndicators","/EsgMatrix"]);
    const pathName2 = ref(["/ExchangeIndicators","/InternationalIndicators","/EsgMatrix"]);

    const getData = ref();

    const watchData = (data) =>{
      getData.value = data;
    };

    const safeData = () =>{

      let data={};

      (async() => {
        let back = '';
        // 申報頁面
        if(route.path === '/EditEsgInfo'){
          data.year = getData.value.year;
          data.data = getData.value.data;
          data.companyId = getData.value.companyId;
          back = await APICollection.ExecReportData(data);
        }
        // 證交所核心指標設定
        if(route.path === '/ExchangeIndicators'){
          data = getData.value;
          back = await APICollection.ExecESGData(data);
        }
        // 國際準則指標設定
        if(route.path === '/InternationalIndicators'){
          data = getData.value;
          back = await APICollection.ExecInternationalData(data);
        }
        // ESG資訊矩陣設定
        if(route.path === '/EsgMatrix'){
          data = getData.value;
          back = await APICollection.ExecESGData(data);
        }


        // console.log(back);
        // alert(back.state);
      })().catch(err=>{
        // alert(err.resultMessage);
      });
    };

    const FileInfo = (event) =>{
      var id = event.target.id;
      var file = event.target.files[0];
      var fileDetail = {};
      fileDetail.name = file.name;
      fileDetail.size = file.size;
      fileDetail.type = file.type;

      var fileReader = new FileReader();
      
      fileReader.onload = function(e){
          fileDetail.result = e.target.result.split(",")[1];

          console.log(fileDetail)

          //匯入
          if(id == "inner"){
            inner.value="";
            (async() => {
              let back = await APICollection.UploadRepotExcel(fileDetail);
              console.log(back);
              back.data && setInputValue(back.data);
              alert(back.msg);
            })().catch(err=>{
              alert(err.resultMessage);
            });
          };

          //AI智能輸入
          if(id == "aiInner"){
            aiInner.value = "";
            (async() => {
              let back = await APICollection.UploadPDF(fileDetail);
              console.log(back);
              back.data && setInputValue(back.data);
              alert(back.msg);
            })().catch(err=>{
              alert(err.resultMessage);
            });
          };

          const setInputValue = (data) => {
            for(var i=0;i<Object.keys(data).length;i++){
              let name = Object.keys(data)[i];
              let value = data[name];

              if(document.querySelector("input[name='"+name+"'][type='radio']")){
                document.querySelector("[name='"+name+"'][value='"+value+"']").checked = true;
              }else{
                document.querySelector("[name='"+name+"']").value = value;
              };
            };
          };
      };
      fileReader.readAsDataURL(event.target.files[0]);
    };

</script>

<style lang="scss">

  .content:has( > .title + #issue){
    width:880px;
    margin:0 auto;
    padding:20px 40px;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 3px;;
  }
  

  .title:has( + #issue){
    width:100%;
    padding: 0;
  }

  #editEsgInfo{
    padding-bottom: 20px;
  }



  #issue {
    width: 960px;
    max-width: 100%;
    margin: 20px auto;


    #issue-header {
      display: flex;
      justify-content: space-between;

      #issue-tags {
        font-size: 0;

        .issue-tag {
          box-sizing: border-box;
          display: inline-block;
          font-size: 14px;
          text-align: center;
          padding: 10px 20px;
          color: #BEBEBE;
          background: #fff;
          outline: 1px solid #EFEFEF;

          &.selected {
            color: #fff;
            background: #37D880;
          }

          &:not(.selected) {
            cursor: pointer;
          }
        }
      }

      #issue-toggle {
        font-size: 14px;
        padding: 10px 20px;
        color: #808080;
        cursor: pointer;
        transition: .3s;

        &:before{
          content:attr(data-name);
          display:block;
        }

        &:hover{
          color:#37D880;
        }
      }
    }

    #issue-body{
      box-shadow: 0 5px 5px rgba(0,0,0,.2);
    }

    .issue-item {

      &.opening {
        background: #ebfbf2;

        .content{
          height:auto;
          overflow: inherit;
        }
        .issue-title{
          svg {
            transform: rotate(180deg);
          }
          img {
            transform: rotate(180deg);
          }
        }
      }

      & + .issue-item .issue-title{
        border-top:none;
      }
    }

    .issue-title {
      display: flex;
      justify-content: space-between;
      padding: 13px 20px;
      font-size: 14px;
      border: 1px solid #EFEFEF;
      cursor: pointer;
      
      + .issue-title {
        border-top: none;
      }

      svg {
        transition-duration: .3s;

        path {
          stroke: #808080;
        }
      }
      img {
        transition-duration: .3s;
      }
    }

    .issue-title + .issue-content{
      height: 0;
      overflow: hidden;
    }

    .opening > .issue-content {
      height: auto;
      overflow: inherit;
    }
    

    .issue-content {

      &[id^="E0"] select,
      &[id^="E0"] input[type="text"],
      &[id^="G0"] select,
      &[id^="G0"] input[type="text"] {
        width: 460px;
      }

      &[id="ExchangeIndicators"] select,
      &[id="ExchangeIndicators"] input[type="text"],
      &[id="ExchangeIndicators"] div:not[class] > .button{
        width: 400px;
      }

      

      .issue-group {
        display: flex;
        flex-direction: row;

        .issue-left {
          flex: 0 0 180px;
          border: 1px solid #EFEFEF;
          padding: 12px 20px;
        }

        .issue-right {
          flex: 1 1 auto;
          border: 1px solid #EFEFEF;
          padding: 12px 20px;
        }
      }

      table {
        background: #efefef;
        border-spacing: 1px;
        width: 100%;

        &.indicators{
          border-spacing: 0;
          background: #fafafa;

          tr > td:first-of-type {
            background: none;
            width:100px;
            line-height: 40px;
            padding:12px 20px;
          }

          td{
            background:none;
          }

          select{
            background: #efefef;
          }

          input[type="text"],
          select{
            width:570px;
          }

          input.year{
            width:140px;
            margin-left:10px;
            padding-right:20px!important;
            box-sizing: border-box;

            + .unit{
              width:20px;
              margin-left:-30px;
            }
          }

          
        }

        tr > td:first-of-type {
          background: #fafafa;
          vertical-align: text-top;
          width: 25%;
        }

        td {
          background: #fff;
          padding: 10px;
          color: #525252;

          span{
            vertical-align: middle;
          }

          input {
            vertical-align: middle;
          }

          span:has(+ .notice-icon){
            padding: 0;
          }

          > div:not[class]{
              padding:5px 0;

              + div{
                margin-top: 10px;
              }

              > div{
                margin-top:10px;

                > span{
                  + span{
                    margin-left:10px;
                  }
                }
              }
          }
        }
      }

      li {
        + li {
          margin-top: 20px;
        }

        > div{
          margin-top:10px;

          span{
            + span{
              margin-left:10px;
            }
          }
        }

      }

      input[type="text"]+.unit {
        margin-left: -110px;
        font-size: 14px;
        width: 100px;
        padding: 0 10px 0 0;
        text-align: right;
      }

      input[type="text"]:has(+ .unit) {
        padding-right: 110px;
      }

      .unit+* {
        margin-left: 15px;
      }

    }
  }

  #esgInfoContent {
    padding: 20px;

    > div {

      &:has(h1 + #buttonBox){
        padding:20px;
      }

      >span {
        display: inline-block;
        vertical-align: middle;
      }
    }

    >span {
      margin: 0 auto;
      display: block;
    }

  }

</style>