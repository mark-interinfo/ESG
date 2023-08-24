<template>
    <div id="EsgTemplate">
        <div class="content">
            <CommonCompanyTitle/>
            <div id="selectYear">
                <span>選擇年度</span>
                <select>
                    <option>112永續報告書</option>
                </select>
            </div>
            <div id="template">
                <div>
                    <div>
                        <span>
                            <input type="radio" value="a" v-model="templateSelected">
                            <span>模板A</span>
                        </span>
                        <img @click="openDialog('img')" src="../assets/images/template1.jpg">
                    </div>
                </div>
                <div>
                    <div>
                        <span>
                            <input type="radio" value="b" v-model="templateSelected">
                            <span>模板B</span>
                        </span>
                        <img @click="openDialog('img')" src="../assets/images/template2.jpg">
                    </div>
                </div>
            </div>
            <div id="apply" @click="openDialog('loadingFile')" >
                <input type="button" class="button buttonColor1" value="套用模板">
            </div>
        </div>
        <CommonDialogComponent
        :isShowDialog="isShowDialog"
        :dailogType="dailogType"
        :downloadHref="downloadHref"
        @closeDialog="closeDialog"
        />
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
    import CommonDialogComponent from '../components/CommonDialogComponent.vue';
    import { useUserStore } from "../pinia/user.js";
    import { APICollection } from "../mixin/api.js";

    const userStore = useUserStore();

    const dailogType = ref();
    const isShowDialog = ref(false);

    const templateSelected = ref('');
    const downloadHref = ref('');
    const openDialog = async function(value){
        isShowDialog.value = true;
        dailogType.value = value;
        if(value == "loadingFile"){
            downloadFile();
        }
    };
    const closeDialog = function(){
        isShowDialog.value = false;
    };

    const downloadFile = async function(){
        let downloadMsg = '';
        if(templateSelected.value === ''){
            alert('必須選擇模板');
            return;
        }
        downloadMsg = await APICollection.DownloadSustainability({
            companyId: userStore.companyId,
            year: userStore.searchYear,
            template: templateSelected.value,
        });
        if(downloadMsg.href){
            downloadHref.value = downloadMsg.href;
            dailogType.value = 'download';
        }
    };

</script>
<style lang="scss" scoped>

    .content{
        width:880px;
        margin:0 auto 20px;
        padding:20px 40px;
        box-shadow: 0 5px 5px rgba(0,0,0,.2);
    }

    #selectYear{
        margin-top:10px;
        > span{vertical-align: middle;margin-right:20px;}

    }
    #template{
        > div{
            margin:10px 0;

            img{
                width:100%;
                cursor: pointer;
            }

            > div > span{
                margin:10px 0;

                > span{
                    margin-left:10px;
                }

                > *{vertical-align: middle;}
            }
        }
    }
    #apply{text-align: right;}
</style>