<template>
  <div class="body">
    <CommonHeaderContainer  v-if="route.path !== '/HomeView'"/>
    <section>
      <div id="bread-crumbs"  v-if="!['/','/HomeView'].includes(route.path)">
        <span>
          申請作業
        </span>
        /
        <span id="bread-last">{{ route.name }}</span>
      </div>
      <router-view/>
    </section>
    <CommonFooterContainer  v-if="route.path !== '/HomeView'"/>
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
  width: 1000px;
  max-width: 90%;
  color:#808080;

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
</style>
