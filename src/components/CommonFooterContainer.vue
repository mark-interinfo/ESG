<template>
  <footer>
    <div id="footer-name">
      <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30.5" r="29.5" fill="white" stroke="#37D880"/>
        <path d="M21.3143 14.2784L23.6857 13.5641C24.7652 13.2384 25.9264 13.3167 26.9524 13.7844C27.9784 14.252 28.7992 15.0771 29.2615 16.1055L30.7372 19.3884C31.1348 20.2728 31.2456 21.2594 31.0539 22.21C30.8623 23.1605 30.3779 24.0272 29.6686 24.6884L27.09 27.0927C27.0582 27.1224 27.032 27.1578 27.0129 27.197C26.7429 27.7484 27.1529 29.2212 28.4372 31.447C29.8857 33.9555 31.0043 34.947 31.5229 34.7941L34.9072 33.7584C35.834 33.4754 36.8262 33.4894 37.7446 33.7987C38.663 34.1079 39.4617 34.6967 40.0286 35.4827L42.1257 38.387C42.7841 39.2989 43.0891 40.4188 42.984 41.5386C42.8789 42.6584 42.3709 43.702 41.5543 44.4755L39.75 46.1827C39.1226 46.777 38.3607 47.2107 37.5294 47.4468C36.698 47.6828 35.8219 47.7143 34.9757 47.5384C29.9515 46.4927 25.45 42.447 21.4329 35.4898C17.4143 28.5284 16.1615 22.5998 17.7757 17.7241C18.046 16.9078 18.5087 16.1686 19.1249 15.5688C19.741 14.9691 20.491 14.5265 21.3143 14.2784ZM21.9343 16.3298C21.4403 16.4786 20.9894 16.7441 20.6197 17.1039C20.2499 17.4637 19.9722 17.9072 19.81 18.397C18.4186 22.5984 19.5457 27.9355 23.2886 34.4184C27.0286 40.897 31.0829 44.5398 35.4115 45.4398C35.9194 45.5454 36.4453 45.5265 36.9444 45.3847C37.4434 45.2429 37.9007 44.9824 38.2772 44.6255L40.08 42.9198C40.5199 42.5034 40.7936 41.9415 40.8504 41.3385C40.9071 40.7355 40.743 40.1324 40.3886 39.6412L38.2915 36.7355C37.9862 36.3124 37.5563 35.9954 37.0619 35.8289C36.5674 35.6624 36.0333 35.6547 35.5343 35.807L32.1415 36.8455C30.2643 37.4041 28.4986 35.8398 26.5815 32.517C24.9572 29.7055 24.3943 27.6741 25.0886 26.2555C25.2229 25.9812 25.4057 25.7341 25.6286 25.5255L28.2072 23.1212C28.5892 22.7652 28.8502 22.2985 28.9535 21.7866C29.0567 21.2746 28.9971 20.7432 28.7829 20.267L27.3072 16.9855C27.0583 16.4316 26.6162 15.9872 26.0636 15.7354C25.511 15.4835 24.8857 15.4414 24.3043 15.617L21.9329 16.3312L21.9343 16.3298Z" fill="#37D880"/>
      </svg>
      <div>
        <p class="fs-20">公司治理部</p>
        <p class="fs-14">諮詢申報相關問題</p>
      </div>
    </div>
    <div id="space-line"></div>
    <div>
      <p>(02) 8101-3909</p>
      <p>(02) 8101-3789</p>
    </div>
    <div>
      <p>(02) 8101-3015</p>
      <p>(02) 8101-3167</p>
    </div>
    <div class="phone-single">
      <p>(02) 8101-3905</p>
      <p></p>
    </div>
    <div
    id="toTop"
    :class="{'show': props.toTopDistance > 100}"
    @click="scrollToTop"
    >
      <p class="center">回頂部</p>
      <img src="../assets/images/goTop.png" alt="">
    </div>
  </footer>
</template>
<script setup>
const props = defineProps({
  toTopDistance: {
    type: Number,
  }
});
const emits = defineEmits(['scrollToTop']);
const scrollToTop = function(){
  emits('scrollToTop');
}
</script>
<style lang="scss" scoped>
// common setting
p{
  margin: 0;
}
.fs-20{
  font-size: 20px;
}
.fs-14{
  font-size: 14px;
}
// page setting
footer{
  position: relative;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 120px;
  background: #fff;
  border-top: 1px solid #BEBEBE;
  #footer-name{
    display: flex;
    align-items: center;
    gap: 24px;
    svg{
      width: 40px;
      height: 40px;
    }
  }
  #space-line{
    width: 1px;
    height: 60px;
    background: #BEBEBE;
  }
  .phone-single{
    // footer border-top 0.5 (目前是1)、電話需對齊
    p{
      height:24px;
    }
  }
  #toTop{
    opacity: 0;
    position: fixed;
    right: 40px;
    bottom: 40px;
    cursor: pointer;
    transition: .3s;
    visibility: hidden;
    &.show{
      opacity: 1;
      visibility: inherit;
    }
    p{
      color: #37D880;
      margin-bottom: 8px;
    }
  }
}
</style>