<template>
  <div id="EsgReport">
    <div class="content">
      <div class="title">
        <CommonCompanyTitle />
        <span id="buttonBox">
          <!-- <a download="" href="#" class="button buttonColor3">下載範本</a> -->
          <!-- <span>
            <label for="inner" class="button buttonColor3">匯入</label>
            <input id="inner" type="file" accept=".csv,.xls,.xlsx">
          </span> -->
          <input class="button buttonColor3" id="submit" type="button" value="儲存" @click="exceSustainable()">
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
                <div v-for="item1 in sustainable.CAP_NO1List">
                  <div class="issue-title">
                    <span>{{item1.NO1 + item1.NAME1}}</span>
                    <img src="/src/assets/images/select.svg" alt="">
                  </div>
                  <div class="issue-content">
                    <template v-if="item1.CAP_NO2List.length === 0">
                      <table class="indicators">
                        <tr>
                          <td>參考依據</td>
                          <td>
                            <div
                            class="items"
                            @click="showDialogSelecterAccording(item1.ACCORDING1, item1)"
                            >
                              <span v-for="item2 in item1.ACCORDING1">
                                <template v-for="(internationalList) in allInternationalTarget">
                                  <template v-if="internationalList.find(child => child.value === item2)">
                                    {{ internationalList.find(child => child.value === item2).name }}
                                  </template>
                                </template>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>備註</td>
                          <td>
                            <input type="text" placeholder="請填寫" v-model="item1.NOTE1">
                          </td>
                        </tr>
                        <tr>
                          <td>資料來源</td>
                          <td>
                            <div
                            class="items"
                            @click="showDialogSelecterSource(item1.SOURCE1, item1)"
                            >
                              <span v-for="item2 in item1.SOURCE1">
                                <template v-for="(list) in allTarget">
                                  <template v-if="list.find(child => child.value === item2)">
                                    {{ list.find(child => child.value === item2).name }}
                                  </template>
                                </template>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </template>
                    <template v-for="item2 in item1.CAP_NO2List">
                      <div>
                        <div class="issue-title">
                          <span>{{ item2.NO2 +  item2.NAME2}}</span>
                        </div>
                        <div class="issue-content">
                          <template v-if="item2.CAP_NO3List.length === 0">
                            <table class="indicators">
                              <tr>
                                <td>參考依據</td>
                                <td>
                                  <div
                                  class="items"
                                  @click="showDialogSelecterAccording(item2.ACCORDING2, item2)"
                                  >
                                    <span v-for="item3 in item2.ACCORDING2">
                                      <template v-for="(internationalList) in allInternationalTarget">
                                        <template v-if="internationalList.find(child => child.value === item3)">
                                          {{ internationalList.find(child => child.value === item3).name }}
                                        </template>
                                      </template>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>備註</td>
                                <td>
                                  <input type="text" placeholder="請填寫" v-model="item2.NOTE2">
                                </td>
                              </tr>
                              <tr>
                                <td>資料來源</td>
                                <td>
                                  <div
                                  class="items"
                                  @click="showDialogSelecterSource(item2.SOURCE2, item2)"
                                  >
                                    <span v-for="item3 in item2.SOURCE2">
                                      <template v-for="(list) in allTarget">
                                        <template v-if="list.find(child => child.value === item3)">
                                          {{ list.find(child => child.value === item3).name }}
                                        </template>
                                      </template>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </template>
                          <template v-for="item3 in item2.CAP_NO3List">
                            <div>
                              <div class="issue-title">
                                <span style="padding-left: 20px;">{{ item3.NO3 +  item3.NAME3}}</span>
                              </div>
                              <div class="issue-content">
                                <table class="indicators">
                                  <tr>
                                    <td>參考依據</td>
                                    <td>
                                      <div
                                      class="items"
                                      @click="showDialogSelecterAccording(item3.ACCORDING3, item3)"
                                      >
                                        <span v-for="item4 in item3.ACCORDING3">
                                          <template v-for="(internationalList) in allInternationalTarget">
                                            <template v-if="internationalList.find(child => child.value === item4)">
                                              {{ internationalList.find(child => child.value === item4).name }}
                                            </template>
                                          </template>
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>備註</td>
                                    <td>
                                      <input type="text" placeholder="請填寫" v-model="item3.NOTE3">
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>資料來源</td>
                                    <td>
                                      <div
                                      class="items"
                                      @click="showDialogSelecterSource(item3.SOURCE3, item3)"
                                      >
                                        <span v-for="item4 in item3.SOURCE3">
                                          <template v-for="(list) in allTarget">
                                            <template v-if="list.find(child => child.value === item4)">
                                              {{ list.find(child => child.value === item4).name }}
                                            </template>
                                          </template>
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="buttonBox">
              <input type="button" class="button buttonColor3" value="新增議題">
            </div> -->
          </div>
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

  const changeAddress = ref({});

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

  const exceSustainable = async function(){
    await APICollection.ExceSustainable({ allSustainable: allSustainable.value});
  };


  // CommonDialogSelecterComponent 參考依據
  const isShowDialogSelecterAccording = ref(false);
  const targetAccording = ref({});
  const showDialogSelecterAccording = function(according, objAddress){
    isShowDialogSelecterAccording.value = true;
    Object.keys(allInternationalTarget.value).forEach(item => {
      targetAccording.value[item] = [];
    });
    according.forEach(item => {
      targetAccording.value[item.split('_')[0]].push(item);
    });
    changeAddress.value = objAddress;
  };
  const closeDialogSelecterAccording = function(){
    isShowDialogSelecterAccording.value = false;
  };
  const updateTargetAccording = function(data){
    let result = [];
    isShowDialogSelecterAccording.value = false;
    Object.values(data).forEach(item=>{
      result = [...result, ...item];
    });
    if(changeAddress.value.ACCORDING1){
      changeAddress.value.ACCORDING1 = result;
    }
    if(changeAddress.value.ACCORDING2){
      changeAddress.value.ACCORDING2 = result;
    }
    if(changeAddress.value.ACCORDING3){
      changeAddress.value.ACCORDING3 = result;
    }
  };

  // CommonDialogSelecterComponent 資料來源
  const isShowDialogSelecterSource = ref(false);
  const targetSource = ref({});
  const showDialogSelecterSource = function(source, objAddress){
    isShowDialogSelecterSource.value = true;
    Object.keys(allTarget.value).forEach(item => {
      targetSource.value[item] = [];
    });
    source.forEach(item => {
      Object.keys(targetSource.value).forEach(key => {
        if(item.startsWith(key)){
          targetSource.value[key].push(item);
        }
      });
    });

    changeAddress.value = objAddress;
  };
  const closeDialogSelecterSource = function(){
    isShowDialogSelecterSource.value = false;
  };
  const updateTargetSource = function(data){
    let result = [];
    isShowDialogSelecterSource.value = false;
    Object.values(data).forEach(item=>{
      result = [...result, ...item];
    });

    if(changeAddress.value.SOURCE1){
      changeAddress.value.SOURCE1 = result;
    }
    if(changeAddress.value.SOURCE2){
      changeAddress.value.SOURCE2 = result;
    }
    if(changeAddress.value.SOURCE3){
      changeAddress.value.SOURCE3 = result;
    }
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
<style lang="scss" scoped>

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
        vertical-align: text-bottom;
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