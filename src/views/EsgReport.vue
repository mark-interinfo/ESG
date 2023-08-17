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
          <div id="issue-tags">
            <div class="issue-tag pointer" data-id="1.關於報告書" id="1.關於報告書">1.關於報告書</div>
            <div class="issue-tag pointer" data-id="2.經營理念與永續策略" id="2.經營理念與永續策略">2.經營理念與永續策略</div>
            <div class="issue-tag pointer" data-id="3.重大主題鑑別" id="3.重大主題鑑別">3.重大主題鑑別</div>
            <div class="issue-tag pointer" data-id="4.所辨識出之重大主題" id="4.所辨識出之重大主題">4.所辨識出之重大主題</div>
            <div class="issue-tag pointer" data-id="5.治理面" id="5.治理面">5.治理面</div>
            <div class="issue-tag pointer" data-id="+" id="+">+</div>
          </div>
          <div id="issue-edit" class="pointer" data-name="編輯章節"></div>
        </div>
        <div id="issue-body">
          <div class="issue-content">
            <div>
              <div class="issue-item pointer" data-item="1.關於報告書">
                <div class="issue-title">
                  <span>1.關於報告書</span>
                  <img src="/src/assets/images/select.svg" alt="">
                </div>
                <div>
                  <table class="indicators">
                    <tr>
                      <td>標題 (一) 代號</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>標題 (一) 名稱</td>
                      <td><input type="text"></td>
                    </tr>
                    <tr class="listItem">
                      <td colspan="2">
                        <span>
                          <div>標題 (二) 項目</div>
                          <input type="button" class="button buttonColor3" value="01-2董事會結構及運作情形" @click="showSecondDialog">
                          <input type="button" class="button buttonColor3" value="+ 新增">
                        </span>
                        <span>
                          <div>標題 (三) 項目</div>
                        <input type="button" class="button buttonColor3" value="+ 新增">
                        <input type="button" class="button buttonColor3" value="+ 新增">
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

                <div class="issue-item pointer" data-item="1.關於報告書">
                  <div class="issue-title">
                    <span>02.法規遵循</span>
                    <img src="/src/assets/images/select.svg" alt="">
                  </div>
                </div>

                <div class="issue-item pointer" data-item="1.關於報告書">
                  <div class="issue-title">
                    <span>03.參與各類社團組織</span>
                    <img src="/src/assets/images/select.svg" alt="">
                  </div>
                </div>

                <div class="issue-item pointer" data-item="1.關於報告書">
                  <div class="issue-title">
                    <span>04.其他</span>
                    <img src="/src/assets/images/select.svg" alt="">
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
            <input type="text" placeholder="請填寫">
          </div>
          <div>
            <p>
              標題名稱
            </p>
            <input type="text" placeholder="請填寫">
          </div>

          <div>
            <p>參考依據</p>
            <div class="items" @click="showDialogSelecterReference">
            </div>
          </div>
          <div>
            <p>資料來源</p>
            <div class="items" @click="showDialogSelecterSource">
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
          <button class="button buttonColor1" @click="addInternationalIssue">確認</button>
        </div>
      </div>
    </div>

    <!-- CommonDialogSelecterComponent 參考依據 -->
    <CommonDialogSelecterComponent
    :isShowDialogSelecter="isShowDialogSelecterReference"
    :selectMulti="true"
    :option="referenceTemp"
    :optionType="'object'"
    :selected="targetReference"
    @closeDialogSelecter="closeDialogSelecterReference"
    @industrySetting=""
    />

    <!-- CommonDialogSelecterComponent 資料來源 -->
    <CommonDialogSelecterComponent
    :isShowDialogSelecter="isShowDialogSelecterSource"
    :selectMulti="true"
    :option="sourceTemp"
    :optionType="'object'"
    :selected="targetSource"
    @closeDialogSelecter="closeDialogSelecterSource"
    @industrySetting=""
    />
  </div>
</template>
<script setup>
  import { onMounted, onUpdated, ref } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
  import CommonDialogSelecterComponent from "../components/CommonDialogSelecterComponent.vue";
  import { APICollection } from '../mixin/api';

  (async() => {
    let apiData = await APICollection.QuerySustainable({});
    console.log(apiData)
    
  })().catch(err=>{
  }).then(()=>{
    switchOpen();
  });

  const ESGReport = ref([
    {
      firstTitle: '關於本報告書',
      secondSection: [
        {
          secondTitle: '報告書資訊',
          secondIndex: '01',
          thirdSection: [
            {
              thirdTitle: '基本資料',
              thirdIndex: '01-1',
              indicator: {
                GRI: ['2-1', '2-6']
              }
            }
          ]
        }
      ]
    },
    {
      firstTitle: '經營者的話',
      secondSection: [
        {
          thirdSection: [
            {
              indicator: {
                GRI: ['2-1', '2-6']
              }
            }
          ]
        }
      ]
    }
  ]);

  const referenceTemp = ref({
    GRI: [
      {name: "2-1-組織詳細資訊", value: "2-1"},
      {name: "2-2-組織永續報導中包含的實體", value: "2-2"},
      {name: "2-3-報導期間、頻率及聯絡人", value: "2-3"},
    ],
    SASB: [
      {name: "3-1-組織詳細資訊", value: "3-1"},
      {name: "3-2-組織永續報導中包含的實體", value: "3-2"},
      {name: "3-3-報導期間、頻率及聯絡人", value: "3-3"},
    ],
  });

  const sourceTemp = ref({
    E: [
      {name: "溫室氣體排放1", value: "E0001"},
      {name: "溫室氣體排放2", value: "E0002"},
      {name: "溫室氣體排放3", value: "E0003"},
    ],
    S: [
      {name: "人力發展1", value: "S0001"},
      {name: "人力發展2", value: "S0002"},
      {name: "人力發展3", value: "S0003"},
    ],
  });

  // 編輯標題（二）項目
  const isShowSecondDialog = ref(false);
  const targetSecondNote = ref('');

  const showSecondDialog = function(){
    isShowSecondDialog.value = true;
  };

  // CommonDialogSelecterComponent 參考依據
  const isShowDialogSelecterReference = ref(false);
  const targetReference = ref({
    GRI: [],
    SASB: [],
  });
  const showDialogSelecterReference = function(){
    isShowDialogSelecterReference.value = true;
  };
  const closeDialogSelecterReference = function(){
    isShowDialogSelecterReference.value = false;
  };

  // CommonDialogSelecterComponent 資料來源
  const isShowDialogSelecterSource = ref(false);
  const targetSource = ref({
    E: [],
    S: [],
  });
  const showDialogSelecterSource = function(){
    isShowDialogSelecterSource.value = true;
  };
  const closeDialogSelecterSource = function(){
    isShowDialogSelecterSource.value = false;
  };

  onMounted(()=>{
    switchOpen();
    document.querySelector(".issue-tag").click();
  });

  onUpdated(()=>{
    switchOpen();
    document.querySelector(".issue-tag").click();
  });
</script>
<style lang="scss">

  #EsgReport{
    padding-bottom: 20px;
  }

  .content:has( > .title + #issue){
    width:880px;
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


  .listItem > td > span{
    width:calc(50% - 20px);
  }

  .listItem > td > span + span{
    margin-left:20px;
    padding-left:20px;
  }

  .listItem > td > span > input{
    width:calc(100% - 2px);
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


</style>