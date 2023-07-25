<template>
  <div class="body" v-if="route.path !== '/HomeView'">
    <CommonHeaderContainer/>
    <div v-if="route.path !== '/'" id="bread-crumbs">
      申請作業 /
      <span id="bread-last">{{ route.name }}</span>
    </div>
    <img v-if="route.path === '/'" src="./assets/images/index.png" alt="">
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
#bread-crumbs{
  max-width: 960px;
  margin: 20px auto 0 auto;
  #bread-last{
    color: #37D880;
  }
}
</style>
