import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const uid = ref('');
  const uidCode = ref('');
  const uidType = ref('');

  const companyFitCode = ref('');
  const companyId = ref('');
  const companyName = ref('');

  const setUser = function(data){
    uid.value = data.uid;
    uidCode.value = data.uidCode;
    uidType.value = data.uidType;

    companyFitCode.value = data.companyFitCode;
    companyId.value = data.companyId;
    companyName.value = data.companyName;
  };
  const returnUser = function(){
    return {
      uid: uid.value,
      uidCode: uidCode.value
    };
  };
  const resetUser = function(){
    uid.value = '';
    uidCode.value = '';
    uidType.value = '';

    companyFitCode.value = '';
    companyId.value = '';
    companyName.value = '';
  }

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
    uidType,
    companyFitCode,
    companyId,
    companyName,
    setUser,
    returnUser,
    resetUser,

    searchYear,
    getYear,
    setYear,
  };
},
{
  persist: true,
  storage: sessionStorage,
});
