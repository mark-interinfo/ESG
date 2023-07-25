<template>
  <div
  class="issue-content"
  :class="{'opening': props.opening}">
    E002
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
.issue-content{
  height: 0;
  overflow: hidden;
  &.opening{
    height: auto;
  }
}
</style>