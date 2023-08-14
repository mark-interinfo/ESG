import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const uid = ref('');
  const uidCode = ref('');
  const uidName = ref('');

  const setUser = function(data){
    uid.value = data.uid;
    uidCode.value = data.uidCode;
    uidName.value = data.uidName;
  };
  const setUserByStorage = function(){
    // 上線使用
    // if(window.location.href === 'https://twse.interinfo.com.tw/server-java/loginTse'){
    if(sessionStorage.getItem('uid')){
      let data = {
        uid: sessionStorage.getItem('uid'),
        uidCode: sessionStorage.getItem('uidCode'),
        uidName: sessionStorage.getItem('uidName'),
      }
      setUser(data);
    }
  }
  const returnUser = function(){
    return {
      uid: uid.value,
      uidCode: uidCode.value
    };
  };

  const searchYear = ref('');
  const getYear = function(){
    return searchYear.value
  }
  const setYear = function(year){
    searchYear.value = year
  }

  return {
    uid,
    uidCode,
    uidName,

    setUser,
    setUserByStorage,
    returnUser,

    searchYear,
    getYear,
    setYear,
  };
},
{
  persist: true,
  storage: sessionStorage,
});
