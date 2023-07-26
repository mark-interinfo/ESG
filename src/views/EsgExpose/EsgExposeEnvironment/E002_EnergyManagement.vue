<template>
  <div
  id="E002"
  class="issue-content"
  :class="{'opening': props.opening}">
    <div>
      <table>
        <tr>
            <td>
              能源管理
            </td>
            <td>
              <ol>
                  <li>
                      是否取得驗證
                      <span class="fontRed">*</span>
                      <div>
                          <div>
                              <span>
                                  <input type="radio" name="e002a">
                                  <span>否</span>
                              </span>
                          </div>
                          <div>
                              <span>
                                  <input type="radio" name="e002a">
                                  <span>是</span>
                              </span>
                              <span>
                                  <select>
                                      <option>請選擇驗證機構</option>
                                  </select>
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
              </ol>
          </td>
        </tr>
        <tr>
            <td>
              再生能源使用率
            </td>
            <td>
              <ol>
                  <li>
                    使用率
                    <span class="fontRed">*</span>
                    <div>
                        <div>
                            <span>
                                <input type="radio" name="e002a">
                                <span>無資料</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                <input type="radio" name="e002a">
                                <span>排放量</span>
                            </span>
                            <span>
                              <input type="text">
                              <span class="unit">噸CO2e</span>
                            </span>
                        </div>
                        <div>
                            <span></span>
                            <span>
                              <select>
                                  <option>請選擇範疇</option>
                              </select>
                            </span>
                        </div>
                    </div>
                  </li>
                  <li>
                    提升能源使用效率政策
                    <div>
                        <input type="text" placeholder="請說明政策">
                    </div>
                  </li>
                  <li>
                    使用再生物料政策
                    <div>
                        <input type="text" placeholder="請說明政策">
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