<template>
  <div class="body">
    <CommonHeaderContainer/>
    <HelloWorld msg="Vite + Vue" />
    <CommonFooterContainer/>
  </div>
</template>
<script setup>
import HelloWorld from './components/HelloWorld.vue';
import CommonHeaderContainer  from './components/CommonHeaderContainer.vue';
import CommonFooterContainer  from './components/CommonFooterContainer.vue';
</script>
<style lang="scss">
@font-face {
  font-family: 'NotoSans';
  src: url(../assets/font/NotoSansTC-Regular.otf)format('opentype');
}
.body{
  font-family: NotoSans;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
