<template>
  <div
  id="S001"
  class="issue-content"
  :class="{'opening': props.opening}"
  >
  <div>
      <table>
        <tr>
            <td>
              員工
            </td>
            <td>
              <ol>
                  <li>
                    <span>福利平均數</span>
                    <span class="fontRed">*</span>
                    <div class="fontRedOrange">
                      系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」之資料並於6月初統一於公開資訊觀測站對外公告。
                    </div>
                  </li>
                  <li>
                    <span>薪資平均數</span>
                    <span class="fontRed">*</span>
                    <div class="fontRedOrange">
                      系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」之資料並於6月初統一於公開資訊觀測站對外公告。
                    </div>
                  </li>
              </ol>
          </td>
        </tr>
        <tr>
            <td>
              非擔任主管職務之全時員工薪資
            </td>
              <td>
                <ol>
                  <li>
                    <span>平均數</span>
                    <span class="fontRed">*</span>
                    <div class="fontRedOrange">
                      系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」 之資料並於6月初統一於公開資訊觀測站對外公告。
                    </div>
                  </li>
                  <li>
                    <span>中位數</span>
                    <span class="fontRed">*</span>
                    <div class="fontRedOrange">
                      系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」 之資料並於6月初統一於公開資訊觀測站對外公告。
                    </div>
                  </li>
              </ol>
          </td>
        </tr>
        <tr>
          <td>
            管理職女性主管
          </td>
          <td>
            <ol>
              <li>
                <span>佔比</span>
                <span class="fontRed">*</span>
                <CommonNoticeComponent
                :info="['範例：20% (占比之分母，為所有管理職人數。區間 0%~100%、小數最多2位)']"
                :position="'center'"
                />
                <div>
                  <input type="text">
                  <span class="unit">%</span>
                </div>
              </li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>
            職業災害
          </td>
          <td>
            <ol>
              <li>
                <span>人數</span>
                <span class="fontRed">*</span>
                <div>
                  <input type="text">
                  <span class="unit">人</span>
                </div>
              </li>
              <li>
                <span>比率</span>
                <span class="fontRed">*</span>
                <div>
                  <input type="text" placeholder="職災 / 總員工">
                  <span class="unit">%</span>
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