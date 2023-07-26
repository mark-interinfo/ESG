<template>
  <div
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
                    <span>公司年度召開法說會次數*</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                      <span class="unit">場次</span>
                    </span>
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
<style lang="scss" scoped>
@import '../EsgExpose.scss';
@import '../EsgExpose.scss';
.input-label{
  min-width: 240px;
}
.input-group{
  position: relative;
  input{
    padding-right: 48px;
  }
  .unit{
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(-12px, -50%);
  }
}
</style>