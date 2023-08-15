<template>
  <div
  class="issue-item pointer"
  v-for="issue in props.allInternationalIssue"
  :key="issue.guideLine"
  :data-item ="issue.guideLine"
  >
<<<<<<< HEAD
  <div class="issue-title">
    <span>
      {{ issue.internationalIssueName }}
    </span>
    <img src="../assets/images/select.svg" alt="">
=======
    <div v-if="issue.id === 'GRI'"  id="GRI" class="issue-content">
      <table class="indicators">
          <tr>
              <td>
                適用產業別
              </td>
              <td>
                <span>
                    <select>
                        <option>請選擇</option>
                    </select>
                </span>
              </td>
          </tr>
          <tr>
              <td>
                指標代碼
              </td>
              <td>
                <span>
                    <input type="text" placeholder="請填寫">
                </span>
              </td>
          </tr>
          <tr>
              <td>
                使用狀態
              </td>
              <td>
                <span>
                    <span><input type="radio" name="a"><span>開啟</span></span>
                    <span><input type="radio" name="a"><span>停用</span></span>
                </span>
              </td>
          </tr>
          <tr>
              <td>
                指標名稱
              </td>
              <td>
                <span>
                  <input type="text" placeholder="請描述">
                </span>
              </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="button" value="更新設定" class="button buttonColor1">
            </td>
          </tr>
      </table>
    </div>
    <div v-if="issue.id === 'SASB'"  id="SASB" class="issue-content">
      <table class="indicators">
          <tr>
              <td>
                適用產業別
              </td>
              <td>
                <span>
                    <select>
                        <option>請選擇</option>
                    </select>
                </span>
              </td>
          </tr>
          <tr>
              <td>
                指標代碼
              </td>
              <td>
                <span>
                    <input type="text" placeholder="請填寫">
                </span>
              </td>
          </tr>
          <tr>
              <td>
                使用狀態
              </td>
              <td>
                <span>
                    <span><input type="radio" name="a"><span>開啟</span></span>
                    <span><input type="radio" name="a"><span>停用</span></span>
                </span>
              </td>
          </tr>
          <tr>
              <td>
                指標名稱
              </td>
              <td>
                <span>
                  <input type="text" placeholder="請描述">
                </span>
              </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="button" value="更新設定" class="button buttonColor1">
            </td>
          </tr>
      </table>
    </div>
    <div v-if="issue.id === 'TCFD'"  id="TCFD" class="issue-content">
      <div class="noData">
        <h2>尚無資料 請點擊按鈕</h2>
        <input type="button" class="button buttonColor3" value="新增議題">
      </div>
    </div>
>>>>>>> bec15a39a0cdc702a7113628966ecb681b260060
  </div>

  <div class="issue-content" id="ExchangeIndicators">
      <table class="indicators">
        <template v-for="list in issue.internationalIssueList" :key="list.guideLine">
          <tr>
              <td>
                指標代號
              </td>
              <td>
                <select v-model="list.internationalTargetNo">
                  <option v-for="option in props.allInternationalTarget.GRI[issue.internationalIssueNo]" :value="option.value">
                    {{option.name}}
                  </option>
                </select>
              </td>
          </tr>
          <tr>
              <td>
                適用產業別
              </td>
              <td>
                <div class="items">
                  <span v-for="target in list.internationalTargetCodeArray">{{props.allIndustry.find((item)=> item.value == target).name}}</span>
                </div>
              </td>
          </tr>
          <tr>
              <td>
                指標名稱
              </td>
              <td>
                <input type="text" v-model="list.targetTitle">
              </td>
          </tr>
          <tr>
              <td>
                指標備註
              </td>
              <td>
                <input type="text" v-model="list.targetNote">
              </td>
          </tr>
          <tr>
              <td>
                使用狀態
              </td>
              <td v-if="list.targetStatus">
                <div>
                  <label :for="`${list.targetType}.${list.targetTitle}on`">
                    <input type="radio"
                    :id="`${list.targetType}.${list.targetTitle}on`"
                    v-model="list.targetStatus.isOn"
                    :value="true"
                    >
                    <span>開啟</span>
                  </label>
                </div>
                <div>
                  <label :for="`${list.targetType}.${list.targetTitle}off`">
                    <input type="radio"
                    :id="`${list.targetType}.${list.targetTitle}off`"
                    v-model="list.targetStatus.isOn"
                    :value="false"
                    >
                    <span>停用，自</span>
                    <input type="text" class="year" placeholder="請輸入民國年"
                    :disabled="list.targetStatus.isOn === true"
                    v-model="list.targetStatus.isOnYear"
                    >
                    <span class="unit">年</span>
                    <span>起停用此項目</span>
                  </label>
                </div>
              </td>
          </tr>
          <tr v-for="(target, targetIndex) in list.targetList">
            <td></td>
            <td>
              <table class="indicators">
                <tr>
                  <td class="color-green text-start" colspan="2">指標細項（{{ chineseNumber(targetIndex + 1) }}）</td>
                </tr>
                <tr>
                  <td>細項名稱</td>
                  <td>
                    <input type="text" v-model="target.title">
                  </td>
                </tr>
                <tr>
                  <td>細項備註</td>
                  <td>
                    <input type="text" v-model="target.note">
                  </td>
                </tr>
                <tr>
                  <td>輸入方式</td>
                  <td>
                    <input
                    type="button"
                    class="button buttonColor3"
                    :value="inputMethodComputed(target.type)"
                    @click="openDialog(target.optionList, target.type, target)"
                    >
                  </td>
                </tr>
                <tr>
                    <td>
                      使用狀態
                    </td>
                    <td v-if="target.status">
                      <div>
                        <label :for="`${target.fieldId}on`">
                          <input type="radio"
                          :id="`${target.fieldId}on`"
                          v-model="target.status.isOn"
                          :value="true"
                          >
                          <span>開啟</span>
                        </label>
                      </div>
                      <div>
                        <label :for="`${target.fieldId}off`">
                          <input type="radio"
                          :id="`${target.fieldId}off`"
                          v-model="target.status.isOn"
                          :value="false"
                          >
                          <span>停用，自</span>
                          <input type="text" class="year" placeholder="請輸入民國年"
                          :disabled="target.status.isOn === true"
                          v-model="target.status.isOnYear"
                          >
                          <span class="unit">年</span>
                          <span>起停用此項目</span>
                        </label>
                      </div>
                    </td>
                </tr>
              </table>
            </td>
          </tr>
        </template>
        <tr>
          <td colspan="2">
            <input type="button" value="新增指標細項" class="button buttonColor3">
            <input type="button" value="更新設定" class="button buttonColor1" @click="updateInputSetting">
          </td>
        </tr>
      </table>
  </div>
</div>  
</template>
<script setup>
  const props = defineProps({
    allInternationalIssue: {
      type: Array,
    },
    allIndustry: {
      type: Array,
    },
    allInternationalTarget: {
      type: Array,
    }
  });

  console.log(props)


  
</script>