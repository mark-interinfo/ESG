<template>
  <div
  id="dialog-background"
  :class="{'show': props.isShowDialog}"
  @click.self="closeDialog"
  >
    <!-- 欄位類型設定 -->
    <!-- ExchangeIndicatorsContent.vue -->
    <div id="dialog-block" class="selectInput" v-if="props.dailogType == 'input'">
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
        <div id="selecter">
          <select
          :class="{'unSelect': inputMethod === 'unSelect'}"
          v-model="inputMethod"
          >
            <option value="unSelect">請選擇</option>
            <option
            v-for="item in inputOption"
            :key="item.value"
            :value="item.value"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div>
          <!-- 文字輸入框 -->
          <template v-if="inputMethod === 'D'">
            <label for="text-length">
              <p class="label-title">
                設定值
              </p>
              <div class="input-group">
                <input type="text" id="text-length" v-model.number="textLength" placeholder="請輸入字數上限">
                <span class="unit">字</span>
              </div>
            </label>
          </template>

          <!-- 單選、多選、下拉選單 -->
          <template v-if="['A', 'B', 'C'].includes(inputMethod)">
            <template v-if="!isStopMode">
              <p class="label-title">
                <span>
                  選項名稱
                </span>
                <span class="fontGreen pointer" @click="isStopMode = true">
                  停用設定
                </span>
              </p>
              <div
              v-for="(option, i) in optionSetting"
              :key="option.value"
              class="input-group option-setting"
              >
                <input
                type="text"
                placeholder="請輸入選項名稱"
                :value="option.name"
                @blur="setOption($event, i)"
                >
              </div>
              <div class="add-group">
                <div
                class="add-button"
                @click="addOption"
                >
                  ＋ 新增項目
                </div>
              </div>
            </template>
            <template v-else>
              <div class="option-stop">
                <div class="is-stop">停用</div>
                <div class="name">選項名稱</div>
                <div class="stop-year">停用起始年</div>
              </div>
              <div class="option-stop" v-for="(option, i) in optionSetting">
                <div class="is-stop">
                  <input type="checkbox" class="stopItem" :checked="false" v-model="option.isOn">
                </div>
                <div class="name">
                  {{ option.name }}
                </div>
                <div class="stop-year">
                  <input type="text" placeholder="民國年" v-model="option.isOnYear">
                </div>
              </div>
            </template>
          </template>

          <!-- 數值 -->
          <template v-if="inputMethod === 'E'">
            <p class="label-title">
              設定值
            </p>
            <div class="input-group">
              <table>
                <!-- unit -->
                <tr>
                  <td>
                    <input type="checkbox" checked disabled>
                  </td>
                  <td>顯示單位</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" placeholder="請輸入 例:公噸" v-model="optionSetting[0].unit">
                  </td>
                </tr>
                <!-- integerLength -->
                <tr>
                  <td>
                    <input type="checkbox" checked disabled>
                  </td>
                  <td>設定整數位數</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" placeholder="請輸入" v-model="optionSetting[0].integerLength">
                  </td>
                </tr>
                <!-- decimalLength -->
                <tr>
                  <td>
                    <input type="checkbox" checked disabled>
                  </td>
                  <td>設定小數位數</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" placeholder="請輸入" v-model="optionSetting[0].decimalLength">
                  </td>
                </tr>
                <!-- allowZero -->
                <tr>
                  <td>
                    <input type="checkbox" v-model="optionSetting[0].allowZero" :value="true">
                    {{optionSetting.allowZero}}
                  </td>
                  <td>允許0（選填）</td>
                </tr>
                <!-- allowNegative -->
                <tr>
                  <td>
                    <input type="checkbox" v-model="optionSetting[0].allowNegative" :value="true">
                  </td>
                  <td>允許負值（選填）</td>
                </tr>
              </table>
            </div>
          </template>

          <!-- 檔案上傳 -->
          <template v-if="inputMethod === 'F'">
            <p class="label-title">
              檔案格式
            </p>
            <div class="input-group">
              <select
              v-model="fileSettingSelected"
              :class="{'unSelect': fileSettingSelected === 'unSelect'}"
              >
                <option
                v-for="option in fileSettingOption"
                :key="option.id"
                :value="option.id">
                  {{ option.title }}
                </option>
              </select>
            </div>
            <p class="label-title">
              檔案大小
            </p>
            <div class="input-group">
              <input type="text" id="text-length" v-model.number="fileSettingSize" placeholder="請輸入">
              <span class="unit">MB</span>
            </div>
          </template>

          <!-- 參考來源 -->
          <template v-if="inputMethod === 'G'">
            <p class="label-title">
              網址
            </p>
            <div class="input-group">
              <input type="text" id="text-length" v-model.number="fileSettingSize" placeholder="請輸入">
            </div>
          </template>
        </div>
      </div>
      <div id="dialog-footer">
        <button
        class="button buttonColor2"
        @click="closeDialog"
        >
          取消
        </button>
        <button
        class="button buttonColor1"
        @click="inputSetting"
        >
          確認
        </button>
      </div>
    </div>

    <!-- 顯示圖片 -->
    <!-- EsgTemplate.vue -->
    <div id="dialog-block" class="displayImg" v-if="props.dailogType == 'img'">
      <!-- <img src="../assets/images/template1.png"> -->
      <img style="width: 80vw" :src="'../src/assets/images/' + props.imgSrc">
    </div>

    <!-- 上傳進度條 -->
    <!-- EsgTemplate.vue -->
    <div id="dialog-block" class="loadingFile" v-if="props.dailogType == 'loadingFile'">
      <h3>報告書製作中...</h3>
    </div>

    <!-- 下載檔案 -->
    <div id="dialog-block" class="download" v-if="props.dailogType == 'download'" style="flex-direction: column; text-align: center;">
      <h3>套版已完成</h3>
      <div>
        <a class="button buttonColor1" download :href="props.downloadHref">下載</a>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  isShowDialog: {
    type: Boolean,
    default: false,
  },
  dailogType : {
    tyep: String,
  },
  // selectInput
  // 欄位設定
  inputOption: {
    type: Array,
  },
  inputMethod: {
    type: String,
  },
  optionList: {
    type: [Array, Object]
  },
  // addIssue
  // 新增議題
  dataLength: {
    type: Number
  },
  // dailogType: download
  downloadHref: {
    type: String,
  },
  // dailogType: img
  imgSrc: {
    type: String,
  }
});

