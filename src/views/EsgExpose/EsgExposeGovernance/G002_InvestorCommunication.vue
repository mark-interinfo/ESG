<template>
  <div
  class="issue-content"
  :class="{'opening': props.opening}"
  >
    <div class="issue-group">
      <div class="issue-left"></div>
      <div class="issue-right">
        <div class="mb-8">
          <span class="input-label me-8">
            1.公司年度召開法說會次數<span class="color-waring">*</span>
          </span>
          <span class="input-group">
            <input type="text">
            <span class="unit">場次</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  opening: {
    type: Boolean,
    require: true,
  }
})
</script>
<style lang="scss" scoped>
@import '../EsgExpose.scss';
@import '../EsgExpose.scss';
.input-label{
  min-width: 240px;
}
.input-group{
  position: relative;
  input{
    padding-right: 48px;
  }
  .unit{
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(-12px, -50%);
  }
}
</style>