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

              <tr>
                  <td>
                      能源間接
                      <br>
                      (範疇二)
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
                              排放量
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="c">
                                          <span>無資料</span>
                                      </span>
                                      
                                      <span>
                                          <select>
                                              <option>請選擇原因</option>
                                          </select>
                                      </span>
                                      
                                      <div>
                                          <span>
                                              <input type="radio" name="c">
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
                              排放量
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="c">
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
                                          <input type="radio" name="c">
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
                              溫室氣體排放密集度
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="a">
                                          <span>無資料</span>
                                      </span>
                                  </div>
                                  <div>
                                      <span>
                                          <input type="radio" name="a">
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
                              排放量
                              <span class="fontRed">*</span>
                              <div>
                                  <div>
                                      <span>
                                          <input type="radio" name="c">
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
                                          <input type="radio" name="c">
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
                              企業對於因應氣候變遷或溫室氣體管理之策略
                              <div>
                                  <input type="text" placeholder="請說明策略">
                              </div>
                          </li>
                          <li>
                              企業溫室氣體排放量減量目標
                              <div>
                                  <input type="text" placeholder="請說明目標">
                              </div>
                          </li>
                          <li>
                              企業溫室氣體排放量減量之預算與計畫
                              <div>
                                  <input type="text" placeholder="請說明預算與計畫">
                              </div>
                          </li>
                          <li>
                              企業產品或服務帶給客戶或消費者之減碳效果
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
<style lang="scss" scoped>
  #E001{
    height: 0;
    overflow: hidden;
    &.opening{
        height: auto;
    }
      table{
          background:#ccc;border-spacing:1px;width: 100%;
          td{
              background:#fff;padding:5px;
              span{padding:5px;}
          }
      }

      .small{width: 167px!important;}
      li{
          + li{margin-top:20px;}
          div > span{
              vertical-align: middle;
              &:first-of-type{width:90px;text-align:right;}
              + span{width: calc(100% - 114px);}

              > input[type="text"],select{
                  width:350px;
              }
              > input[type="text"] + .unit{margin-left: -80px;font-size:14px;padding: 0 20px;}
              > input[type="text"]:has( + .unit){padding-right:60px;}
          }
      }

      div > input[type="text"]{
          width: 460px;margin-top:10px;
      }
  }
</style>