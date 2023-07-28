<template>
  <div
  class="issue-item pointer"
  v-for="issue in issueList"
  :key="issue.id"
  :class="{'opening': issue.opening}"
  >
    <div>
      <div class="issue-title"  @click="toggleIssue(issue.id)">
        <span>
          {{ issue.id }} {{ issue.name }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div v-if="issue.id === 'M001'"  id="M001" class="issue-content">
        <table>
            <tr>
              <td rowspan="2">
                (ㄧ)
              </td>
              <td class="title">
                <span>
                  <span>
                    適用產業別
                  </span>
                  <span>
                      <select>
                          <option>請選擇</option>
                      </select>
                  </span>
                </span>

                <span>
                  <span>
                    證交所核心指標
                  </span>
                  <span>
                      <select>
                          <option>請選擇</option>
                      </select>
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item">
                  <span>
                    <div>GRI</div>
                    <div>
                      <select>
                            <option>GRI 305-1</option>
                        </select>
                    </div>
                    <div>
                      <select>
                            <option>請選擇</option>
                        </select>
                    </div>
                    <div>
                      <div class="center add">
                        <span>新增選項</span>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div>SASB</div>
                    <div>
                      <select>
                            <option>TC-SC-110a.1</option>
                        </select>
                    </div>
                    
                    <div>
                      <div class="center add">
                        <span>新增選項</span>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div>TCFD</div>
                    <div>
                      <select>
                            <option>指標和目標b.</option>
                        </select>
                    </div>
                    
                    <div>
                      <div class="center add">
                        <span>新增選項</span>
                      </div>
                    </div>
                  </span>
                </div>

                
              </td>
            </tr>
            <tr>
                <td rowspan="2">
                  (二)
                </td>
                <td class="title">
                  <span>
                    <span>
                      適用產業別
                    </span>
                    <span>
                        <select>
                            <option>請選擇</option>
                        </select>
                    </span>
                  </span>

                  <span>
                    <span>
                      證交所核心指標
                    </span>
                    <span>
                        <select>
                            <option>請選擇</option>
                        </select>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="item">
                    <span>
                      <div>GRI</div>
                      <div>
                        <select>
                              <option>GRI 305-1</option>
                          </select>
                      </div>
                      <div>
                        <select>
                              <option>請選擇</option>
                          </select>
                      </div>
                      <div>
                        <div class="center add">
                        <span>新增選項</span>
                      </div>
                      </div>
                    </span>
                    <span>
                      <div>SASB</div>
                      <div>
                        <select>
                              <option>TC-SC-110a.1</option>
                          </select>
                      </div>
                      
                      <div>
                        <div class="center add">
                        <span>新增選項</span>
                      </div>
                      </div>
                    </span>
                    <span>
                      <div>TCFD</div>
                      <div>
                        <select>
                              <option>指標和目標b.</option>
                          </select>
                      </div>
                      <div class="center add">
                        <span>新增選項</span>
                      </div>
                    </span>
                  </div>
                </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="button" value="更新設定" class="button buttonColor1">
              </td>
            </tr>
          </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const issueList = ref([
  { id:'M001', name:'溫室氣體排放', opening: true },
]);

const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
}
</script>