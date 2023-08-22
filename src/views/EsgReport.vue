<template>
  <div id="EsgReport">
    <div class="content">
      <div class="title">
        <CommonCompanyTitle />
        <span id="buttonBox">
          <a download="" href="#" class="button buttonColor3">下載範本</a>
          <span>
            <label for="inner" class="button buttonColor3">匯入</label>
            <input id="inner" type="file" accept=".csv,.xls,.xlsx">
          </span>
          <input class="button buttonColor3" id="submit" type="button" value="儲存">
        </span>
      </div>
      <div id="issue">
        <div id="issue-header">
          <div id="issue-tags" v-for="sustainable in top">
            <div class="issue-tag pointer" :data-id="sustainable" :id="sustainable">{{ sustainable }}</div>
          </div>
          <div id="issue-edit" class="pointer" data-name="編輯章節"></div>
        </div>
        <div id="issue-body">
          <div>
            <div>
              <div class="issue-item pointer" :data-item="sustainable.NO +'.'+ sustainable.NAME"  v-for="(sustainable) in allSustainable">
                <div v-for="item in sustainable.CAP_NO1List">
                  <div class="issue-title">
                    <span>{{item.NO1 + item.NAME1}}</span>
                    <img src="/src/assets/images/select.svg" alt="">
                  </div>
                  <div class="issue-content">

                    <div class="issue-title">
                      <span>01-1公司治理架構</span>
                    </div>
                    <div class="issue-content">
                      <table class="indicators">
                        <tr>
                          <td>參考依據</td>
                          <td>
                            <div
                            class="items"
                            @click="openDialogSelecter(newTargetCodeArray)"
                            >
                              <span>GRI 305-2-能源間接（範疇二）溫室氣體排放</span>
                            </div>  
                          </td>
                        </tr>
                        <tr>
                          <td>備註</td>
                          <td>
                            <input type="text" placeholder="請填寫"> 
                          </td>
                        </tr>
                        <tr>
                          <td>資料來源</td>
                          <td>
                            <div class="items">
                              <span>直接氣體排放</span>
                              <span>廢棄物</span>
                            </div>  
                          </td>
                        </tr>
                      </table>
                    </div>

                  </div>
                </div>
              </div>

              
            </div>
            <div class="buttonBox">
              <input type="button" class="button buttonColor3" value="新增議題">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 編輯標題（二）項目 -->
    <div
    class="dialog-background"
    :class="{'show': isShowSecondDialog}"
    @click.self="isShowSecondDialog = false"
    >
      <div class="dialog-block">
        <div class="dialog-content">
          <div class="dialog-title">
            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.75" width="48" height="48" rx="24" fill="#F5FDF9"/>
              <path d="M14.75 31V17C14.75 16.4696 14.9607 15.9609 15.3358 15.5858C15.7109 15.2107 16.2196 15 16.75 15H32.75C33.2804 15 33.7891 15.2107 34.1642 15.5858C34.5393 15.9609 34.75 16.4696 34.75 17V31C34.75 31.5304 34.5393 32.0391 34.1642 32.4142C33.7891 32.7893 33.2804 33 32.75 33H16.75C16.2196 33 15.7109 32.7893 15.3358 32.4142C14.9607 32.0391 14.75 31.5304 14.75 31Z" fill="#2FB86D" stroke="#2FB86D" stroke-width="1.5"/>
              <path d="M14.75 19H34.75H14.75ZM21.75 26H24.75H21.75ZM27.75 26H24.75H27.75ZM24.75 26V23V26ZM24.75 26V29V26Z" fill="#2FB86D"/>
              <path d="M14.75 19H34.75M21.75 26H24.75M24.75 26H27.75M24.75 26V23M24.75 26V29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            編輯標題（二）項目
          </div>
          <div>
            <p>
              標題代號
            </p>
            <input type="text" placeholder="請填寫" v-model="targetSecondNo" disabled>
          </div>
          <div>
            <p>
              標題名稱
            </p>
            <input type="text" placeholder="請填寫" v-model="targetSecondName" disabled>
          </div>

          <div>
            <p>參考依據</p>
            <div class="items" @click="showDialogSelecterAccording()">
              <template v-for="(target, key) in targetAccording">
                <span v-for="checkedItem in target">
                  {{ allInternationalTarget[key].find(item => item.value === checkedItem).name }}
                </span>
              </template>
            </div>
          </div>
          <div>
            <p>資料來源</p>
            <div class="items" @click="showDialogSelecterSource()">
              <template v-for="(target, key) in targetSource">
                <span v-for="checkedItem in target">
                  {{ allTarget[key].find(item => item.value === checkedItem).name }}
                </span>
              </template>
            </div>
          </div>

          <div>
            <p>
              備註 (自訂參考依據說明)
            </p>
            <input type="text" placeholder="請填寫">
          </div>
        </div>
        <div class="dialog-footer">
          <button class="button buttonColor1" @click="isShowSecondDialog = false">取消</button>
          <button class="button buttonColor1" @click="updateAllSustainable">確認</button>
        </div>
      </div>
    </div>

    <!-- CommonDialogSelecterComponent 參考依據 -->
    <CommonDialogSelecterComponent
    :isShowDialogSelecter="isShowDialogSelecterAccording"
    :selectMulti="true"
    :option="allInternationalTarget"
    :optionType="'object'"
    :selected="JSON.parse(JSON.stringify(targetAccording))"
    @closeDialogSelecter="closeDialogSelecterAccording"
    @industrySetting="updateTargetAccording"
    />

    <!-- CommonDialogSelecterComponent 資料來源 -->
    <CommonDialogSelecterComponent
    :isShowDialogSelecter="isShowDialogSelecterSource"
    :selectMulti="true"
    :option="allTarget"
    :optionType="'object'"
    :selected="JSON.parse(JSON.stringify(targetSource))"
    :keyWord="keyWord"
    @closeDialogSelecter="closeDialogSelecterSource"
    @industrySetting="updateTargetSource"
    />

  </div>