const emits = defineEmits(['closeDialog', 'inputSetting']);
const optionSetting = ref();
const inputMethod = ref('');
watch(props, ()=>{
  if(!props.optionList){
    return;
  }
  optionSetting.value = JSON.parse(JSON.stringify(props.optionList));
  inputMethod.value = props.inputMethod;
});

watch(inputMethod, (n, o)=>{
  if(!o){
    return;
  }

  if(['A', 'B', 'C'].includes(n)){
    optionSetting.value = [
      { "isOnYear": "", "name": "", "value": "1", "isOn": true }
    ];
  }
  if(n === 'D'){
  }
  if(n === 'E'){
    optionSetting.value = [
      {
        unit: '',
        integerLength: 0,
        decimalLength: 0,
        allowZero: false,
        allowNegative: false,
      }
    ]
  }
  if(n === 'F'){
  }
});

// 文字
const textLength = ref(0);

// 選單
const isStopMode = ref(false);

const addOption = function(){
  let value = 0;
  if(optionSetting.value.at(-1)){
    value = Number(optionSetting.value.at(-1).value);
  }
  optionSetting.value.push({
    isOnYear: "",
    name: "",
    value: value + 1,
    isOn: true
  })
};

const setOption = function(e, optionIndex){
  if(['A', 'B', 'C'].includes(inputMethod.value)){
    optionSetting.value[optionIndex].name = e.target.value;
  }
}

// 檔案
const fileSettingOption = ref([
  {
    title: '請選擇',
    id: 'unSelect'
  },
  {
    title: 'jpg',
    id: 'jpg'
  },
  {
    title: 'png',
    id: 'png'
  },
  {
    title: 'pdf',
    id: 'pdf'
  },
]);
const fileSettingSelected = ref('unSelect');
const fileSettingSize = ref();

const closeDialog = function(){
  emits('closeDialog');
};

const inputSetting = function(){
  if(isStopMode.value){
    isStopMode.value = false;
    return;
  }
  emits('inputSetting', {
    optionSetting: optionSetting.value,
    inputMethod: inputMethod.value
  });
};

</script>
<style lang="scss" scoped>
// common setting
.label-title{
  margin-top: 0;
  margin-bottom: 4px;
  &:has(span){
    display: flex;
    justify-content: space-between;
  }
}
.input-group{
  position: relative;
  margin-bottom: 4px;
  input:not([type="checkbox"]){
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
.option-stop{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 8px;
  .is-stop{
    flex: 0 0 32px;
    text-align: center;
  }
  .name{
    flex: 1 1 100%;
  }
  .stop-year{
    flex: 0 0 80px;
    input{
      width: 100%;
    }
  }
}

.pointer{
  cursor: pointer;
}

select{
  width: 100%;
}

// page setting
#dialog-background{
  position: fixed;
  top: 0;
  left: 0;
  background: #0000004d;
  width:100%;
  max-width: unset !important;
  height: 100%;
  display: none;
  z-index: 1;

  &.show{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #dialog-block{
    display: flex;
    justify-content: center;
    background: #fff;
    border-radius: 3px;
    width: 100%;
    max-width: 480px;

    &.loadingFile{
      padding:20px 40px;
      flex-direction: column;
      text-align: center;

      
    }

    &.selectInput{
      flex-direction: column;
    }

    &.addIssue{
      flex-direction: column;
    }

    &.addIssueList{
      flex-direction: column;
    }

    #dialog-content{
      padding: 20px;
      #dialog-title{
        display: flex;
        align-items: center;
        color: #37D880;
      }
      #selecter{
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        &::after{
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          left: 0;
          bottom: -12px;
          background: #EFEFEF;
        }
      }
      .add-group{
        display: flex;
        justify-content: space-around;
        margin-top: 4px;
        color: #808080;
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

.stopItem:checked{
    background: url(/src/assets/images/checkbox.svg) #FAFAFA center/100% no-repeat;
}
.stopItem{
    background: url(/src/assets/images/checkbox-green.svg) center/100% no-repeat;
}

.download{
    padding:20px;
}



@keyframes progress {from {width: 0;}100% {width: 100%;}}
</style>