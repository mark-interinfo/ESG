<template>
  <div class="body" v-if="route.path !== '/HomeView'">
    <CommonHeaderContainer/>
    <router-view/>
    <CommonFooterContainer/>
  </div>
  <router-view v-else/>
</template>
<script setup>
import CommonHeaderContainer  from './components/CommonHeaderContainer.vue';
import CommonFooterContainer  from './components/CommonFooterContainer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
<style lang="scss">
@font-face {
  font-family: 'NotoSans';
  src: url(/src/assets/font/NotoSansTC-Regular.otf)format('opentype');
}
.body{
  font-family: NotoSans;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
