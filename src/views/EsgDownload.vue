<template>
  <div id="download">
    <div>
      <h1>{{route.name}}</h1>
      <table>
          <tr>
            <td>項目</td>
            <td>下載檔案</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <span class="file download">
                <span>
                  ESG資訊矩陣.excel
                </span>
              </span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <span class="file download">
                <span>
                  ESG資訊矩陣.pdf
                </span>
              </span>
            </td>
          </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>
<style lang="scss">

// page setting
#download{
  padding: 20px 40px 40px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  width: 1000px;
  max-width: 90%;
  margin: 20px auto;
  border-radius: 3px;
  box-sizing: border-box;

  h1{
    font-size:24px;
    font-weight: inherit;
    margin: 0 0 20px 0;
  }

  table{
    width: 100%;
    background: #EFEFEF;
    border-collapse: collapse;
    // 陰影值請用0.2
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    tr{
      &:first-of-type td{
        background: #F5FDF9;
        padding:8px;
        color: #808080;
      }
      td{
        border: 1px solid #EFEFEF;
        padding: 12px 8px;
        background: #fff;
      }
      td:first-of-type{
        text-align: center;
        width: 32px;
      }
      td:last-of-type{
        .file{
          display: flex;
          align-items: center;
          
          span{
            transition: .3s;
          }

          &.download:after{
            content:"";
            display:inline-block;
            width:28px;
            height:28px;
            background:url(../assets/images/download.svg)center/cover no-repeat;
            vertical-align: middle;
            transition: .3s;
            margin-left:5px;
          }

          &.download:hover{
            cursor: pointer;
            
            &:after{
              content:"";
              background:url(../assets/images/downloadHover.svg)center/cover no-repeat;
            }

            span{
              color: #37D880;
            }
          }
        }
      }
    }
  }
}
</style>