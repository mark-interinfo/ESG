<template>
    <div id="editEsgInfo">
        <div class="content">
          <div class="title">
            <CommonCompanyTitle/>
            <span id="buttonBox">

              <!--下載範本-->
              <a download href="https://192.168.10.108/poc/samples/ESGReportData.xls" v-if="pathName.includes(route.path)" class="button buttonColor3">下載範本</a>
              <a download href="https://192.168.10.108/poc/samples/CoreESGData.xls" v-if="['/ExchangeIndicators'].includes(route.path)" class="button buttonColor3">下載範本</a>
              <a download href="https://192.168.10.108/poc/samples/InternationalData.xls" v-if="['/InternationalIndicators'].includes(route.path)" class="button buttonColor3">下載範本</a>
              <a download href="https://192.168.10.108/poc/samples/ESGMatrixData.xls" v-if="['/EsgMatrix'].includes(route.path)" class="button buttonColor3">下載範本</a>

              <input v-if="['/EditEsgInfo'].includes(route.path)" class="button buttonColor3" id="del" type="button" value="刪除">

              <span v-if="pathName1.includes(route.path)">
                <label for="inner" class="button buttonColor3">匯入</label>
                <input id="inner" type="file" accept=".csv,.xls,.xlsx" @input="FileInfo">
              </span>

              <span v-if="pathName.includes(route.path)">
                <label for="aiInner" class="button buttonColor3">AI智能輸入</label>
                <input id="aiInner" type="file" accept=".pdf" @input="FileInfo">
              </span>

              <input v-if="pathName.includes(route.path)" class="button buttonColor1" id="submit" type="button" value="送出" @click="safeData">

              <input v-if="pathName2.includes(route.path)" class="button buttonColor3" id="submit" type="button" value="儲存" @click="safeData">
            </span>
          </div>

          <!-- 證交所核心指標設定 -->
          <template v-if="['/ExchangeIndicators'].includes(route.path)">
            <keep-alive>
              <div id="issue" >
                <div id="issue-header">
                  <div id="issue-tags">
                    <div class="issue-tag pointer"
                    :class="{ 'selected': item === issueTypeSelected }"
                    v-for="item in top"
                    :data-item="item.issueKind"
                    :data-id="item"
                    :key="item"
                    :id="item"
                    >
                      {{ item }}
                    </div>
                  </div>
                  <div id="issue-toggle" class="pointer"></div>
                </div>
                <div id="issue-body">
                  <ExchangeIndicatorsContent
                  :allIndustry="allIndustry"
                  :allIssue="allIssue"
                  :allType="allType"
                  @addNewIssue="addNewIssue"
                  />
                </div>
              </div>
            </keep-alive>
          </template>

          <!-- 國際準則指標設定 -->
          <template v-if="['/InternationalIndicators'].includes(route.path)">
            <keep-alive>
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
                @addInternationalIssue="addInternationalIssue"
                />
              </div>
            </keep-alive>
          </template>

          <!-- ESG資訊矩陣設定 -->
          <template v-if="['/EsgMatrix'].includes(route.path)">
            <keep-alive>
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
            </keep-alive>
          </template>
      </div>
      <div id="esgExposeInfo">
          <EsgExposeInfo @watchData="watchData" v-if="pathName.includes(route.path)"/>
      </div>
    </div>
