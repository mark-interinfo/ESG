<template>
    <div id="IndexView"></div>
</template>


<script setup>
    import {reactive} from "vue";
    const style = reactive({
        width : "100%",
        name : "body"
    })
</script>

<style lang="scss" scoped>
    #IndexView{
        background:url(../assets/images/index.png)right center/auto 100% no-repeat,url(../assets/images/index-1.png)left center/auto 100%;
        height:calc(100vh - 356px);
    }
</style>