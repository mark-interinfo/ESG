<template>
    <div id="esgInfoContent">
        <div>
            <h1>查閱年度資料</h1>
            <span id="company">
                <span>公司代號 : 0714</span>
                <span>公司名稱 : 英特內股份有限公司</span>
            </span>
            <span id="buttonBox">
                <input class="button buttonColor3" id="inner" type="button" value="匯入">
                <input class="button buttonColor3" id="inner" type="button" value="AI智能輸入">
                <input class="button buttonColor1" id="submit" type="button" value="送出">
            </span>
        </div>
        <span>
            <EsgExposeInfo/>
        </span>
    </div>
</template>
<script setup>
import EsgExposeInfo from "../views/EsgExposeInfo.vue";
</script>
