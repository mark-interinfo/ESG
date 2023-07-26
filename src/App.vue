<template>
  <div class="body">
    <CommonHeaderContainer  v-if="route.path !== '/HomeView'"/>
    <div id="bread-crumbs"  v-if="['/','HomeView'].includes(route.path)">
      <span>
        申請作業
      </span>
       /
      <span id="bread-last">{{ route.name }}</span>
    </div>
<<<<<<< HEAD
    <router-view/>
    <CommonFooterContainer  v-if="route.path !== '/HomeView'"/>
=======
    <img id="home-img" v-if="route.path === '/'" src="./assets/images/index.png" alt="">
    <main>
      <router-view/>
    </main>
    <CommonFooterContainer/>
>>>>>>> 832f3e128d8fd03b6ed91a63015caab3fd3911ea
  </div>
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

#bread-crumbs{
  max-width: 960px;
  margin: 20px auto 0 auto;
  font-size: 14px;

  > span + span{
    margin-left:5px;
  }

  #bread-last{
    color: #37D880;
  }
}
#home-img{
  width: 100%;
  height: 480px;
  object-fit: cover;
}
main{
  // width: calc(100% - 40px);
  // max-width: 960px;
  // margin: 0 auto;
}
</style>
