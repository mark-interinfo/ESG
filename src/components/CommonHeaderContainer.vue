<template>
  <header>
    <div id="header-top">
      <div id="header-logo">
        <router-link to="/">
          <img class="w-100" src="../assets/ESG/Home_img/Homepage_logo.png">
        </router-link>
      </div>
      <input id="header-search" type="text" placeholder="輸入關鍵字">
    </div>
    <div id="header-middle">
      <div id="header-links">
        <template v-for="(mainLink, mainLinkIndex) in linkGroup" :key="mainLink.name">
          <div
          class="main-link pointer"
          @click="showLink(mainLinkIndex)"
          :class="{'selected': mainLinkIndex === isLinkShow}"
          >
            <span>
              {{ mainLink.name }}
            </span>
            <div class="arrow"></div>
            <div
            class="dropdown"
            v-if="mainLink.children"
            >
              <template
              v-for="subLink in mainLink.children"
              :key="subLink"
              >
                <router-link
                class="sub-link"
                :to="subLink.href"
                >
                  {{ subLink.name }}
                </router-link>
              </template>
            </div>
          </div>
        </template>
        <router-link
        class="main-link pointer color-black"
        to="/EsgDownload"
        @click="showLink(-1)"
        >
          ESG資訊下載
        </router-link>
      </div>
      <router-link to="/HomeView">
        <img src="../assets/images/account1.svg" alt="">
      </router-link>
    </div>
    <div id="header-bottom">
      <router-link
      id="esg-declare" class="pointer"
      to="/SearchYearInfo"
      @click="showLink(-1)"
      >
        <span>ESG資料申報</span>
        <img src="../assets/images/arrow-white.svg" alt="">
      </router-link>
      <router-link
      id="sustainable-declare" class="pointer"
      to="/SearchYearInfo"
      @click="showLink(-1)"
      >
        <span>永續報告書申報</span>
        <img src="../assets/images/arrow-white.svg" alt="">
      </router-link>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';

const linkGroup = ref([
  {
    name: '系統管理',
    children: [
      {
        name: '模組管理',
        href: '/'
      },
      {
        name: '監控單位建立',
        href: '/'
      },
      {
        name: '系統參數維護',
        href: '/'
      },
    ]
  },
  {
    name: '帳號與權限',
    children: [
      {
        name: '監控單位使用者建立',
        href: '/'
      },
      {
        name: '申報單位權限設定',
        href: '/'
      },
    ]
  },
  {
    name: '指標維護',
    children: [
      {
        name: '證交所核心指標設定',
        href: '/ExchangeIndicators'
      },
      {
        name: '國際準則指標設定',
        href: '/InternationalIndicators'
      },
      {
        name: 'ESG資訊矩陣設定',
        href: '/EsgMatrix'
      }
    ],
  },
  {
    name: '申報管理',
    children: [
      {
        name: '更正審核作業',
        href: '/'
      },
      {
        name: '申報情形控管表',
        href: '/'
      }
    ]
  },
  {
    name: '申報作業',
    children: [
      {
        name: 'ESG資料申報',
        href: '/'
      },
      // Nav申報作業 項目順序 套表在第二項
      {
        name: '永續報告書套表',
        href: '/EsgTemplate'
      },
      {
        name: '永續報告書申報',
        href: '/'
      },
      {
        name: '申請資料更正',
        href: '/'
      },
    ]
  },
]);
const isLinkShow = ref(-1);
const showLink = function(targetIndex){
  if(targetIndex === isLinkShow.value){
    isLinkShow.value = -1;
  } else {
    isLinkShow.value = targetIndex;
  }
}
</script>
<style lang="scss" scoped>
// common setting
p{
  margin: 0;
}
.color-black{
  color: #272727;
}
.w-100{
  width: 100%;
}
.pointer{
  cursor: pointer;
}
// page setting
header{
  #header-top{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 20px 60px;
    #header-logo{
      width: 284px;
    }
    #header-search{
      display: flex;
      align-items: center;
      width: 240px;
      height: 48px;
      border: 1px solid #EFEFEF;
      color: #BEBEBE;
      padding: 0px 12px;
      font-size: 16px;
      border-radius: 3px;
      padding-left:40px;
      background: url(/src/assets/images/search1.svg) left center/auto 100% no-repeat;
      transition: .3s;

      &:focus{padding:0 12px;background:#fff;}

    }
  }
  #header-middle{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    // nav少上方線
    border-top: 1px solid #EFEFEF;
    #header-links{
      display: block;

      a.main-link{
        color:#272727;
      }

      .main-link{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        gap: 4px;
        padding: 18px 30px;
        color: #37D880;
        transition: .3s;
        user-select: none;

        &.selected{
          color: #272727;
          background: #fafafa;
          .arrow{
            background: url("../assets/images/arrow-black.svg");
          }
          .dropdown{
            visibility:inherit;
            opacity: 1;
          }
        }

        .arrow{
          width: 25px;
          height: 25px;
          background: url("../assets/images/arrow-green.svg");
          display: inline-block;
          vertical-align: middle;
        }
        +.main-link:before{
          content: "";
          position: absolute;
          left: 0;
          height: 24px;
          width: 1px;
          background: #efefef;
        }
        .dropdown{
          visibility: hidden;
          position: absolute;
          top: calc(100% + 1px);
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 1;
          background: #fff;
          border: 1px solid #ddd;
          transition: .3s;
          opacity: 0;
          .sub-link{
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            padding: 12px 16px;
            color: #272727;
            white-space: nowrap;
            width: 100%;
            white-space: nowrap;

            &:hover{
              background:#fafafa;
            }

            +.sub-link::before{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background: #eee;
            }
          }
        }
      }
    }
  }
  #header-bottom{
    display: flex;

    > a {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #esg-declare{
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      background: #37D880;
    }
    #sustainable-declare{
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      background: #1D8844;
    }
  }
}
</style>