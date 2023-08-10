<template>
  <div id="issue">
    <div id="issue-header">
      <div id="issue-tags">
        <div class="issue-tag pointer" v-for="item in data.top" :data-id="item">
          {{item}}
        </div>
      </div>

      <div id="issue-toggle" class="pointer"></div>

    </div>

    <div
    class="issue-item pointer"
    v-for="issue in data.allIssue"
    :key="issue.issueType"
    :data-item ="issue.issueKind"
    >
      <div class="issue-title">
        <span>
          {{ issue.issueType +"-"+ issue.issueTitle }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div :id="issue.issueType" class="issue-content">
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
      
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onUpdated ,onMounted} from 'vue';
  import { switchOpen } from '../mixin/mixin.js';
  import { APICollection } from '../mixin/api';
  import E001_GreenhouseGases from './EsgExpose/EsgExposeEnvironment/E001_GreenhouseGases.vue';
  import E002_EnergyManagement from './EsgExpose/EsgExposeEnvironment/E002_EnergyManagement.vue';
  import E003_WaterManagement from './EsgExpose/EsgExposeEnvironment/E003_WaterManagement.vue';
  import S001_HumanDevelopment from './EsgExpose/EsgExposeSociety/S001_HumanDevelopment.vue';
  import G001_DirectorsBoard from './EsgExpose/EsgExposeGovernance/G001_DirectorsBoard.vue';
  import G002_InvestorCommunication from './EsgExpose/EsgExposeGovernance/G002_InvestorCommunication.vue';

  const data = ref({
    top:[]
  });

  const apiRequest = ref({
      companyId: "1101",
      year: '112'
  });


  (async() => {
      data.value = await APICollection.QueryReportData(apiRequest);
      console.log(await APICollection.QueryReportData(apiRequest))
  })();

  const issueType = ref([
    { name: '全部議題', key: 'all' },
    { name: '環境', key: 'environment' },
    { name: '社會', key: 'society' },
    { name: '治理', key: 'governance' },
  ]);

  const issueList = ref([
    // 環境
    { id:'E001', key: 'environment', name:'溫室氣體排放' },
    { id:'E002', key: 'environment', name:'能源管理' },
    { id:'E003', key: 'environment', name:'水資源管理' },
    // 社會
    { id:'S001', key: 'society', name:'人力發展' },
    // 治理
    { id:'G001', key: 'governance', name:'董事會' },
    { id:'G002', key: 'governance', name:'投資人溝通' },
  ]);

  
  onUpdated(()=>{
    switchOpen();
  });
</script>
