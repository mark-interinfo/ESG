<template>
    <div id="searchYearInfo">
        <div>
            <h1>查閱年度資料</h1>
            <span id="company">
                <span>公司代號 : 0714</span>
                <span>公司名稱 : 英特內股份有限公司</span>
            </span>
            <div id="searchBar">
                <input id="searchInput" type="text" placeholder="請輸入民國年份">
                <input type="button" id="searchButton" class="button buttonColor1">
            </div>
            <div id="queryInfo">
                <h2>查詢結果</h2>
                <ul>
                    <li>
                        <span>110年ESG資料尚未申請</span>
                        <span>
                            <input class="button buttonColor1" type="button" value="申請ESG資料">
                        </span>
                    </li>
                    <li>
                        <span>109年ESG資料</span>
                        <span>
                            <input class="button buttonColor2" type="button" value="閱覽">
                            <input class="button buttonColor2" type="button" value="編輯">
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <span id="qa">
            <a href="javascript:;">「企業ESG資訊揭」露申報作業說明及適用問答</a>
        </span>
    </div>
</template>
<style lang="scss" scoped>

    #searchYearInfo {
        margin: 20px;
        
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

            #company {
                font-size: 14px;
                margin-bottom: 15px;
                display: flex;
                
                &:before {
                    content: "";
                    width: 20px;
                    height: 20px;
                    background: url(/src/assets/images/company.svg) center / cover;
                    vertical-align: bottom;
                }

                > span {
                    padding: 0 10px;
                }

                > span:first-of-type {
                    border-right: 1px solid #aaa
                }
            }

            #searchBar {
                display: flex;

                #searchInput {
                    height: 44px;
                    border: 1px solid #dfdfdf;
                    padding: 0 10px;
                    box-sizing: border-box;
                    width: 400px;
                    font-size: 16px;
                    background: #efefef;

                    &::placeholder {
                        color: #aaa
                    }
                }

                #searchButton {
                    width: 44px;
                    height: 44px;
                    background-image: url(/src/assets/images/search.svg);
                    background-position:center;
                    background-repeat:no-repeat;
                    border-radius: 0;
                }
            }

            #queryInfo {
                h2 {
                    font-size: 18px;
                    color: #37D880;
                    font-weight: inherit;
                    border-bottom: 1px solid #efefef;
                    line-height: 25px;
                    padding-bottom: 5px;
                }

                ul {
                    padding: 0;
                    list-style: none;
                    width: 100%;

                    li{
                        > span {
                            display: inline-block;

                            > input + input{
                                margin-left:5px;
                            }

                            &:first-of-type {
                                width: 50%;
                                font-size: 20px;
                            }

                            + span{
                                width: 50%;
                                text-align:right;
                            }
                        }

                        + li{
                            margin-top:15px;
                        }

                        + input {
                            width: 134px;
                        }
                    }
                }
            }
        }


        #qa {
            text-align: center;
            margin: 15px 0;
            display:block;

            a {
                color: #808080;
                text-decoration: none;
                font-size: 14px;

                &:after {
                    content: "";
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    background: url(/src/assets/images/quill.svg) center / cover;
                    vertical-align: bottom;
                    margin-left: 5px;
                }
            }
        }
    }
</style>