<template>
  <header>
    <div id="header-top">
      <div id="header-logo">
        <img class="w-100" src="../assets/ESG/Home_img/Homepage_logo.png" alt="">
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
            <svg v-if="mainLink.children" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9.5L11.7778 14.5L18 9.5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div
            class="dropdown"
            :class="{'show': mainLinkIndex === isLinkShow}"
            v-if="mainLink.children"
            >
              <template
              v-for="(subLink, subLinkIndex) in mainLink.children"
              :key="subLink"
              >
                <div class="sub-link">
                  {{ subLink }}
                </div>
                <div class="line" v-if="subLinkIndex < mainLink.children.length - 1"></div>
              </template>
            </div>
          </div>
          <div v-if="mainLinkIndex < linkGroup.length - 1" class="gap-line"></div>
        </template>
      </div>
      <router-link to="HomeView">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20.4141" r="13.4" fill="#808080" stroke="#808080" stroke-width="1.2"/>
          <path d="M13.75 27.9141C13.75 27.9141 12.5 27.9141 12.5 26.6641C12.5 25.4141 13.75 21.6641 20 21.6641C26.25 21.6641 27.5 25.4141 27.5 26.6641C27.5 27.9141 26.25 27.9141 26.25 27.9141H13.75ZM20 20.4141C20.9946 20.4141 21.9484 20.019 22.6517 19.3157C23.3549 18.6125 23.75 17.6586 23.75 16.6641C23.75 15.6695 23.3549 14.7157 22.6517 14.0124C21.9484 13.3092 20.9946 12.9141 20 12.9141C19.0054 12.9141 18.0516 13.3092 17.3483 14.0124C16.6451 14.7157 16.25 15.6695 16.25 16.6641C16.25 17.6586 16.6451 18.6125 17.3483 19.3157C18.0516 20.019 19.0054 20.4141 20 20.4141Z" fill="white"/>
        </svg>
      </router-link>
    </div>
    <div id="header-bottom">
      <router-link to="searchYearInfo" id="esg-declare" class="pointer">
        <span>ESG資料申報</span>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18L15 12.2222L10 6" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
      <router-link to="searchYearInfo" id="sustainable-declare" class="pointer">
        <span>永續報告書申報</span>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18L15 12.2222L10 6" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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
      '模組管理',
      '監控單位建立',
      '系統參數維護'
    ]
  },
  {
    name: '帳號與權限',
    children: [
      '監控單位使用者建立',
      '申報單位權限設定',
    ]
  },
  {
    name: '指標維護',
    children: [
      '證交所核心指標設定',
      '國際準則指標設定',
      'ESG資訊矩陣設定',
    ]
  },
  {
    name: '申報管理',
    children: [
      '更正審核作業',
      '申報情形控管表',
    ]
  },
  {
    name: '申報作業',
    children: [
      'ESG資料申報',
      '永續報告書套表',
      '永續報告書申報',
      '申請資料更正',
    ]
  },
  {
    name: 'ESG資訊下載',
  }
]);
const isLinkShow = ref(-1);
const showLink = function(i){
  if(i === isLinkShow.value){
    isLinkShow.value = -1;
  } else {
    isLinkShow.value = i;
  }
}
</script>
<style lang="scss" scoped>
// common setting
p{
  margin: 0;
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
    #header-links{
      display: flex;
      align-items: center;
      .main-link{
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 18px 30px;
        position: relative;
        path{
          stroke: #272727;
        }
        &.selected{
          color: #37D880;
          path{
            stroke: #37D880;
          }
        }
        .dropdown{
          display: none;
          position: absolute;
          top: calc(100% + 1px);
          left: 50%;
          width: 100%;
          background: #fff;
          border: 1px solid #ddd;
          transform: translate(-50%, 0%);
          &.show{
            display: block;
          }
          .sub-link{
            padding: 12px 16px;
            color: #272727;
          }
          .line{
            width: 100%;
            height: 1px;
            background: #eee;
          }
        }
      }
      .gap-line{
        display: inline-block;
        height: 24px;
        width: 1px;
        background: #BEBEBE;
      }
    }
  }
  #header-bottom{
    display: flex;
    #esg-declare{
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      background: #37D880;
      padding: 18px 0;
    }
    #sustainable-declare{
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      background: #1D8844;
      padding: 18px 0;
    }
  }
}
</style>