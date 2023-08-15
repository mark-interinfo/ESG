<template>
  <div id="issue-body">
    <div
    class="issue-item pointer"
    v-for="issue in issueList"
    :key="issue.id"
    :data-item ="issue.key"
    >
      
      <div class="issue-content">
        <table>
          <tr>
            <td class="tableHead">
              項目
            </td>
            <td>
              國際準則
            </td>
          </tr>
          <tr>
            <td class="tableHead">
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
            <td class="tableHead">
              能源間接<br>
              (範疇二)
            </td>
            <td>
              <div class="items">
                
              </div>
            </td>
          </tr>
          </table>
          <div class="buttonBox">
            <input type="button" class="button buttonColor3" value="新增細項">
          </div>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const issueList = ref([
  { id:'M001', key: 'environment', name:'溫室氣體排放'},
]);
</script>