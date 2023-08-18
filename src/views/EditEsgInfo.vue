<template>
    <div id="editEsgInfo">
        <div>
          <div class="title">
            <CommonCompanyTitle/>
            <span id="buttonBox">

              <!--下載範本-->
              <a download href="https://192.168.10.108/poc/samples/ESGReportData.xls" v-if="pathName3.includes(route.path)" class="button buttonColor3">下載範本</a>
              <a download href="https://192.168.10.108/poc/samples/CoreESGData.xls" v-if="['/ExchangeIndicators'].includes(route.path)" class="button buttonColor3">下載範本</a>
              <a download href="https://192.168.10.108/poc/samples/InternationalData.xls" v-if="['/InternationalIndicators'].includes(route.path)" class="button buttonColor3">下載範本</a>
              <a download href="https://192.168.10.108/poc/samples/ESGMatrixData.xls" v-if="['/EsgMatrix'].includes(route.path)" class="button buttonColor3">下載範本</a>

              <input v-if="['/EditEsgInfo'].includes(route.path)" class="button buttonColor3" id="del" type="button" value="刪除">

              <span v-if="pathName1.includes(route.path)">
                <label for="inner" class="button buttonColor3">匯入</label>
                <input id="inner" type="file" accept=".csv,.xls,.xlsx" @input="FileInfo">
              </span>

              <span v-if="pathName3.includes(route.path)">
                <label for="aiInner" class="button buttonColor3">AI智能輸入</label>
                <input id="aiInner" type="file" accept=".pdf" @input="FileInfo">
              </span>

              <input v-if="pathName3.includes(route.path)" class="button buttonColor1" id="submit" type="button" value="送出" @click="safeData">

              <input v-if="pathName2.includes(route.path)" class="button buttonColor3" id="submit" type="button" value="儲存" @click="safeData">
            </span>
          </div>

          <!-- 證交所核心指標設定 -->
          <template v-if="['/ExchangeIndicators'].includes(route.path)">
              <div id="issue" >
                <div id="issue-header">
                  <div id="issue-tags">
                    <div class="issue-tag pointer"
                      v-for="item1 in top1"
                      :data-item="item1.issueKind"
                      :data-id="item1"
                      :key="item1"
                      :id="item1"
                    >
                      {{ item1 }}
                    </div>
                  </div>
                  <div id="issue-toggle" class="pointer"></div>
                </div>
                <div id="issue-body">
                  <ExchangeIndicatorsContent
                    :allIndustry="allIndustry"
                    :allIssue="allIssue"
                    :allType="allType"
                    :showIssueList="showIssueList"
                    @addNewIssue="addNewIssue"
                    @addNewIssueCode="addNewIssueCode"
                    @addIssueDetailDialog="addIssueDetailDialog"
                  />
                </div>
              </div>
          </template>

          <!-- 國際準則指標設定 -->
          <template v-if="['/InternationalIndicators'].includes(route.path)">
              <div id="issue" class="InternationalIndicatorsContent">
                <div id="issue-header">
                  <div id="issue-tags">
                    <div class="issue-tag pointer"
                    v-for="item2 in top2"
                    :data-id="item2"
                    :key="item2"
                    :id="item2"
                    >
                      {{ item2 }}
                    </div>
                  </div>
                  <div id="issue-toggle" class="pointer"></div>
                </div>
                <InternationalIndicatorsContent
                  :allInternationalIssue="allInternationalIssue"
                  :allIndustry="allIndustry"
                  :allInternationalTarget="allInternationalTarget"
                  :showInternationalIssue="showInternationalIssue"
                  @addInternationalIssue="addInternationalIssue"
                  @addInternationalTargetNo="addInternationalTargetNo"
                />
              </div>
          </template>

          <!-- ESG資訊矩陣設定 -->
          <template v-if="['/EsgMatrix'].includes(route.path)">
              <div id="issue" class="EsgMatrix">
                <div id="issue-header">
                  <div id="issue-tags">
                    <div class="issue-tag pointer"
                      v-for="item3 in top3"
                      :data-id="item3"
                      :key="item3"
                    >
                      {{ item3 }}
                    </div>
                  </div>
                </div>
                <EsgMatrixContent
                  :allMatrixTarget="allMatrixTarget"
                  :allMatrix="allMatrix"
                />
              </div>
          </template>
      </div>
      <div id="esgExposeInfo">
          <EsgExposeInfo
            @watchData="watchData"
            v-if="pathName.includes(route.path)"
          />
      </div>
    </div>
