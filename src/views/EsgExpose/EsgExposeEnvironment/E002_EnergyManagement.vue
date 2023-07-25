<template>
  <div
  id="E002"
  class="issue-content"
  :class="{'opening': props.opening}">
  <div>
    <table>
        <tr>
            <td>
                直接溫室氣體
                <br>
                (範疇一)
            </td>
            <td>
                <ol>
                    <li>
                        是否取得驗證
                        <span class="fontRed">*</span>
                        <div>
                            <div>
                                <span>
                                    <input type="radio" name="a">
                                    <span>否</span>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <input type="radio" name="a">
                                    <span>是</span>
                                </span>
                                <span>
                                    <select>
                                        <option>其他</option>
                                    </select>
                                </span>
                            </div>
                            <div>
                                <span></span>
                                <span>
                                    <input type="text" placeholder="請說明原因">
                                </span>
                            </div>
                            <div>
                                <span></span>
                                <span>
                                    <select>
                                        <option>請選擇驗證標準</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        排放量
                        <span class="fontRed">*</span>
                        <div>
                            <div>
                                <span>
                                    <input type="radio" name="b">
                                    <span>無資料</span>
                                </span>
                                
                                <span>
                                    <select>
                                        <option>請選擇原因</option>
                                    </select>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <input type="radio" name="b">
                                    <span>排放量</span>
                                </span>
                            
                                <span>
                                    <input type="text">
                                    <span class="unit">噸CO2e</span>
                                </span>
                            </div>
                            <div>
                                <span>資料範圍</span>
                                <span>
                                    <input type="text" placeholder="請描述各項範疇依資料範圍 (涵蓋子公司)">
                                </span>
                            </div>
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
<style lang="scss" scoped>
.issue-content{
  height: 0;
  overflow: hidden;
  &.opening{
    height: auto;
  }
}
</style>