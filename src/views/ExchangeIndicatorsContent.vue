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
      <div v-if="issue.id === 'E001'"  id="E001" class="issue-content">
        <table>
            <tr>
                <td>
                  適用產業別
                </td>
                <td>
                  <span>
                      <select>
                          <option>請選擇</option>
                      </select>
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <span>
                      <select>
                          <option>請填寫</option>
                      </select>
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  指標細項（一）
                </td>
                <td>
                  <div>
                    <span>
                      使用狀態
                    </span>
                    <span>
                        <span><input type="radio" name="a"><span>開啟</span></span>
                        <span><input type="radio" name="a"><span>停用</span></span>
                    </span>
                  </div>
                  <div>
                    <span>
                      細項名稱
                    </span>
                    <span>
                        <input type="text" placeholder="請填寫">
                    </span>
                  </div>
                  <div>
                    <span>
                      輸入方式
                    </span>
                    <span>
                        <input type="button" value="文字" class="button buttonColor3">
                    </span>
                  </div>
                </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="button" value="新增指標細項" class="button buttonColor3">
                <input type="button" value="更新設定" class="button buttonColor1">
              </td>
            </tr>
          </table>
      </div>
      <div v-if="issue.id === 'E002'">
        <!-- <E002_EnergyManagement :opening="issue.opening"/> -->
      </div>
      <div v-if="issue.id === 'E003'">
        <!-- <E003_WaterManagement :opening="issue.opening"/> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const issueList = ref([
  { id:'E001', name:'溫室氣體排放', opening: false },
  { id:'E002', name:'能源管理', opening: false },
  { id:'E003', name:'水資源管理', opening: false },
  { id:'E004', name:'廢物物管理', opening: false },
]);

const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
}
</script>