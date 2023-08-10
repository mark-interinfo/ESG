import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const uid = ref('');
  const uidCode = ref('');

  const setUser = function(data){
    uid.value = data.uid;
    uidCode.value = data.uidCode;
  };

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

    setUser,
    returnUser,
    getYear,
    setYear
  };
},
{
  persist: true,
  storage: sessionStorage,
});
