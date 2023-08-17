<template>
    <div id="searchYearInfo">
        <div class="content">
            <div class="title">
                <CommonCompanyTitle/>
                <span id="buttonBox">
                    <a download="永續報告書範本" href="" class="button buttonColor3" id="downloadTemplate">下載範本</a>
                </span>
            </div>
            <div id="searchBar">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="請輸入民國年份"
                    v-model.number="apiRequest.year"
                    @change="change"
                >
                <input
                    type="button"
                    id="searchButton"
                    class="button buttonColor1"
                    @click="change"
                >
            </div>
            <div id="queryInfo">
                <h2>查詢結果</h2>
                <ul>
                    <!-- 有資料 -->
                    <li
                        id="edit"
                        :class="{'show': hasData === 'YES'}"
                    >
                        <span>{{queryYear}}年ESG資料</span>
                        <span>
                            <a download target="_blank" type="button" :href="downloadXBRL.href" class="button buttonColor2 download">XBRL</a>
                            <input type="button" class="button buttonColor2 download" value="矩陣">
                            <router-link to="/LookEsgInfo">
                                <input class="button buttonColor2" type="button" value="閱覽">
                            </router-link>
                            <router-link to="/EditEsgInfo">
                                <input class="button buttonColor2" type="button" value="編輯">
                            </router-link>
                        </span>
                    </li>
                    <!-- 無資料 -->
                    <li id="apply"
                        :class="{'show': hasData === 'NO'}"
                    >
                        <span>{{queryYear}}年ESG資料尚未申報</span>
                        <span>
                            <router-link to="/ApplyEsgInfo">
                                <input class="button buttonColor1" type="button" value="申報ESG資料">
                            </router-link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <span id="qa">
            <!-- 「企業ESG資訊揭」露申報作業說明及適用問答 ->「企業ESG資訊揭露」申報作業說明及適用問答 -->
            <a href="javascript:;">「企業ESG資訊揭露」申報作業說明及適用問答</a>
        </span>
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import { APICollection } from '../mixin/api';
import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
import { useUserStore } from "../pinia/user.js";
import { useRouter } from 'vue-router';
const router = useRouter();

const userStore = useUserStore();

const downloadXBRL = ref({
    href:"",
});

const apiRequest = ref({
    companyId: userStore.companyId,
    year: ''
});

const queryYear = ref();

const hasData = ref('');

onMounted(()=>{
    if(!userStore.uid){
        router.push("/HomeView");
        alert("請登入帳號!");
    };
})

const change = function() {
    // Nick
    (async() => {
        hasData.value = await APICollection.QueryYear(apiRequest);
        hasData.value = hasData.value.dataExist.value;

        queryYear.value = apiRequest.value.year;
        userStore.setYear(queryYear.value);

        downloadXBRL.value = await APICollection.DownloadXBRL(apiRequest);
        console.log(downloadXBRL.value.href)
    })().catch(err=>{
        alert(err.resultMessage);
    });
};

// let uploadPDFResponseBody = {
//     fileName:"C:/Users/maxhaung/Desktop/ESG_POC/1532_勤美_2021.pdf"
// };
// (async() => {
//     console.log(await APICollection.UploadPDF(uploadPDFResponseBody));
// })();

// let GetPDFDataResponseBody = {
//     keyWord: "有關廢棄物的議題",
// };
// let theWord = ref('');
// (async() => {
//     theWord.value = (await APICollection.GetPDFData(GetPDFDataResponseBody)).msg;
//     theWord.value = unicodeToString(theWord.value)
// })();

</script>
<style lang="scss" scoped>

    #searchYearInfo {
        margin: 0 20px 20px;

        .content{
            width: 880px;
            margin: 0 auto;
            padding: 20px 40px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            border-radius: 3px;
        }

        .download{
            background: url(../assets/images/download.svg)left center/30px no-repeat;
            padding-left:30px;
        }

        .title{
            box-shadow: none;
            width:auto;
            padding:0;
            
        }

        > div {

            #searchBar {
                display: flex;
                margin-top:20px;
                margin-bottom: 40px;;

                #searchInput {
                    height: 44px;
                    border: 1px solid #dfdfdf;
                    padding: 0 10px;
                    box-sizing: border-box;
                    width: 400px;
                    font-size: 16px;
                    background: #efefef;
                    border-radius: 3px 0 0 3px;

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
                    border-radius: 0 3px 3px 0;
                    margin:0;
                }
            }

            #queryInfo {
                display:none;

                &:has(.show){display:inherit;}


                .show{display:inherit!important;}
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
                        display:none;
                        > span {
                            display: inline-block;

                            > a + a{
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