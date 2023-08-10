<template>
  <div
  class="dialog-background"
  v-if="props.isShowDialog"
  @click.self="closeDialog"
  id="selectList"
  >
    <div class="dialog">
      <div class="dialog-content">
        <div class="selected-area" v-if="selected.length > 0">
          <template v-if="props.selectMulti === true">
            <span v-for="item in selected">
              {{ item }}
            </span>
          </template>
          <span v-else>
            {{ selected }}
          </span>
        </div>
        <div class="clear">
          <span @click="selectedClear">清除已選項目</span>
        </div>
        <input
        type="text"
        v-model="searcher"
        @focus="addStyle"
        @keyup.enter="search($event)"
        >
        <div class="option">
          <div
          v-for="item in option"
          :key="item.name"
          >
            <label
            :data-info="`${item.name} ${item.value}`"
            :for="item.name"
            >
              <input
              :type="props.selectMulti ? 'checkbox' : 'radio'"
              :id="item.name"
              :value="item.value"
              v-model="selected"
              >
              {{item.name}}
            </label>
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <button class="button buttonColor2" @click="closeDialog">取消</button>
        <button class="button buttonColor1">確認</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  isShowDialog: {
    type: Boolean,
  },
  selectMulti: {
    type: Boolean,
  },
  option: {
    type: Array,
  },
  selected: {
    type: Array | String,
  }
});

const emits = defineEmits(['closeDialog']);

const searcher = ref('');
const selected = ref('');
const option = ref([
  {name: '蘋果', value: 'apple'},
  {name: '香蕉', value: 'banana'},
  {name: '櫻桃', value: 'cherry'},
  {name: '棗子', value: 'date'},
  {name: '雞蛋', value: 'egg'},
]);

const selectedClear = function(){
  if(props.selectMulti){
    selected.value = [];
  } else {
    selected.value = '';
  }
};

const closeDialog = function(){
  emits('closeDialog');
}

const addStyle = function(){
  if(!document.querySelector("#selectListStyle")){
    let style = document.createElement("style");
    style.id = "selectListStyle";
    style.setAttribute("rel","stylesheet");
    selectList.appendChild(style);
  };
};

const search = function(event){
  let css = "";
  if(event.target.value.length > 0){
    css = `.dialog label:not([data-info*="${event.target.value}"]){display:none;}`;
  };
  selectListStyle.innerHTML = css;

  if(document.querySelector(".option").offsetHeight == 0){
    document.querySelector(".option").setAttribute("data-msg", "無資料");
  }else{
    document.querySelector(".option").removeAttribute("data-msg");
  };
};

</script>
<style lang="scss" scoped>
.dialog-background{
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000004d;

  .option[data-msg]:before{
    content:attr(data-msg);
  }

  .dialog{
    background: #fff;
    border-radius: 3px;
    .dialog-content{
      padding: 12px 12px 0 12px;
      .selected-area{
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 8px 4px;
        margin-bottom: 4px;
        span{
          color: #37D880;
          background: #F5FDF9;
          font-size: 12px;
          height: unset;
          width: unset;
          padding: 4px 8px;
        }
      }
      .clear{
        text-align: end;
        font-size: 12px;
        margin-top: 4px;
        margin-bottom: 4px;
        >span{
          cursor: pointer;
          color: #808080;
        }
      }
    }
    .dialog-footer{
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #E6E6E8;
      padding: 6px 20px;
    }
  }
}

</style>