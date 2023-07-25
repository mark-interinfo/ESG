<template>
  <div
  class="issue-content"
  :class="{'opening': props.opening}"
  >
    <div class="issue-group">
      <div class="issue-left">
        席次
        <CommonNoticeComponent
        :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
        :position="'left'"
        />
      </div>
      <div class="issue-right">
        <div class="mb-20">
          <span class="input-label me-8">
            1.董事總席次(含獨立董事)<span class="color-waring">*</span>
          </span>
          <span class="input-group">
            <input type="text">
            <span class="unit">席</span>
          </span>
        </div>
        <div class="mb-20">
          <span class="input-label me-8">
            2.獨立董事席次<span class="color-waring">*</span>
          </span>
          <span class="input-group">
            <input type="text">
            <span class="unit">席</span>
          </span>
        </div>
        <div>
          <span class="input-label me-8">
            3.女性董事席次及比率<span class="color-waring">*</span>
          </span>
          <span class="input-group">
            <input type="text">
            <span class="unit">席</span>
          </span>
        </div>
      </div>
    </div>
    <div class="issue-group">
      <div class="issue-left">
        出席率
        <CommonNoticeComponent
        :info="['計算方式：所有董事(不包含監察人)實際出席次數合計/應出席次數合計，應出席次數以董事在職期間董事會開會次數計算，', '詳細計算方法可參考「董監事出列席董事會及進修情形暨獨立董事現職、經歷及兼任情形申報作業」']"
        :position="'left'"
        />
      </div>
      <div class="issue-right">
        <div>
          <span class="input-label me-8">
            1.董事出席董事會出席率<span class="color-waring">*</span>
          </span>
          <span class="input-group">
            <input type="text">
            <span class="unit">%</span>
          </span>
        </div>
      </div>
    </div>
    <div class="issue-group">
      <div class="issue-left">
        進修要點
        <CommonNoticeComponent
        :info="['本指標應參考公開資訊觀測站/公司治理/董事及監察人相關資訊/董事及監察人出(列)席董事會及進修情形暨獨立董事現職', '、經歷及兼任情形(個別)，為資訊來源。計算方式：達成進修時數董事/全體董事)']"
        :position="'left'"
        />
      </div>
      <div class="issue-right">
        <div>
          <span class="input-label me-8">
            1.董監事進修時數符合進修要點比率
          </span>
          <span class="input-group">
            <input type="text">
            <span class="unit">%</span>
          </span>
        </div>
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
  min-width: 220px;
  margin-right: 20px;
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