<template>
  <div
  class="issue-content"
  :class="{'opening': props.opening}"
  >
    <div class="issue-group">
      <div class="issue-left"></div>
      <div class="issue-right">
        <span class="mb-8">
          1.公司年度召開法說會次數<span class="color-waring">*</span>
        </span>
        <input type="text">
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
</style>