</template>
<script setup>
    import EsgExposeInfo from "../views/EsgExposeInfo.vue";
    import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';
    import InternationalIndicatorsContent from './InternationalIndicatorsContent.vue';
    import EsgMatrixContent from './EsgMatrixContent.vue';
    import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    import { APICollection } from '../mixin/api';
    import { switchOpen } from '../mixin/mixin.js';

    const route = useRoute();

    const pathName = ref(["/EditEsgInfo","/ApplyEsgInfo"]);
    const pathName1 = ref(["/EditEsgInfo","/ApplyEsgInfo","/ExchangeIndicators","/InternationalIndicators","/EsgMatrix"]);
    const pathName2 = ref(["/ExchangeIndicators","/InternationalIndicators","/EsgMatrix"]);

    const getData = ref();

    // 證交所核心指標設定
    const allIndustry = ref([]);
    const allIssue = ref([]);
    const allType = ref([]);
    const top = ref([]);

    const issueTypeSelected = ref();

    if(['/ExchangeIndicators'].includes(route.path)){
      (async() => {
        let apiData = await APICollection.QueryESGData({});
        allIndustry.value = apiData.allIndustry;
        allIssue.value = apiData.allIssue;
        allType.value = apiData.allType;
        top.value = apiData.top;
        top.value.push("+");
        issueTypeSelected.value = top.value[0];
      })().catch(err=>{
        alert(err.resultMessage);
      }).then(()=>{
        switchOpen();
      })
    }

    const addNewIssue = function(newIssue){
      allIssue.value.push(newIssue);
    };

    // 國際準則指標設定
    const allInternationalIssue = ref([]);
    const allInternationalTarget = ref([]);

    if(['/InternationalIndicators'].includes(route.path)){
      (async() => {
        let apiData = await APICollection.QueryInternationalData({});
        top.value = apiData.top;
        top.value.push("+");
        allInternationalIssue.value = apiData.allInternationalIssue;
        allIndustry.value = apiData.allIndustry;
        allInternationalTarget.value = apiData.allInternationalTarget;

        issueTypeSelected.value = top.value[0];
      })().catch(err=>{
          alert(err.resultMessage);
      }).then(()=>{
        switchOpen();
      })
    }

    // ESG資訊矩陣設定
    const allMatrix = ref();

    if(['/EsgMatrix'].includes(route.path)){
      (async() => {
        let apiData = await APICollection.QueryMatrixData({});
        allInternationalTarget.value = apiData.allInternationalTarget;
        allMatrix.value = apiData.allMatrix;
        top.value = apiData.top;
        issueTypeSelected.value = top.value[0];
      })().catch(err=>{
          alert(err.resultMessage);
      }).then(()=>{
        switchOpen();
      })
    }

    // 共用方法

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
          back = await APICollection.ExecESGData({ allIssue: allIssue.value });
        }
        // 國際準則指標設定
        if(route.path === '/InternationalIndicators'){
          data = getData.value;
          back = await APICollection.ExecInternationalData({ allInternationalIssue: allInternationalIssue.value});
        }
        // ESG資訊矩陣設定
        if(route.path === '/EsgMatrix'){
          data = getData.value;
          back = await APICollection.ExecMatrixData({ allMatrix: allMatrix.value});
        }

        console.log(back);
        alert(back.state);
      })().catch(err=>{
        alert(err.resultMessage);
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
          //console.log(route.path)
          //console.log(fileDetail)

          //指標匯入
          if(id == "inner" && pathName2.value.includes(route.path)){
            console.log("指標匯入")
            inner.value="";
            (async() => {
              let back = await APICollection.UploadESGExcel(fileDetail);

              console.log(back.allIssue)

              for(var i=0;i<back.allIssue.length;i++){
                var key = back.allIssue[i].issueType;
                var cont = 0;
                for(var a=0;a<allIssue.value.length;a++){
                  if(allIssue.value[a].issueType == key){
                    allIssue.value[a] = back.allIssue[i];
                    continue;
                  };
                  cont+=1;
                };
                console.log(cont,allIssue.length)
                if(cont == allIssue.value.length){
                  allIssue.value.push(back.allIssue[i]);
                };
              };
              alert(back.msg);

              setTimeout(function(){
                switchOpen();
              },500);
            })().catch(err=>{
              alert("error : " + err.resultMessage);
            });
          };

          //申報匯入
          if(id == "inner" && pathName.value.includes(route.path)){
            console.log("申報匯入")
            inner.value="";
            (async() => {
              var back = await APICollection.UploadRepotExcel(fileDetail);
              console.log(back);
              console.log(allIssue);
              setInputValue(back.data);
              alert(back.msg);
            })().catch(err=>{
              alert("error : " + err.resultMessage);
            });
          };

          //AI智能輸入
          if(id == "aiInner" && pathName.value.includes(route.path)){
            console.log("AI智能輸入")
            aiInner.value = "";
            (async() => {
              let back = await APICollection.UploadPDF(fileDetail);
              console.log(back);
              alert(back.msg);
            })().catch(err=>{
              alert("error : " + err.resultMessage);
            });
            return;
          };

          var setInputValue = (data) => {
            console.log(Object.keys(data))
            for(var i=0;i<Object.keys(data).length;i++){
              var name = Object.keys(data)[i];
              var value = data[name];
              if(document.querySelector("input[name='"+name+"'][type='radio']")){
                document.querySelector("[name='"+name+"'][value='"+value+"']").checked = true;
              }else{
                if(document.querySelector("[name='"+name+"']")){
                  document.querySelector("[name='"+name+"']").value = value;
                }else{
                  console.log("無欄位---"+name);
                };
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