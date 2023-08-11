<template>
    <div id="esgInfoContent" class="content">
        <div>
            <CommonCompanyTitle/>
            <span id="buttonBox">
                <input v-if="['/EditEsgInfo'].includes(route.path)" class="button buttonColor3" id="del" type="button" value="刪除">
                <input v-if="pathName1.includes(route.path)" class="button buttonColor3" id="inner" type="button" value="匯入">
                <input v-if="pathName.includes(route.path)" class="button buttonColor3" id="inner" type="button" value="AI智能輸入">
                <input v-if="pathName.includes(route.path)" class="button buttonColor1" id="submit" type="button" value="送出" @click="safeData">
            </span>
            <ExchangeIndicators v-if="['/ExchangeIndicators'].includes(route.path)"/>
            <InternationalIndicators v-if="['/InternationalIndicators'].includes(route.path)"/>
            <EsgMatrix v-if="['/EsgMatrix'].includes(route.path)"/>
        </div>
        <span>
            <EsgExposeInfo @watchData="watchData" @safeData="safeData" v-if="pathName.includes(route.path)"/>
        </span>
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
    const pathName1 = ref(["/EditEsgInfo","/ApplyEsgInfo","/ExchangeIndicators"]);

    const getData = ref();

    const watchData = (data) =>{
      getData.value = data.value;
    };

    const safeData = () =>{
      
      const data={};
      data.year = getData.value.year;
      data.data = getData.value.data;
      data.companyId = getData.value.companyId;
      console.log(data);

      (async() => {
        let back = await APICollection.ExecReportData(data);
        console.log(back);
      })();
      
    }

</script>

<style lang="scss">
  #issue {
    width: 1000px;
    max-width: 90%;
    margin: 20px auto;

    box-shadow: 1px 1px 8px rgba(0,0,0,.1);

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

    .issue-item {

      &.opening {
        background: #ebfbf2;

        .issue-content{
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

    .issue-content {
      height: 0;
      overflow: hidden;

      &[id^="E0"] select,
      &[id^="E0"] input[type="text"],
      &[id^="G0"] select,
      &[id^="G0"] input[type="text"] {
        width: 460px;
      }

      &[id="ExchangeIndicators"] select,
      &[id="ExchangeIndicators"] input[type="text"],
      &[id="ExchangeIndicators"] div > .button{
        width: 400px;
      }

      &.opening {
        height: auto;
        overflow: inherit;
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
            width:80px;
            line-height: 40px;
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

          .items{
            border:1px solid #efefef;
            padding:8px 10px;
            width:550px;
            border-radius: 3px;
            background: url(/src/assets/images/select.svg)calc(100% - 10px) center/auto no-repeat;

            span{
              background: #F5FDF9;
              color:#2FB86D;
              font-size: 12px;
              padding:4px 8px;
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

          > div{
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