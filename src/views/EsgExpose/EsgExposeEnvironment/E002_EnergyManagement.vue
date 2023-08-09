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
                    <span>是否取得驗證</span>
                    <span class="fontRed">*</span>
                    <CommonNoticeComponent
                    :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                    :position="'center'"
                    />
                    <div>
                        <span>
                            <input type="radio" name="b1">
                            <span>是</span>
                        </span>
                        <span>
                            <input type="radio" name="b1">
                            <span>否</span>
                        </span>
                    </div>
                </li>
                <li>
                    <span>驗證機構</span>
                    <div>
                        <select>
                            <option value>請選擇驗證機構</option>
                            <option value="0">驗證機構1</option>
                        </select>
                    </div>
                </li>
                <li>
                    <span>驗證標準</span>
                    <div>
                        <select>
                            <option value>請選擇驗證標準</option>
                            <option value="0">驗證標準1</option>
                        </select>
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
                      <span>使用率</span>
                      <span class="fontRed">*</span>
                      <CommonNoticeComponent
                      :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                      :position="'center'"
                      />
                      <div>
                          <span>
                              <input type="radio" name="b2">
                              <span>是</span>
                          </span>
                          <span>
                              <input type="radio" name="b2">
                              <span>否</span>
                          </span>
                      </div>
                  </li>
                  <li>
                      <span>排放量</span>
                      <div>
                          <input type="text">
                          <span class="unit">噸CO2e</span>
                      </div>
                  </li>
                  <li>
                      <span>資料範圍</span>
                      <div>
                          <input type="text" placeHolder="請描述各項範疇一資料範圍 （涵蓋子公司）">
                      </div>
                  </li>
                  <li>
                      <span>無資料</span>
                      <div>
                          <select>
                              <option value>請選擇原因</option>
                              <option value="0">原因1</option>
                          </select>
                      </div>
                  </li>
                  <li>
                      <span>提升能源使用效率政策</span>
                      <span class="fontRed">*</span>
                      <div>
                          <input type="text" placeHolder="請說明政策">
                      </div>
                  </li>
                  <li>
                      <span>使用再生物料政策</span>
                      <span class="fontRed">*</span>
                      <div>
                          <input type="text" placeHolder="請說明政策">
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