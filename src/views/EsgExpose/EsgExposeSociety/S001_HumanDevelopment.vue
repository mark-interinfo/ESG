<template>
  <div
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
                    <CommonNoticeComponent :info="['aaaa','bbbbb']"/>
                    <span class="fontRed">*</span>
                    <div class="fontRed">
                      系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」之資料並於6月初統一於公開資訊觀測站對外公告。
                    </div>
                  </li>
                  <li>
                    <span>薪資平均數</span>
                    <span class="fontRed">*</span>
                    <div class="fontRed">
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
                    <div class="fontRed">
                      系統將自動帶出「(年度財報)員工人數與福利(薪資)費用資訊」項下「員工人數、福利費用與平均資訊申報作業」 之資料並於6月初統一於公開資訊觀測站對外公告。
                    </div>
                  </li>
                  <li>
                    <span>中位數</span>
                    <span class="fontRed">*</span>
                    <div class="fontRed">
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
                <input type="text" class="small">
                <span class="unit">噸CO2e</span>
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
                <input type="text">
                <span class="unit">人</span>
              </li>
              <li>
                <span>比率</span>
                <span class="fontRed">*</span>
                <input type="text" placeholder="職災 / 總員工">
                <span class="unit">%</span>
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
<style lang="scss" scoped>
@import '../EsgExpose.scss';
.input-label{
  width: 108px;
}
.input-group{
  position: relative;
  input{
    padding-right: 36px;
  }
  .unit{
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(-12px, -50%);
  }
}
</style>