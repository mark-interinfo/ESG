<template>
    <span id="company">
        <h1>{{route.name}}</h1>
        <span v-if="pathName.includes(route.path)">
            <!-- 代號改1532 公司名稱 勤美 -->
            <span>公司代號 : 1532</span>
            <span>公司名稱 : 勤美</span>
        </span>
    </span>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const pathName = ref(["/EditEsgInfo","/ApplyEsgInfo","/SearchYearInfo","/EsgTemplate"]);
</script>
<style lang="scss" scoped>
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