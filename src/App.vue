<template>
  <div class="body" ref="bodyRef" @scroll="scroll($event)">
    <CommonHeaderContainer  v-if="route.path !== '/HomeView'"/>
    <section>
      <div id="bread-crumbs"  v-if="!['/','/HomeView'].includes(route.path)">
        <!-- 麵包屑少首頁 -->
        <span>首頁</span>
        /
        <span>{{ pageName[route.path] }}</span>
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
import { ref} from 'vue';
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

const pageName = ref({
  '/ExchangeIndicators': '指標維護',
  '/InternationalIndicators': '指標維護',
  '/EsgMatrix': '指標維護',
  '/SearchYearInfo': '申報作業',
  '/EsgReport': '申報管理',
  '/EsgTemplate': '申報作業',
  '/LookEsgInfo': '申報作業',
  '/EsgComparison': '申報管理',
  '/EditEsgInfo': '申報作業',
});
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