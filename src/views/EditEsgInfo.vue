<template>
    <div id="esgInfoContent">
        <div>
            <h1>{{route.name}}</h1>
            <span id="company" v-if="pathName.includes(route.path)">
                <span>公司代號 : 0714</span>
                <span>公司名稱 : 英特內股份有限公司</span>
            </span>
            <span id="buttonBox">
                <input v-if="['/EditEsgInfo'].includes(route.path)" class="button buttonColor3" id="del" type="button" value="刪除">
                <input v-if="pathName.includes(route.path)" class="button buttonColor3" id="inner" type="button" value="匯入">
                <input v-if="pathName.includes(route.path)" class="button buttonColor3" id="inner" type="button" value="AI智能輸入">
                <input v-if="pathName.includes(route.path)" class="button buttonColor1" id="submit" type="button" value="送出">
            </span>
            <ExchangeIndicators  v-if="['/ExchangeIndicators'].includes(route.path)"/>
            <InternationalIndicators  v-if="['/InternationalIndicators'].includes(route.path)"/>
            <EsgMatrix  v-if="['/EsgMatrix'].includes(route.path)"/>
        </div>
        <span>
            <EsgExposeInfo  v-if="pathName.includes(route.path)"/>
        </span>
    </div>
</template>
<script setup>
    import EsgExposeInfo from "../views/EsgExposeInfo.vue";
    import ExchangeIndicators from "../views/ExchangeIndicators.vue";
    import InternationalIndicators from "../views/InternationalIndicators.vue";
    import EsgMatrix from "../views/EsgMatrix.vue";
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    const route = useRoute();
    const pathName = ref(["/EditEsgInfo","/ApplyEsgInfo"]);
</script>
<style lang="scss">
#issue {
  width: 1000px;
  max-width: 90%;
  margin: 0 auto 12px auto;

  #issue-header {
    display: flex;
    justify-content: space-between;

    #issue-tags {
      font-size: 0;

      .issue-tag {
        box-sizing: border-box;
        display: inline-block;
        width: 96px;
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
    }
  }

  .issue-item {
    border: 1px solid #EFEFEF;
    cursor: pointer;

    +.issue-item {
      border-top: none;
    }

    &.opening {
      background: #ebfbf2;

      .issue-content{height:auto;}

      svg {
        transform: rotate(180deg);

        path {
          stroke: #37d880;
        }
      }
    }
  }

  .issue-title {
    display: flex;
    justify-content: space-between;
    padding: 13px 20px;
    font-size: 14px;

    svg {
      transition-duration: .3s;

      path {
        stroke: #808080;
      }
    }
  }

  .issue-content {
    height: 0;
    overflow: hidden;

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

      tr>td:first-of-type {
        background: #fafafa;
        vertical-align: text-top;
        width: 25%;
      }

      td {
        background: #fff;
        padding: 10px;
        color: #525252;

        span:not([class]) {
          padding: 0 5px;
        }

        span{vertical-align: middle;}

        input {
          vertical-align: middle;
        }

        span:has(+ .notice-icon) {
          padding: 0;
        }

        .notice-icon {
          height: 16px;
          width: 16px;
          cursor: pointer;
        }

        .notice-icon svg {
          position: absolute;
          top: 0;
        }

        > div{
            padding:5px 0;
        }
      }
    }

    .small {
      width: 167px !important;
    }

    li {
      +li {
        margin-top: 20px;
      }

      div>span {
        padding: 5px;

        &:first-of-type {
            width: 90px;
            text-align: right;
        }

        +span {
            width: calc(100% - 114px);
        }

    }

      
    }

    div>input[type="text"] {
      width: 460px;
      margin-top: 10px;
    }

    div:not([class]) >span:not([class]) {
      padding: 5px;
    }

    input[type="text"]+.unit {
      margin-left: -70px;
      font-size: 14px;
      width: 60px;
      padding: 0 10px 0 0;
      text-align: right;
    }

    input[type="text"]:has(+ .unit) {
      padding-right: 60px;
    }

    .unit+* {
      margin-left: 15px;
    }

  }
}

#esgInfoContent {
  padding: 20px;

  h1 {
    font-size: 24px;
    margin: 0 0 10px 0;
    font-weight: inherit;

    + #buttonBox{
      position: absolute;
      width:auto!important;
      right:10px;
      top:20px;
    }
  }
  
  input[type="text"],
  select {
    width: 350px;
    max-width:100%;
  }

  > div {
    padding: 20px 40px 40px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, .1);
    width: 1000px;
    max-width: 90%;
    margin: 0 auto 20px;
    border-radius: 3px;
    position: relative;
    box-sizing: border-box;

    &:has(h1 + #buttonBox){
      padding:20px;
    }

    >span {
      display: inline-block;
      vertical-align: middle;

      &:last-of-type {
        text-align: right;
      }
    }

    #company {
      width: 40%;
    }

    #buttonBox {
      width: 60%;
    }
  }

  >span {
    margin: 0 auto;
    display: block;
  }

  #company {
    font-size: 14px;

    >span {
      padding: 0 10px;

      &:first-of-type {
        border-right: 1px solid #aaa;
        padding: 0 10px 0 0;
      }

      &:before {
        content: "";
        width: 20px;
        height: 20px;
        background: url(/src/assets/images/company.svg) center / cover;
        vertical-align: bottom;
      }

    }

    #buttonBox {
      padding: 0 10px;
    }

  }
}</style>