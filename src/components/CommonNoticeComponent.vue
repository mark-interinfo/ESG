<template>
  <span class="notice-icon">
    <div
    class="notice-info"
    :class="{
      'show': isShowNoticeInfo,
      'position-center': props.position === 'center',
      'position-left': props.position === 'left',
      'position-right': props.position === 'right'
    }"
    >
      <p
      class="m-0"
      v-for="item in props.info"
      :key="item">
        {{ item }}
      </p>
    </div>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
    @mousemove="showNoticeInfo"
    @mouseleave="hiddenNoticeInfo"
    >
      <g clip-path="url(#clip0_143_9055)">
        <path d="M8 0.25C3.72009 0.25 0.25 3.72134 0.25 8C0.25 12.2812 3.72009 15.75 8 15.75C12.2799 15.75 15.75 12.2812 15.75 8C15.75 3.72134 12.2799 0.25 8 0.25ZM8 3.6875C8.72487 3.6875 9.3125 4.27513 9.3125 5C9.3125 5.72487 8.72487 6.3125 8 6.3125C7.27513 6.3125 6.6875 5.72487 6.6875 5C6.6875 4.27513 7.27513 3.6875 8 3.6875ZM9.75 11.625C9.75 11.8321 9.58209 12 9.375 12H6.625C6.41791 12 6.25 11.8321 6.25 11.625V10.875C6.25 10.6679 6.41791 10.5 6.625 10.5H7V8.5H6.625C6.41791 8.5 6.25 8.33209 6.25 8.125V7.375C6.25 7.16791 6.41791 7 6.625 7H8.625C8.83209 7 9 7.16791 9 7.375V10.5H9.375C9.58209 10.5 9.75 10.6679 9.75 10.875V11.625Z"/>
      </g>
    </svg>
  </span>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  info: {
    type: Array,
    // require: true,
  },
  position: {
    type: String,
    validator(value) {
      return ['left', 'center', 'right'].includes(value)
    },
    default: 'center'
  }
});

const isShowNoticeInfo = ref(false);
const showNoticeInfo = function(){
  isShowNoticeInfo.value = true;
}
const hiddenNoticeInfo = function(){
  isShowNoticeInfo.value = false;
}
</script>
<style lang="scss" scoped>
.notice-icon{
  position: relative;
  .notice-info{
    position: absolute;
    z-index: 9999;
    transition: .3s;
    top: 0%;
    padding: 4px 8px;
    color: #fff;
    background: #525252;
    opacity: 0;
    border-radius: 3px;
    font-size: 14px;
    margin: 0;
    text-wrap: nowrap;
    &.show{
      opacity: .6;
    }
    &.position-center{
      left: 50%;
      transform: translate(-50%, -100%);
    }
    &.position-left{
      left: 0%;
      transform: translate(0%, -100%);
    }
    &.position-right{
      right: 0%;
      transform: translate(0%, -100%);
    }
    p{
      margin: 0;
    }
  }
  svg{
    cursor: pointer;
    path{
      transition: .3s;
      fill: #BEBEBE;
    }
  }
  :hover{
    path{
      fill: #525252;
    }
  }
}
</style>