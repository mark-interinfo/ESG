<template>
  
  <div id="issue-body">
    <div
    class="pointer"
    
    >
      
      <div class="issue-content">
        <table>
          <tr>
            <td class="tableHead">
              項目
            </td>
            <td>
              <span>
                國際指標
              </span>
            </td>
          </tr>
          <tr 
            v-for="issue in props.allMatrix"
            :key="issue.id"
            :data-item ="issue.ISSUE_KIND"
            class="issue-item"
          >
            <td class="tableHead">
              {{ issue.TAR_NAME }}
            </td>
            <td>
              <div class="items">
                <span v-for="target in issue.Matrix">{{props.allInternationalTarget.GRI.find((item)=> item.value == target).name}}</span>
                <input type="hidden" :name="issue.ISSUE_NO" v-model="issue.Matrix.GRI">
              </div>
            </td>
          </tr>
          
          </table>
      </div>
      
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  allInternationalTarget: {
    type: Object,
  },
  allMatrix: {
    type: Array,
  },
  top: {
    type: Array,
  },
});
</script>