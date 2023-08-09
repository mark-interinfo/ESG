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
                            <span>有無排放</span>
                            <span class="fontRed">*</span>
                            <CommonNoticeComponent
                            :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                            :position="'center'"
                            />
                            <div>
                                <span>
                                    <input type="radio" name="a1">
                                    <span>是</span>
                                </span>
                                <span>
                                    <input type="radio" name="a1">
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
                            <span>是否取得驗證</span>
                            <span class="fontRed">*</span>
                            <CommonNoticeComponent
                            :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                            :position="'center'"
                            />
                            <div>
                                <span>
                                    <input type="radio" name="a2">
                                    <span>是</span>
                                </span>
                                <span>
                                    <input type="radio" name="a2">
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
                      能源間接
                      <br>
                      (範疇二)
                  </td>
                  <td>
                    <ol>
                        <li>
                            <span>有無排放</span>
                            <span class="fontRed">*</span>
                            <CommonNoticeComponent
                            :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                            :position="'center'"
                            />
                            <div>
                                <span>
                                    <input type="radio" name="a3">
                                    <span>是</span>
                                </span>
                                <span>
                                    <input type="radio" name="a3">
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
                        <span>是否取得驗證</span>
                        <span class="fontRed">*</span>
                        <CommonNoticeComponent
                        :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                        :position="'center'"
                        />
                        <div>
                            <span>
                                <input type="radio" name="e001a">
                                <span>是</span>
                            </span>
                            <span>
                                <input type="radio" name="e001a">
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
                      其他間接
                      <br>
                      (範疇三)
                  </td>
                  <td>
                    <ol>
                        <li>
                            <span>有無排放</span>
                            <span class="fontRed">*</span>
                            <CommonNoticeComponent
                            :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                            :position="'center'"
                            />
                            <div>
                                <span>
                                    <input type="radio" name="a4">
                                    <span>是</span>
                                </span>
                                <span>
                                    <input type="radio" name="a4">
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
                            <span>是否取得驗證</span>
                            <span class="fontRed">*</span>
                            <CommonNoticeComponent
                            :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                            :position="'center'"
                            />
                            <div>
                                <span>
                                    <input type="radio" name="a5">
                                    <span>是</span>
                                </span>
                                <span>
                                    <input type="radio" name="a5">
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
                      溫室氣體排放密集度
                  </td>
                  <td>
                    <ol>
                        <li>
                            <span>有無排放</span>
                            <span class="fontRed">*</span>
                            <CommonNoticeComponent
                            :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                            :position="'center'"
                            />
                            <div>
                                <span>
                                    <input type="radio" name="a6">
                                    <span>是</span>
                                </span>
                                <span>
                                    <input type="radio" name="a6">
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
    import CommonNoticeComponent from '../../../components/CommonNoticeComponent.vue';

    const props = defineProps({
    opening: {
        type: Boolean,
        require: true,
    }
    })
</script>