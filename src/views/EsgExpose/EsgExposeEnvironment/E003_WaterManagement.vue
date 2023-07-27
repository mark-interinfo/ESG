<template>
  <div
  id="E003"
  class="issue-content"
  :class="{'opening': props.opening}">
    <div>
      <table>
        <tr>
            <td>
              水資源管理
            </td>
            <td>
              <ol>
                  <li>
                      是否取得驗證
                      <span class="fontRed">*</span>
                      <div>
                          <div>
                              <span>
                                  <input type="radio" name="e003a">
                                  <span>否</span>
                              </span>
                          </div>
                          <div>
                              <span>
                                  <input type="radio" name="e003a">
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
              水資源使用率
            </td>

              <td>
                <ol>
                  <li>
                    用水量
                    <span class="fontRed">*</span>
                    <div>
                        <span>
                            <input type="radio" name="e003b">
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
                            <input type="radio" name="e002a">
                            <span>有資料</span>
                        </span>
                        <span>
                          <input type="text">
                          <span class="unit">公噸</span>
                        </span>
                    </div>
                    <div>
                        <span>
                            <span>資料範圍</span>
                        </span>
                        <span>
                          <select>
                              <option>請選擇範疇</option>
                          </select>
                        </span>
                    </div>
                  </li>
                  <li>
                    用水密集度
                    <span class="fontRed">*</span>
                    <div>
                        <span>
                            <input type="radio" name="e003c">
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
                            <input type="radio" name="e002a">
                            <span>有資料</span>
                        </span>
                        <span>
                          <input type="text" class="small">
                          <span class="unit">噸CO2e</span>
                          <select class="small">
                              <option>請選單位</option>
                          </select>
                        </span>
                    </div>
                    <div>
                        <span>
                            <span>資料範圍</span>
                        </span>
                        <span>
                          <select>
                              <option>請選擇範疇</option>
                          </select>
                        </span>
                    </div>
                  </li>
                  <li>
                    水資源管理或減量目標
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