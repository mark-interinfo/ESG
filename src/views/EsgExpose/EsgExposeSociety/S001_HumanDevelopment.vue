<template>
  <div
  class="issue-content"
  :class="{'opening': props.opening}"
  >
    <div class="issue-group">
      <div class="issue-left">
        員工
      </div>
      <div class="issue-right">
        <p class="mb-8">
          1.福利平均數<span class="color-waring">*</span>
        </p>
        <p class="color-waring">
          系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」之資料並於6月初統一於公開資訊觀測站對外公告。
        </p>
        <p class="mb-8">
          2.薪資平均數<span class="color-waring">*</span>
        </p>
        <p class="color-waring mb-0">
          系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」之資料並於6月初統一於公開資訊觀測站對外公告。
        </p>
      </div>
    </div>
    <div class="issue-group">
      <div class="issue-left">
        非擔任主管職務之全時員工薪資
      </div>
      <div class="issue-right">
        <p class="mb-8">
          1.平均數<span class="color-waring">*</span>
        </p>
        <p class="color-waring">
          系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」
          之資料並於6月初統一於公開資訊觀測站對外公告。
        </p>
        <p class="mb-8">
          2.中位數<span class="color-waring">*</span>
        </p>
        <p class="color-waring mb-0">
          系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」
          之資料並於6月初統一於公開資訊觀測站對外公告。
        </p>
      </div>
    </div>
    <div class="issue-group">
      <div class="issue-left">
        管理職女性主管
      </div>
      <div class="issue-right">
        <span class="d-inline-flex align-items-center">
          <span class="input-label">
            1.佔比
            <span class="color-waring me-8">*</span>
            <CommonNoticeComponent
            :info="['請申報資料年度當年底在任席次，如申報110年度資料，即以110年12月31日在任席次申報)']"
            :position="'center'"
            />
          </span>
        </span>
        <span class="input-group">
          <input type="text">
          <span class="unit">%</span>
        </span>
      </div>
    </div>
    <div class="issue-group">
      <div class="issue-left">
        職業災害
      </div>
      <div class="issue-right">
        <span class="d-flex align-items-center mb-20">
          <span class="input-label">
            1.人數
            <span class="color-waring">*</span>
          </span>
          <div class="input-group">
            <input type="text">
            <span class="unit">人</span>
          </div>
        </span>
        <span class="d-flex align-items-center">
          <span class="input-label">
            2.比率
            <span class="color-waring">*</span>
          </span>
          <div class="input-group">
            <input type="text" placeholder="職災 / 總員工">
            <span class="unit">%</span>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import CommonNoticeComponent from '../../../components/CommonNoticeComponent.vue';
const props = defineProps({
  opening: {
    type: Boolean,
    require: true,
  }
})
</script>
<style lang="scss" scoped>
@import '../EsgExpose.scss';
.input-label{
  width: 108px;
}
.input-group{
  position: relative;
  input{
    padding-right: 36px;
  }
  .unit{
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(-12px, -50%);
  }
}
</style>