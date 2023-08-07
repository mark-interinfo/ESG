<template>
  <div
  id="G001"
  class="issue-content"
  :class="{'opening': props.opening}"
  >
  <div>
      <table>
        <tr>
            <td>
              <span>
                員工
              </span>
              <CommonNoticeComponent
              :info="['請申報資料年度當年底在任席次，如申報110年度資料，即以110年12月31日在任席次申報)']"
              :position="'left'"
              />
            </td>
            <td>
              <ol>
                  <li>
                    <span>董事總席次(含獨立董事)</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                    </span>
                  </li>
                  <li>
                    <span>獨立董事席次</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                    </span>
                  </li>
                  <li>
                    <span>女性董事席次及比率</span>
                    <span class="fontRed">*</span>
                    <span>
                      <input type="text">
                    </span>
                  </li>
              </ol>
          </td>
        </tr>
        <tr>
            <td>
              <span>
                出席率
              </span>
              <CommonNoticeComponent
              :info="[
                '計算方式：所有董事(不包含監察人)實際出席次數合計/應出席次數合計，應出席次數以董事在職期間董事會開會次數計算，',
                '詳細計算方法可參考「董監事出列席董事會及進修情形暨獨立董事現職、經歷及兼任情形申報作業」'
              ]"
              :position="'left'"
              />
            </td>
            <td>
              <ol>
                <li>
                  <span>董事出席董事會出席率</span>
                  <span class="fontRed">*</span>
                  <span>
                    <input type="text">
                  </span>
                </li>
              </ol>
          </td>
        </tr>
        <tr>
            <td>
              <span>
                進修要點
              </span>
              <CommonNoticeComponent
              :info="[
                '本指標應參考公開資訊觀測站/公司治理/董事及監察人相關資訊/董事及監察人出(列)席董事會及進修情形暨獨立董事現職、',
                '經歷及兼任情形(個別)，為資訊來源。計算方式：達成進修時數董事/全體董事)'
              ]"
              :position="'left'"
              />
            </td>
            <td>
              <ol>
                <li>
                  <span>董監事進修時數符合進修要點比率</span>
                  <span class="fontRed">*</span>
                  <span>
                    <input type="text">
                  </span>
                </li>
              </ol>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import CommonNoticeComponent from "../../../components/CommonNoticeComponent.vue";
const props = defineProps({
  opening: {
    type: Boolean,
    require: true,
  }
})
</script>
