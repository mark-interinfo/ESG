<template>
  <header>
    <div id="header-top">
      <div id="header-logo">
        <img class="w-100" src="../assets/ESG/Home_img/Homepage_logo.png" alt="">
      </div>
      <div id="header-search">
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9519 23.264L18.758 18.07C19.564 17.028 19.9999 15.754 19.9999 14.414C19.9999 12.81 19.374 11.306 18.242 10.1721C17.11 9.03806 15.602 8.41406 14 8.41406C12.398 8.41406 10.89 9.04006 9.75799 10.1721C8.624 11.304 8 12.81 8 14.414C8 16.016 8.626 17.524 9.75799 18.656C10.89 19.79 12.396 20.414 14 20.414C15.34 20.414 16.612 19.978 17.654 19.174L22.8479 24.366C22.8632 24.3812 22.8812 24.3933 22.9012 24.4016C22.9211 24.4098 22.9424 24.4141 22.9639 24.4141C22.9855 24.4141 23.0068 24.4098 23.0267 24.4016C23.0466 24.3933 23.0647 24.3812 23.0799 24.366L23.9519 23.496C23.9672 23.4808 23.9793 23.4627 23.9875 23.4428C23.9958 23.4229 24 23.4015 24 23.38C24 23.3585 23.9958 23.3371 23.9875 23.3172C23.9793 23.2973 23.9672 23.2792 23.9519 23.264ZM17.168 17.582C16.32 18.428 15.196 18.894 14 18.894C12.804 18.894 11.68 18.428 10.832 17.582C9.98599 16.734 9.51999 15.61 9.51999 14.414C9.51999 13.218 9.98599 12.092 10.832 11.2461C11.68 10.4001 12.804 9.93406 14 9.93406C15.196 9.93406 16.322 10.3981 17.168 11.2461C18.014 12.094 18.48 13.218 18.48 14.414C18.48 15.61 18.014 16.736 17.168 17.582Z" fill="#37D880"/>
        </svg>
        <input type="text" placeholder="輸入關鍵字">
      </div>
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
      <div id="sustainable-declare" class="pointer">
        <span>永續報告書申報</span>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18L15 12.2222L10 6" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div id="bread-crumbs">
      首頁 / 申請作業 / ESG資料申請
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
      input{
        border: 0px;
        font-size: 16px;
        color: #BEBEBE;
        &:focus{
          border: 0px;
          outline: none;
        }
      }
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
    color: #fff;
    margin-bottom: 20px;
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
  #bread-crumbs{
    max-width: 960px;
    margin: 0 auto;
  }
}
</style>