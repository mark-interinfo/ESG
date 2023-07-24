<template>
    <div id="esgInfoContent">
        <div>
            <h1>查閱年度資料</h1>
            <span id="company">
                <span>公司代號 : 0714</span>
                <span>公司名稱 : 英特內股份有限公司</span>
            </span>
            <span id="buttonBox">
                <input class="button buttonColor2" id="del" type="button" value="刪除">
                <input class="button buttonColor2" id="import" type="button" value="匯入檔案">
                <input class="button buttonColor1" id="submit" type="button" value="送出">
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #esgInfoContent {
        padding: 20px;
    

        h1 {
            font-size: 24px;
            margin: 0 0 10px 0;
            font-weight: inherit;
        }

        > div {
            padding: 20px 40px 40px;
            box-shadow: 1px 1px 8px rgba(0,0,0,.3);
            width: 800px;
            max-width: 80%;
            margin: 0 auto;
            border-radius: 3px;

            > span{
                display:inline-block;width: calc(50% - 12px);
                &:last-of-type{text-align:right;}
            }
        }

        #company {
            font-size: 14px;
            > span {
                padding: 0 10px;
                &:first-of-type {
                    border-right: 1px solid #aaa
                }

                &:before {
                    content: "";
                    width: 20px;
                    height: 20px;
                    background: url(/src/assets/images/company.svg) center / cover;
                    vertical-align: bottom;
                }

            }

            #buttonBox{
                padding: 0 10px;
            }

        }
    }
</style>