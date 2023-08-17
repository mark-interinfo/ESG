<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer" v-for="item in data.top" :data-id="item">
          {{item}}
        </div>
      </div>
      <div id="issue-toggle" class="pointer"></div>
    </div>
    <div id="issue-body">
      <div
      class="issue-item pointer"
      v-for="issue in data.allIssue"
      :key="issue.issueType"
      :data-item ="issue.issueKind"
      >
        <div class="issue-title">
          <span>
            {{ issue.issueType +"-"+ issue.issueTitle }}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div :id="issue.issueType" class="issue-content">
            <div>
                <table>
                    <tr v-for="list in issue.issueList">
                        <td>
                            {{list.targetTitle}}
                        </td>
                        <td>
                            <p class="notIsCore" style="text-align: end; margin-top: 0; color: #1D8844;">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="12" fill="#1D8844"/>
                                </svg>
                                文字綠色為非核心指標
                            </p>
                            <ol>
                                <li v-for="targetList in list.targetList" :class="{'notIsCore': targetList.notIsCore === true}">
                                  <span>{{targetList.title}}</span>
                                  <span v-if="targetList.required" class="fontRed">*</span>

                                  <CommonNoticeComponent
                                  v-if="targetList.note"
                                  :info="targetList.note"
                                  :position="'center'"
                                  />

                                  <div v-if="targetList.type == 'A'">
                                      <span v-for="option in targetList.optionList">
                                          <input type="radio" :name="targetList.fieldId" :value="option.value" v-model="data.data[targetList.fieldId]">
                                          <span>{{option.name}}</span>
                                      </span>
                                  </div>

                                  <div v-if="targetList.type == 'B'">
                                      <span v-for="option in targetList.optionList">
                                          <input type="checkbox" :name="targetList.fieldId" :value="option.value" v-model="data.data[targetList.fieldId]">
                                          <span>{{option.name}}</span>
                                      </span>
                                  </div>

                                  <div v-if="targetList.type == 'C'">
                                      <select :name="targetList.fieldId" v-model="data.data[targetList.fieldId]">
                                          <option v-for="option in targetList.optionList" :value="option.value">{{option.name}}</option>
                                      </select>
                                  </div>

                                  <div v-if="targetList.type == 'D'">
                                      <input type="text" :name="targetList.fieldId" v-model="data.data[targetList.fieldId]" placeholder="請填寫">
                                  </div>

                                  <div v-if="targetList.type == 'E'">
                                    <div v-for="option in targetList.optionList">
                                      <input type="text" :name="targetList.fieldId" v-model="data.data[targetList.fieldId]">
                                      <span class="unit">{{option.unit}}</span>
                                    </div>
                                  </div>

                                  <div v-if="targetList.type == 'G'"  v-for="option in targetList.optionList">
                                    <div>
                                      <input type="text" :name="targetList.fieldId" v-model="data.data[targetList.fieldId]">
                                    </div>
                                  </div>
                                </li>
                            </ol>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { onUpdated } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import { APICollection } from '../mixin/api';
  import CommonNoticeComponent from '../components/CommonNoticeComponent.vue';
  import { useRoute } from 'vue-router';
  import { useUserStore } from '../pinia/user';

  const route = useRoute();
  const userStore = useUserStore();

  const emits  = defineEmits(["watchData"]);

  const data = ref({
    top:[]
  });

  const apiRequest = ref({
      companyId: "1101",
      year: userStore.getYear()
  });

  (async() => {
      data.value = await APICollection.QueryReportData(apiRequest);
  })().catch(err=>{
      alert(err.resultMessage);
  });

  onUpdated(()=>{

    if(route.path == "/LookEsgInfo"){
      var input = document.querySelectorAll("input");
      for(var i=0;i<input.length;i++){
        input[i].setAttribute("disabled","disabled");
      };
      var select = document.querySelectorAll("select");
      for(var i=0;i<select.length;i++){
        select[i].setAttribute("disabled","disabled");
      };
    };

    if(!document.querySelector(".selected")){
      setTimeout(()=>{
        switchOpen();
        document.querySelector(".issue-tag").click();
      },100)
    };
    
  });

  watch(data, ()=>{
    emits('watchData', data.value)
  }, {deep: true});


</script>
<style lang="scss">
.notIsCore::marker,
.notIsCore > span{
  color: #1D8844;
}
</style>
