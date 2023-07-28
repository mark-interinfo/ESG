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
           {{ issue.name }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div v-if="issue.id === 'GRI'"  id="GRI" class="issue-content">
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
                  指標代碼
                </td>
                <td>
                  <span>
                      <input type="text" placeholder="請填寫">
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  使用狀態
                </td>
                <td>
                  <span>
                      <span><input type="radio" name="a"><span>開啟</span></span>
                      <span><input type="radio" name="a"><span>停用</span></span>
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <span>
                    <input type="text" placeholder="請描述">
                  </span>
                </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="button" value="更新設定" class="button buttonColor1">
              </td>
            </tr>
        </table>
      </div>
      <div v-if="issue.id === 'SASB'"  id="SASB" class="issue-content">
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
                  指標代碼
                </td>
                <td>
                  <span>
                      <input type="text" placeholder="請填寫">
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  使用狀態
                </td>
                <td>
                  <span>
                      <span><input type="radio" name="a"><span>開啟</span></span>
                      <span><input type="radio" name="a"><span>停用</span></span>
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <span>
                    <input type="text" placeholder="請描述">
                  </span>
                </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="button" value="更新設定" class="button buttonColor1">
              </td>
            </tr>
        </table>
      </div>
      <div v-if="issue.id === 'TCFD'"  id="TCFD" class="issue-content">
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
                  指標代碼
                </td>
                <td>
                  <span>
                      <input type="text" placeholder="請填寫">
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  使用狀態
                </td>
                <td>
                  <span>
                      <span><input type="radio" name="a"><span>開啟</span></span>
                      <span><input type="radio" name="a"><span>停用</span></span>
                  </span>
                </td>
            </tr>
            <tr>
                <td>
                  指標名稱
                </td>
                <td>
                  <span>
                    <input type="text" placeholder="請描述">
                  </span>
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
  { id:'GRI', name:'國際準則 GRI', opening: false },
  { id:'SASB', name:'國際準則 SASB', opening: false },
  { id:'TCFD', name:'國際準則 TCFD', opening: false },
]);

const toggleIssue = function(id){
  issueList.value.find(item => item.id === id).opening = !issueList.value.find(item => item.id === id).opening;
}
</script>