</template>
<script setup>
  import { onUpdated, ref } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
  import CommonDialogSelecterComponent from "../components/CommonDialogSelecterComponent.vue";
  import { APICollection } from '../mixin/api';

  const allInternationalTarget = ref([]);
  const allSustainable = ref([]);
  const allTarget = ref([]);
  const top = ref([]);
  const keyWord = ref({});

  (async() => {
    let apiData = await APICollection.QuerySustainable({});
    allInternationalTarget.value = apiData.allInternationalTarget;
    allSustainable.value = apiData.allSustainable;
    allTarget.value = apiData.allTarget;
    top.value = apiData.top;
    keyWord.value = apiData.keyWord;
  })().catch(err=>{
  }).then(()=>{
    switchOpen();
  });

  // 編輯標題（二）項目
  const isShowSecondDialog = ref(false);
  const targetSecondNo = ref('');
  const targetSecondName = ref('');
  const targetAddress = ref({});

  const showSecondDialog = function(no, name, according, source, objAddress){
    isShowSecondDialog.value = true;
    targetSecondNo.value = no;
    targetSecondName.value = name;

    Object.keys(allInternationalTarget.value).forEach((key)=>{
      targetAccording.value[key] = [];
    });
    according.forEach((item)=>{
      if(targetAccording.value[item.split('_')[0]]){
        targetAccording.value[item.split('_')[0]].push(item);
      }
    });

    Object.keys(allTarget.value).forEach((key)=>{
      targetSource.value[key] = [];
    });
    source.forEach((item)=>{
      Object.keys(targetSource.value).forEach(key=>{
        if(item.startsWith(key)){
          targetSource.value[key].push(item);
        }
      })
      targetSource.value
    });

    targetAddress.value = objAddress;
  };

  const updateAllSustainable = function(){
    isShowSecondDialog.value = false;
  };

  // 編輯標題（二）項目
  // CommonDialogSelecterComponent 參考依據
  const isShowDialogSelecterAccording = ref(false);
  const targetAccording = ref({});
  const showDialogSelecterAccording = function(){
    isShowDialogSelecterAccording.value = true;
  };
  const closeDialogSelecterAccording = function(){
    isShowDialogSelecterAccording.value = false;
  };
  const updateTargetAccording = function(data){
    let result = [];
    isShowDialogSelecterAccording.value = false;
    targetAccording.value = data;
    Object.values(data).forEach(item=>{
      result = [...result, ...item];
    });
    targetAddress.value.ACCORDING2 = result;
  };

  // 編輯標題（二）項目
  // CommonDialogSelecterComponent 資料來源
  const isShowDialogSelecterSource = ref(false);
  const targetSource = ref({});
  const showDialogSelecterSource = function(){
    isShowDialogSelecterSource.value = true;
  };
  const closeDialogSelecterSource = function(){
    isShowDialogSelecterSource.value = false;
  };
  const updateTargetSource = function(data){
    let result = [];
    isShowDialogSelecterSource.value = false;
    targetSource.value = data;
    Object.values(data).forEach(item=>{
      result = [...result, ...item];
    });
    targetAddress.value.SOURCE2 = result;
  };

  onUpdated(()=>{
    if(!document.querySelector(".selected")){
      setTimeout(()=>{
        switchOpen();
        document.querySelector(".issue-tag").click();
      },100);
    };
  });

</script>
<style lang="scss">

  #EsgReport{
    padding-bottom: 20px;

    #issue-header{
      padding-right:100px;
      position: relative;
      flex-wrap: wrap;
      justify-content: inherit!important;

      > div{
        white-space: nowrap;
      }
    }

    #issue-edit{
      position: absolute;
      right:0;
      bottom:0;
    }
  }

  .content:has( > .title + #issue){
    width:880px;
    max-width: calc(100% - 80px);
    margin:0 auto;
    padding:20px 40px;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 3px;;
  }

  

  #issue-edit:before{
    content:attr(data-name);
    font-size: 14px;
    padding: 10px 20px;
    color: #37D880;
    cursor: pointer;
    transition: 0.3s;
    display: inline-block;
  }

  .listItem input[type="button"]{
    width:100%;
  }

  .listItem > td > span{
    width:calc(50% - 20px);
    vertical-align: top!important;
  }

  .listItem > td > span + span{
    margin-left:20px;
    padding-left:20px;
  }

  .listItem > td > span > input{
    width:calc(100% - 2px);
  }

  .title:has( + #issue){
    max-width:100%;
    padding: 0;
  }

  #editEsgInfo{
    padding-bottom: 20px;
  }



  #issue {
    width: 960px;
    max-width: 100%;
    margin: 20px auto;

    .buttonBox{
      text-align:right;
      padding:10px;
    }


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
        max-width:100%;
      }

      &[id="ExchangeIndicators"] select,
      &[id="ExchangeIndicators"] input[type="text"],
      &[id="ExchangeIndicators"] div:not[class] > .button{
        width: 400px;
        max-width:100%;
      }

      .issue-title > span:before{
        content:"";
        display:inline-block;
        vertical-align: middle;
        width:24px;
        height: 24px;
        background: url(../assets/images/childList.svg) center/cover no-repeat;
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
            min-width:100px;

            line-height: 40px;
            padding:12px 20px;
          }

          tr > td[colspan]{
            width:auto;
          }

          td{
            background:none;
          }

          

          input[type="text"],
          select{
            width:calc(100% - 20px);
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


</style>