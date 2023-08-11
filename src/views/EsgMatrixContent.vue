<template>
  <div
  class="issue-item pointer"
  v-for="issue in issueList"
  :key="issue.id"
  :data-item ="issue.key"
  >
    
    
    <div class="issue-content">
      <table>
        <tr>
          <td class="title">
            項目
          </td>
          <td>
            國際準則
          </td>
        </tr>
        <tr>
          <td class="title">
            直接溫室氣體<br>
            (範疇一)
          </td>
          <td>
            <div class="items">
              <span>全部產業別</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="title">
            能源間接<br>
            (範疇二)
          </td>
          <td>
            <select>
              <option value>請選擇</option>
              <option value="1">選擇1</option>
            </select>
          </td>
        </tr>
        </table>
    </div>
    
  </div>
</template>
<script setup>
import { ref } from 'vue';
const issueList = ref([
  { id:'M001', key: 'environment', name:'溫室氣體排放'},
]);
</script>