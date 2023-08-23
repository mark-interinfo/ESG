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
    data.uid && (uid.value = data.uid);
    data.uidCode && (uidCode.value = data.uidCode);
    data.uidType && (uidType.value = data.uidType);

    data.companyFitCode && (companyFitCode.value = data.companyFitCode);
    data.companyId && (companyId.value = data.companyId);
    data.companyName && (companyName.value = data.companyName);
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
