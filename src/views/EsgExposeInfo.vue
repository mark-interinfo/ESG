<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer" :class="{ 'selected': item.key === issueTypeSelected }" v-for="item in issueType"
          :key="item.key" @click="selectIssueType(item.key)">
          {{ item.name }}
        </div>
      </div>
      <div id="issue-toggle" class="pointer">
        展開全部
      </div>
    </div>
    <template v-if="issueTypeSelected === 'environment' || issueTypeSelected === 'all'">
      <EsgExposeEnvironment />
    </template>
    <template v-if="issueTypeSelected === 'society' || issueTypeSelected === 'all'">
      <EsgExposeSociety />
    </template>
    <template v-if="issueTypeSelected === 'governance' || issueTypeSelected === 'all'">
      <EsgExposeGovernance />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EsgExposeEnvironment from './EsgExpose/EsgExposeEnvironment.vue';
import EsgExposeSociety from './EsgExpose/EsgExposeSociety.vue';
import EsgExposeGovernance from './EsgExpose/EsgExposeGovernance.vue';


const issueTypeSelected = ref('all');
const issueType = ref([
  { name: '全部議題', key: 'all' },
  { name: '環境', key: 'environment' },
  { name: '社會', key: 'society' },
  { name: '治理', key: 'governance' },
]);
const selectIssueType = function (key) {
  issueTypeSelected.value = key;
}

</script>
<style lang="scss">
#issue {
  width: 1000px;
  max-width: 90%;
  margin: 0 auto 12px auto;
  border: 1px solid #EFEFEF inset;

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

    &.opening {
      background: #ebfbf2;

      svg {
        transform: rotate(180deg);

        path {
          stroke: #37d880;
        }
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

        span {
          padding: 0 5px;
        }

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

        >input[type="text"],
        select {
          width: 350px;
        }
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

    div>input[type="text"] {
      width: 460px;
      margin-top: 10px;
    }

  }
}

#esgInfoContent {
  padding: 20px;


  h1 {
    font-size: 24px;
    margin: 0 0 10px 0;
    font-weight: inherit;
  }

  >div {
    padding: 20px 40px 40px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, .1);
    width: 1000px;
    max-width: 90%;
    margin: 0 auto 20px;
    border-radius: 3px;

    box-sizing: border-box;

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