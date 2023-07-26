<template>
  <div
  class="issue-content"
  :class="{'opening': props.opening}"
  >
  <div>
      <table>
        <tr>
            <td>
              <span>
                員工
              </span>
              <CommonNoticeComponent :info="['aaaa','bbbbb']"/>
            </td>
            <td>
              <ol>
                  <li>
                    <span>董事總席次(含獨立董事)</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                    </span>
                  </li>
                  <li>
                    <span>獨立董事席次</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                    </span>
                  </li>
                  <li>
                    <span>女性董事席次及比率</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                    </span>
                  </li>
              </ol>
          </td>
        </tr>
        <tr>
            <td>
              <span>
                出席率
              </span>
              <CommonNoticeComponent :info="['aaaa','bbbbb']"/>
            </td>
            <td>
              <ol>
                <li>
                  <span>董事出席董事會出席率</span>
                  <span class="fontRed">*</span>
                  <span>
                    <input type="text">
                  </span>
                </li>
              </ol>
          </td>
        </tr>
        <tr>
            <td>
              <span>
                進修要點
              </span> 
              <CommonNoticeComponent :info="['aaaa','bbbbb']"/>
            </td>
            <td>
              <ol>
                <li>
                  <span>董監事進修時數符合進修要點比率</span>
                  <CommonNoticeComponent :info="['aaaa','bbbbb']"/>
                  <span class="fontRed">*</span>
                  <span>
                    <input type="text">
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
import CommonNoticeComponent from "../../../components/CommonNoticeComponent.vue";
const props = defineProps({
  opening: {
    type: Boolean,
    require: true,
  }
})
</script>