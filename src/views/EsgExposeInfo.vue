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
                            <ol>
                                <li v-for="targetList in list.targetList">
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
  import { ref ,watch} from 'vue';
  import { onUpdated } from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import { APICollection } from '../mixin/api';
  import CommonNoticeComponent from '../components/CommonNoticeComponent.vue';

  const emits  = defineEmits(["watchData"]);

  const data = ref({
    top:[]
  });

  const apiRequest = ref({
      companyId: "1101",
      year: '112'
  });

  (async() => {
      data.value = await APICollection.QueryReportData(apiRequest);
  })().catch(err=>{
      alert(err.resultMessage);
  });

  onUpdated(()=>{
    switchOpen();

    for(var i=0;i<Object.keys(data.value.data).length;i++){
      let name = Object.keys(data.value.data)[i];
      let value = data.value.data[name];

      if(document.querySelector("input[name='"+name+"'][type='radio']")){
        document.querySelector("[name='"+name+"'][value='"+value+"']").checked = true;
      }else{
        document.querySelector("[name='"+name+"']").value = value;
      }
    };
  });

  watch(data, ()=>{
    emits('watchData', data.value)
  }, {deep: true});


</script>
