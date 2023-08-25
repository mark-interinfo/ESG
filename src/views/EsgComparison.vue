<template>
    <div id="esgComparison">
        <div class="content">
            <div class="title">
                <CommonCompanyTitle/>
                <!-- <span id="buttonBox">
                    <a v-if="userStore.uidType != 'monitor'" download="永續報告書範本" href="" class="button buttonColor3" id="downloadTemplate">下載範本</a>
                </span> -->
            </div>
            <div id="searchBar">
                <span>
                    <div>
                        資料年度
                    </div>
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="請輸入民國年份"
                        v-model.number="apiRequest.year"
                        v-on:keyup.enter="send"
                    >
                    <input
                        type="button"
                        id="searchButton"
                        class="button buttonColor1"
                        @click="send"
                    >
                </span>
            </div>
            <div id="queryInfo">
                <h2>查詢結果</h2>
                <span>
                    <input type="text" id="searchCompanyInput" placeholder="請輸入關鍵字" v-on:keyup.enter="selectCompany" onfocus="this.select();">
                    <input type="button" class="button buttonColor1" id="searchCompanyButton" @click="selectCompany">
                </span>
                <div v-if="hasData.data">
                    <table>
                        <tr>
                            <td v-for="item in hasData.title">{{item}}</td>
                        </tr>
                        <tr v-for="item in hasData.data" :data-type="item[2] =='未申報' ? false : true" :data-name="item[0] + ' ' + item[1]+ ' ' + item[2]">
                            <td v-for="item1 in item">{{item1}}</td>
                        </tr>
                    </table>

                </div>
                
            </div>
        </div>
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


    const apiRequest = ref({
        year: userStore.searchYear,
    });

    const hasData = ref("");
    hasData.data=[];
    console.log(hasData.data.length)

    onMounted(()=>{
        if(!userStore.uid){
            router.push("/HomeView");
            alert("請登入帳號!");
        };

        if( userStore.uidType == 'user' && userStore.searchYear){
            send();
        };

        if( userStore.uidType == 'monitor' && userStore.searchYear && userStore.companyId){
            send();
        };
    })

    const send = function() {
        // Nick
        (async() => {
            hasData.value = await APICollection.QueryReportStatus(apiRequest);
            console.log(hasData.value)
        })().catch(err=>{
            alert(err.resultMessage);
        });

    };

    const selectCompany = () => {

        var css = "";
        let style = document.querySelector("#queryInfo style");
        if(!document.querySelector("#queryInfo style")){
            style = document.createElement("style");
            queryInfo.appendChild(style);
        }else{
            style = document.querySelector("#queryInfo style");
        };

        if(searchCompanyInput.value != ""){
            css = "#queryInfo tr[data-name]:not([data-name*='" + searchCompanyInput.value + "']){display:none;}";
        };

        style.innerHTML = css;

        if(document.querySelector("#queryInfo table").clientHeight == 36){
            queryInfo.dataset.status = "noData";
        }else{
            queryInfo.dataset.status = "";
        };

    };

</script>
<style lang="scss" scoped>

    #esgComparison {
        margin: 0 20px 20px;

        

        .title:not(:has(+ #issue)){
            max-width:100%;
        }

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
                margin-top:20px;
                margin-bottom: 40px;

                > span > div{
                    color:#808080;
                    margin-bottom: 4px;
                }

                #company{
                    width:100px;
                    margin-right: 8px;
                    
                }

                #companyNumber + span #searchInput{
                    width:150px;
                    margin-right:8px;
                    border-radius: 3px;
                }

                #companyNumber + span #searchInput + #searchButton{
                    border-radius: 3px;
                }

                #searchInput,
                #company{
                    height: 44px;
                    border: 1px solid #dfdfdf;
                    padding: 0 10px;
                    box-sizing: border-box;
                    font-size: 16px;
                    background: #efefef;

                    &::placeholder {
                        color: #aaa
                    }
                }

                #searchInput {
                    width: 400px;
                    border-radius: 3px 0 0 3px;
                }

                #searchButton {
                    width: 44px;
                    height: 44px;
                    background-image: url(/src/assets/images/search.svg);
                    background-position:center;
                    background-repeat:no-repeat;
                    border-radius: 0 3px 3px 0;
                    margin:0;
                    vertical-align: top;
                }
            }

            #queryInfo {
                display:none;

                &:has( > div){display:inherit;}

                &[data-status="noData"] table{
                    display: none;
                };

                &[data-status="noData"]:after{
                    content:"無資料";
                    display: block;
                    padding:20px;
                    text-align: center;
                    border:1px solid  #efefef;
                    background:#fefefe;
                    border-radius: 3px;
                }

                table{
                    background: #ccc;
                    border-spacing: 1px;
                    width:100%;

                    td{
                        background: #fff;
                        padding:5px 10px;
                    }

                    tr[data-type="true"] td{
                        color: #37D880;
                    }

                    tr[data-type="false"] td{
                        color: #888;
                    }

                    tr:first-of-type td{
                        background: #37D880;
                        color: #fff;
                    }

                    
                }

                #searchCompanyInput{
                    border-radius: 3px 0 0 3px;
                    border:1px solid #dfdfdf;
                }

                #searchCompanyButton{
                    width: 40px;
                    height: 40px;
                    background-image: url(/src/assets/images/search.svg);
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 0 3px 3px 0;
                    margin: 0 0 20px 0;
                    vertical-align: top;
                }

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