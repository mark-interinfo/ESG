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
        <span class="d-flex align-items-center">
          <span class="input-label me-8">
            1.佔比
            <span class="color-waring">*</span>
            <CommonNoticeComponent
            :info="'範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)'"
            />
          </span>
          <div class="input-area">
            <input type="text">
            <span>%</span>
          </div>
        </span>
      </div>
    </div>
    <div class="issue-group">
      <div class="issue-left">
        職業災害
      </div>
      <div class="issue-right">
        <span class="d-flex align-items-center mb-20">
          <span class="input-label me-8">
            1.人數
            <span class="color-waring">*</span>
          </span>
          <input type="text">
        </span>
        <span class="d-flex align-items-center">
          <span class="input-label me-8">
            2.比率
            <span class="color-waring">*</span>
          </span>
          <input type="text" placeholder="職災 / 總員工">
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
</style>