</template>
<script setup>
    import EsgExposeInfo from "../views/EsgExposeInfo.vue";
    import ExchangeIndicatorsContent from './ExchangeIndicatorsContent.vue';
    import InternationalIndicatorsContent from './InternationalIndicatorsContent.vue';
    import EsgMatrixContent from './EsgMatrixContent.vue';
    import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
    import { onUpdated, ref } from 'vue';
    import { APICollection } from '../mixin/api';
    import { switchOpen } from '../mixin/mixin.js';
    import { useRouter,useRoute } from 'vue-router';

    const router = useRouter();

    const route = useRoute();

    const pathName = ref(["/EditEsgInfo","/ApplyEsgInfo","/LookEsgInfo"]);
    const pathName1 = ref(["/EditEsgInfo","/ApplyEsgInfo","/ExchangeIndicators","/InternationalIndicators","/EsgMatrix"]);
    const pathName2 = ref(["/ExchangeIndicators","/InternationalIndicators","/EsgMatrix"]);
    const pathName3 = ref(["/EditEsgInfo","/ApplyEsgInfo"]);

    const getData = ref();

    // 證交所核心指標設定
    const allIndustry = ref([]);
    const allIssue = ref([]);
    const allType = ref([]);
    const top1 = ref([]);

    const showIssueList = ref({});

    (async() => {
      let apiData1 = await APICollection.QueryESGData({});
      allIndustry.value = apiData1.allIndustry;
      allIssue.value = apiData1.allIssue;
      allType.value = apiData1.allType;
      top1.value = apiData1.top;
      top1.value.push("+");

      allIssue.value.forEach(issue=>{
        showIssueList.value[issue.issueType] = '1';
      });
    })().catch(err=>{
    }).then(()=>{
      switchOpen();
    });

    const addNewIssue = function(newIssue){
      allIssue.value.push(newIssue);
    };

    const addNewIssueCode = function(info){
      let data = info.data;
      data.targetStatus = {
        isOnYear: "",
        isOn: true
      }
      data.targetType = allIssue.value[info.issueIndex].issueList.length + 1;
      allIssue.value[info.issueIndex].issueList.push(data);
    }

    const addIssueDetailDialog = function(data){
      let [issueKind, targetType] = data.fieldId.split('_');
      let fieldLength = allIssue.value.find(issue => issue.issueType === issueKind).issueList.find(target=>target.targetType === targetType).targetList.length;
      allIssue.value.find(issue => issue.issueType === issueKind).issueList.find(target=>target.targetType === targetType).targetList.push({
        fieldId: `${data.fieldId}_${fieldLength + 1}`,
        note: data.note,
        optionList: data.optionList,
        required: false,
        status: {isOnYear: "", isOn: true},
        title: data.title,
        type: data.type
      })
    }

    // 國際準則指標設定
    const allInternationalIssue = ref([]);
    const allInternationalTarget = ref([]);
    const top2 = ref([]);

    const showInternationalIssue = ref({});

    (async() => {
      let apiData2 = await APICollection.QueryInternationalData({});
      allInternationalIssue.value = apiData2.allInternationalIssue;
      allIndustry.value = apiData2.allIndustry;
      allInternationalTarget.value = apiData2.allInternationalTarget;
      top2.value = apiData2.top;
      top2.value.push("+");

      showInternationalIssue.value = {};
      allInternationalIssue.value.forEach((issue)=>{
        showInternationalIssue.value[issue.internationalIssueNo] = `${issue.internationalIssueNo}-1`;
      });
    })().catch(err=>{
    }).then(()=>{
      switchOpen();
    });

    const addInternationalIssue = function(data){
      allInternationalIssue.value.push(data);
    }

    const addInternationalTargetNo = function(info){
      console.log(info)
      allInternationalIssue.value.find(item=> (item.guideLine === info.guideLine) && (item.internationalIssueNo === info.issueNo)).internationalIssueList.push(info.data);

      showInternationalIssue.value = {};
      allInternationalIssue.value.forEach((issue)=>{
        showInternationalIssue.value[issue.internationalIssueNo] = `${issue.internationalIssueNo}-1`;
      });
    }

    // ESG資訊矩陣設定
    const allMatrix = ref();
    const allMatrixTarget = ref([]);
    const top3 = ref([]);
    
    (async() => {
      let apiData3 = await APICollection.QueryMatrixData({});
      allMatrixTarget.value = apiData3.allMatrixTarget;
      allMatrix.value = apiData3.allMatrix;
      top3.value = apiData3.top;
    })().catch(err=>{
        alert(err.resultMessage);
        router.push("/HomeView");
    }).then(()=>{
      switchOpen();
    });

    onUpdated(()=>{
      setTimeout(()=>{
        switchOpen();
        document.querySelector(".issue-tag").click();
      },100)
    })

    // 共用方法

    const watchData = (data) =>{
      getData.value = data;
    };

    const safeData = () =>{
      let data={};

      (async() => {
        let back = '';
        // 申報編輯頁面
        if(route.path == '/EditEsgInfo'|| route.path == '/ApplyEsgInfo'){
          data.year = getData.value.year;
          data.data = getData.value.data;
          data.companyId = getData.value.companyId;
          back = await APICollection.ExecReportData(data);
        }

        // 證交所核心指標設定
        if(route.path == '/ExchangeIndicators'){
          back = await APICollection.ExecESGData({ allIssue: allIssue.value });
        }
        // 國際準則指標設定
        if(route.path == '/InternationalIndicators'){
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

              let back;

              if(route.path == "/ExchangeIndicators"){
                back = await APICollection.UploadESGExcel(fileDetail);
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
                  if(cont == allIssue.value.length){
                    allIssue.value.push(back.allIssue[i]);
                  };
                };
              };


              if(route.path == "/InternationalIndicators"){
                back = await APICollection.UploadInternationalExcel(fileDetail);
                console.log(back)
                for(var i=0;i<back.allInternationalIssue.length;i++){
                  var key = back.allInternationalIssue[i].internationalIssueName;
                  var cont = 0;
                  for(var a=0;a<allInternationalIssue.value.length;a++){
                    if(allInternationalIssue.value[a].internationalIssueName == key){
                      allInternationalIssue.value[a] = back.allInternationalIssue[i];
                      continue;
                    };
                    cont+=1;
                  };
                  if(cont == allInternationalIssue.value.length){
                    allInternationalIssue.value.push(back.allInternationalIssue[i]);
                  };
                };

                showInternationalIssue.value = {};
                allInternationalIssue.value.forEach((issue)=>{
                  showInternationalIssue.value[issue.internationalIssueNo] = `${issue.internationalIssueNo}-1`;
                });
                console.log(allInternationalIssue.value)
              };

              if(route.path == "/EsgMatrix"){
                back = await APICollection.UploadMatrixExcel(fileDetail);
                console.log(back)
                /* for(var i=0;i<back.allMatrix.length;i++){
                  var key = back.allMatrix[i].ISSUE_NO;
                  var no = back.allMatrix[i].TAR_NO;
                  var cont = 0;
                  for(var a=0;a<allMatrix.value.length;a++){
                    if(allMatrix.value[a].ISSUE_NO == key && allMatrix.value[a].TAR_NO){
                      allMatrix.value[a] = back.allMatrixTarget[i];
                      continue;
                    };
                    cont+=1;
                  };
                  if(cont == allMatrix.value.length){
                    allMatrix.value.push(back.allMatrixTarget[i]);
                  };
                }; */
              };
              
              alert(back.msg);

            })().catch(err=>{
              alert("error : " + err);
            }).then(()=>{
              switchOpen();
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

  .title:not(:has( + #issue)){
    max-width:calc(100% - 120px);
  }

  .title:has( + #issue){
    width:100%;
    max-width:calc(100% - 40px);
    padding: 0;
  }

  #editEsgInfo{
    padding-bottom: 20px;
    width:960px;
    max-width:calc(100% - 40px);
    margin:0 auto;
  }



  #issue {
    width: 960px;
    max-width: calc(100% - 40px);
    margin: 20px auto;


    #issue-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #efefef;

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
      background:#fff;
    }

    .issue-item {
      & + .issue-item .issue-title{
        border-top:none;
      }
    }

    .opening > .issue-title {
        background: #ebfbf2;

        .content{
          height:auto;
          overflow: inherit;
        }
        >svg {
          transform: rotate(180deg);
        }
        >img {
          transform: rotate(180deg);
        }
      }

    .issue-title {
      display: flex;
      justify-content: space-between;
      padding: 13px 20px;
      font-size: 14px;
      border-bottom: 1px solid #EFEFEF;
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

          

          input[type="text"],
          select{
            max-width: calc(100% - 150px);
            width:100%;
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
  
  .InternationalIndicatorsContent td[colspan]{
    text-align: right;
  }

</style>