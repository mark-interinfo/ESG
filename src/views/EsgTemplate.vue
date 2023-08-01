<template>
    <div id="EsgTemplate" class="content">
        <div>
            <CommonCompanyTitle/>
            <div id="selectYear">
                <span>選擇年度</span>
                <select>
                    <option>110永續報告書</option>
                </select>
            </div>
            <div id="template">
                <div>
                    <div>
                        <span>
                            <input type="radio" name="a">
                            <span>模板A</span>
                        </span>
                        <img @click="openDialog('img')" src="../assets/images/template1.png">
                    </div>
                </div>
                <div>
                    <div>
                        <span>
                            <input type="radio" name="a">
                            <span>模板B</span>
                        </span>
                        <img @click="openDialog('img')" src="../assets/images/template2.png">
                    </div>
                </div>
            </div>
            <div id="apply" @click="openDialog('loadingFile')" >
                <input type="button" class="button buttonColor1" value="套用模板">
            </div>
            
        </div>

        <CommonDialogComponent
        :isShowDialog="isShowDialog"
        :dailogType = "type"
        @closeDialog="closeDialog"
        />

    </div>

</template>
<style lang="scss" scoped>
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

<script setup>
    import { ref } from 'vue';
    import CommonCompanyTitle from "../components/CommonCompanyTitle.vue";
    import CommonDialogComponent from '../components/CommonDialogComponent.vue';
    const type = ref();
    const isShowDialog = ref(false);
    const openDialog = function(value){
        isShowDialog.value = true;
        type.value = value;

        if(value == "loadingFile"){
            setTimeout(function(){
                closeDialog();
            },5500);
        }
    }
    const closeDialog = function(){
        isShowDialog.value = false;
    }
</script>