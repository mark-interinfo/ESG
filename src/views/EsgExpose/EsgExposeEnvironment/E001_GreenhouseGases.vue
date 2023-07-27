<template>
  <div
  id="E001"
  class="issue-content"
  :class="{'opening': props.opening}"
  >
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
                            <span>是否取得驗證</span>
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001a">
                                          <span>否</span>
                                      </span>
                                  </div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001a">
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
                            <span>排放量</span>
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001b">
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
                                          <input type="radio" name="e001b">
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

              <tr>
                  <td>
                      能源間接
                      <br>
                      (範疇二)
                  </td>
                  <td>
                      <ol>
                          <li>
                            <span>是否取得驗證</span>
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001c">
                                          <span>否</span>
                                      </span>
                                  </div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001c">
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
                          <li>
                            <span>排放量</span>
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001d">
                                          <span>無資料</span>
                                      </span>
                                      
                                      <span>
                                          <select>
                                              <option>請選擇原因</option>
                                          </select>
                                      </span>
                                      
                                      <div>
                                          <span>
                                              <input type="radio" name="e001d">
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
                              </div>
                          </li>
                      </ol>
                  </td>
              </tr>

              <tr>
                  <td>
                      其他間接
                      <br>
                      (範疇三)
                  </td>
                  <td>
                      <ol>
                          <li>
                            <span>是否取得驗證</span>
                            <span class="fontRed">*</span>
                            <div>
                                <div>
                                    <span>
                                        <input type="radio" name="e001e">
                                        <span>否</span>
                                    </span>
                                    
                                </div>
                                <div>
                                    <span>
                                        <input type="radio" name="e001e">
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
                          <li>
                            <span>排放量</span>
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="e001f">
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
                                          <input type="radio" name="e001f">
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

              <tr>
                  <td>
                      溫室氣體排放密集度
                  </td>
                  <td>
                      <ol>
                          <li>
                            <span>溫室氣體排放密集度</span>
                            <span class="fontRed">*</span>
                            <div>
                                <div>
                                    <span>
                                        <input type="radio" name="e001g">
                                        <span>無資料</span>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <input type="radio" name="e001g">
                                        <span>排放量</span>
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
                                    <span>資料範圍</span>
                                    <span>
                                        <input type="text">
                                    </span>
                                </div>
                            </div>
                          </li>
                          <li>
                            <span>排放量</span>
                            <span class="fontRed">*</span>
                            <div>
                                <div>
                                    <span>
                                        <input type="radio" name="e001h">
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
                                        <input type="radio" name="e001h">
                                        <span>排放量</span>
                                    </span>
                                    <span>
                                        <input type="text" class="small">
                                        <span class="unit">噸CO2e</span>
                                        <select class="small">
                                            <option>請選擇原因</option>
                                        </select>
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

              <tr>
                  <td>
                      溫室氣體管理辦法
                  </td>
                  <td>
                      <ol>
                          <li>
                            <span>企業對於因應氣候變遷或溫室氣體管理之策略</span>
                            <div>
                                <input type="text" placeholder="請說明策略">
                            </div>
                          </li>
                          <li>
                            <span>企業溫室氣體排放量減量目標</span>
                            <div>
                                <input type="text" placeholder="請說明目標">
                            </div>
                          </li>
                          <li>
                            <span>企業溫室氣體排放量減量之預算與計畫</span>
                            <div>
                                <input type="text" placeholder="請說明預算與計畫">
                            </div>
                          </li>
                          <li>
                            <span>企業產品或服務帶給客戶或消費者之減碳效果</span>
                            <div>
                                <input type="text" placeholder="請說明減碳效果">
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