<template>
  <div class="body" ref="bodyRef" @scroll="scroll($event)">
    <CommonHeaderContainer  v-if="route.path !== '/HomeView'"/>
    <section>
      <div id="bread-crumbs"  v-if="!['/','/HomeView'].includes(route.path)">
        <!-- 麵包屑少首頁 -->
        <span>首頁</span>
        /
        <span>申請作業</span>
        /
        <span id="bread-last">{{ route.name }}</span>
      </div>
      <router-view/>
    </section>
    <CommonFooterContainer
    v-if="route.path !== '/HomeView'"
    :toTopDistance="toTopDistance"
    @scrollToTop="scrollToTop"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import CommonFooterContainer  from './components/CommonFooterContainer.vue';
import CommonHeaderContainer  from './components/CommonHeaderContainer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const bodyRef = ref(null);
const toTopDistance = ref(0);
const scroll = function(e){
  toTopDistance.value = e.target.scrollTop;
}
const scrollToTop = function(){
  bodyRef.value.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

</script>
<style lang="scss">
@font-face {
  font-family: 'NotoSans';
  src: url(/src/assets/font/NotoSansTC-Regular.otf)format('opentype');
}
.body{
  overflow: auto;
  height: 100vh;
}
#bread-crumbs{
  max-width: 100%;
  margin: 0 auto;
  padding:20px 0;
  font-size: 14px;
  width: 960px;
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