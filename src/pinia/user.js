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

  return {
    uid,
    uidCode,

    setUser,
    returnUser
  };
},
{
  persist: true,
  storage: sessionStorage,
});
