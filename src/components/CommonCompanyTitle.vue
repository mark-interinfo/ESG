<template>
    <span>
        <h1 v-if="pathName1.includes(route.path)">{{year + route.name}}</h1>
        <h1 v-else>{{route.name}}</h1>
        <span v-if="pathName2.includes(route.path)" class="companyInfo">
            <span>公司代號 : {{ companyId }}</span>
            <span>公司名稱 : {{ companyName }}</span>
        </span>
    </span>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../pinia/user.js';

const userStore = useUserStore();

const route = useRoute();
const pathName1 = ref(["/EditEsgInfo","/ApplyEsgInfo","/LookEsgInfo"]);
const pathName2 = ref(["/EditEsgInfo","/ApplyEsgInfo","/SearchYearInfo","/EsgTemplate","/XbrlDownload"]);


const companyId = userStore.companyId;
const companyName = userStore.companyName;

</script>
<style lang="scss" scoped>

    .companyInfo > span + span{
        margin-left:15px;
    }
    #company {

        h1 {
            font-size: 24px;
            font-weight: inherit;
            display: block;
            margin:0 0 15px 0;
        }
        
        > span {
            font-size: 14px;
            margin-bottom: 15px;
            display: flex;
            
            &:before {
                content: "";
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url(/src/assets/images/company.svg) center / cover;
                vertical-align: bottom;
            }

            > span:first-of-type {
                border-right: 1px solid #aaa;                
            }
        }

        > span > span {
            padding: 0 10px;
        }

    }
</style>