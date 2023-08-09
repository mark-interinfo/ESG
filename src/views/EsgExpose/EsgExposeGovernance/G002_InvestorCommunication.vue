<template>
  <div
  id="G002"
  class="issue-content"
  :class="{'opening': props.opening}"
  >
    <div>
        <table>
          <tr>
            <td>
            </td>
            <td>
              <ol>
                <li>
                    <span>公司年度召開法說會次數</span>
                    <span class="fontRed">*</span>
                    <div>
                      <input type="text">
                      <span class="unit">場次</span>
                    </div>
                  </li>
              </ol>
            </td>
          </tr>
        </table>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  opening: {
    type: Boolean,
    require: true,
  }
})
</script>