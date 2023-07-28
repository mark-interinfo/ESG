<template>
  <div
  id="dialog-background"
  :class="{'show': props.isShowDialog}"
  @click.self="closeDialog"
  >
    <div id="dialog-block">
      <div id="dialog-content">
        <div id="dialog-title">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#F5FDF9"/>
            <path d="M24.0023 28.2C22.8884 28.2 21.8202 27.7575 21.0325 26.9698C20.2448 26.1822 19.8023 25.1139 19.8023 24C19.8023 22.8861 20.2448 21.8178 21.0325 21.0302C21.8202 20.2425 22.8884 19.8 24.0023 19.8C25.1163 19.8 26.1845 20.2425 26.9722 21.0302C27.7598 21.8178 28.2023 22.8861 28.2023 24C28.2023 25.1139 27.7598 26.1822 26.9722 26.9698C26.1845 27.7575 25.1163 28.2 24.0023 28.2ZM32.9183 25.164C32.9663 24.78 33.0023 24.396 33.0023 24C33.0023 23.604 32.9663 23.208 32.9183 22.8L35.4503 20.844C35.6783 20.664 35.7383 20.34 35.5943 20.076L33.1943 15.924C33.0503 15.66 32.7263 15.552 32.4623 15.66L29.4743 16.86C28.8503 16.392 28.2023 15.984 27.4463 15.684L27.0023 12.504C26.978 12.3627 26.9043 12.2345 26.7945 12.1423C26.6847 12.05 26.5458 11.9996 26.4023 12H21.6023C21.3023 12 21.0503 12.216 21.0023 12.504L20.5583 15.684C19.8023 15.984 19.1543 16.392 18.5303 16.86L15.5423 15.66C15.2783 15.552 14.9543 15.66 14.8103 15.924L12.4103 20.076C12.2543 20.34 12.3263 20.664 12.5543 20.844L15.0863 22.8C15.0383 23.208 15.0023 23.604 15.0023 24C15.0023 24.396 15.0383 24.78 15.0863 25.164L12.5543 27.156C12.3263 27.336 12.2543 27.66 12.4103 27.924L14.8103 32.076C14.9543 32.34 15.2783 32.436 15.5423 32.34L18.5303 31.128C19.1543 31.608 19.8023 32.016 20.5583 32.316L21.0023 35.496C21.0503 35.784 21.3023 36 21.6023 36H26.4023C26.7023 36 26.9543 35.784 27.0023 35.496L27.4463 32.316C28.2023 32.004 28.8503 31.608 29.4743 31.128L32.4623 32.34C32.7263 32.436 33.0503 32.34 33.1943 32.076L35.5943 27.924C35.7383 27.66 35.6783 27.336 35.4503 27.156L32.9183 25.164Z" fill="#2FB86D"/>
          </svg>
          <span>
            輸入方式設定
          </span>
        </div>
        <select
        id="selecter"
        :class="{'unSelect': selected === 'unSelect'}"
        v-model="selected"
        >
          <option value="unSelect">請選擇</option>
          <option value="text">文字</option>
          <option value="select">下拉選單</option>
          <option value="number">數值</option>
          <option value="file">檔案上傳</option>
        </select>
        <template v-if="selected === 'text'">
          <div>
            <label for="text-max">
              <p class="label-title">
                設定值
              </p>
              <div class="input-group">
                <input type="text" id="text-max" placeholder="請輸入字數上限">
                <span class="unit">字</span>
              </div>
            </label>
          </div>
        </template>
        <template v-if="selected === 'select'">
          <div>
            下拉選單
          </div>
        </template>
        <template v-if="selected === 'number'">
          <div>
            數值
          </div>
        </template>
        <template v-if="selected === 'file'">
          <div>
            檔案上傳
          </div>
        </template>
      </div>
      <div id="dialog-footer">
        <button
        class="button buttonColor2"
        @click="closeDialog"
        >
          取消
        </button>
        <button class="button buttonColor1">
          確認
        </button>
      </div>
    </div>
  </div>
  <!-- <CommonDialogComponent
  :isShowDialog="showDialog"
  @closeDialog="closeDialog"
  /> -->
</template>
<script setup>
import { ref } from "vue";
// import CommonDialogComponent from '../components/CommonDialogComponent.vue';

const props = defineProps({
  isShowDialog: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['closeDialog']);

const selected = ref('unSelect');
const closeDialog = function(){
  emits('closeDialog');
};

// const showDialog = ref(false);
// const openDialog = function(){
//     showDialog.value = true;
// }
// const closeDialog = function(){
//     showDialog.value = false;
// }

</script>
<style lang="scss" scoped>
// common setting
label{
  .label-title{
    margin-top: 0;
    margin-bottom: 4px;
  }
  .input-group{
    position: relative;
    input{
      width: 100%;
      padding-right: 48px;
    }
    .unit{
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translate(-50%, -50%);
    }
  }
}
// page setting
#dialog-background{
  position: fixed;
  top: 0;
  left: 0;
  background: #11111199;
  width: 100vw !important;
  max-width: unset !important;
  height: 100vh;
  display: none;
  &.show{
    display: block;
  }
  #dialog-block{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    background: #fff;
    border-radius: 3px;
    #dialog-content{
      padding: 20px;
      #dialog-title{
        display: flex;
        align-items: center;
        color: #37D880;
      }
      #selecter{
        width: 100%;
        margin-bottom: 12px;
        &.unSelect{
          color: #BEBEBE;
        }
        option{
          color: #272727;
          &:first-of-type{
            display: none;
          }
        }
      }
    }
    #dialog-footer{
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 12px 20px;
      background: #FAFAFA;
    }
  }
}
</style>