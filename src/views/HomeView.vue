<template>
    <div id="login">
        <div>
            <img id="logo" src="../assets/ESG/Login_img/Login_title.png" @click="">
            <form id="form">
                <div class="id">
                    <div>帳號</div>
                    <input type="text" id="id" name="id" placeholder="帳號為SLL"
                    v-model="accountData.uid"
                    >
                </div>
                <div class="pw">
                    <div>密碼</div>
                    <input type="password" id="pw" name="pw" placeholder="請輸入8碼英數字"
                    v-model="accountData.mima"
                    >
                    <span
                    id="passwordCheckButton"
                    @click="passwordCheck"
                    >
                    </span>
                </div>
                <div class="verify">
                    <div>驗證碼</div>
                    <span id="verifyInput">
                        <input type="password" id="verify" name="verify" placeholder="00000000">
                    </span>
                    <span id="verifyBlock">
                        <span id="verifyImg"></span>
                        <span id="verifyChange"></span>
                    </span>
                </div>
                <div
                class="submit"
                @click="login"
                >
                    <router-link to="/">
                        <input
                        type="button"
                        value="登入"
                        class="button buttonColor1"
                        >
                    </router-link>
                </div>
                <div class="forget">
                    <a href="javascript:;">忘記密碼?</a>
                </div>
            </form>
        </div>
        <!-- <CommonDialogSelecterComponent
        :isShowDialog="true"
        :selectMulti="false"
        /> -->
    </div>
</template>
<script setup>
import { ref } from 'vue';

import { APICollection } from '../mixin/api.js';
import { useUserStore } from '../pinia/user.js';

import CommonDialogSelecterComponent from '../components/CommonDialogSelecterComponent.vue';

const userStore = useUserStore();

const accountData = ref({
    uid: "",
    mima: ""
});

const login = function(){
    (async() => {
        userStore.setUser(await APICollection.ESGLogin(accountData));
    })()
}

const passwordCheck = function(){

    passwordCheckButton.classList.toggle("show");

    if(passwordCheckButton.getAttribute("class").match("show")){
        pw.type = "text";
    }else{
        pw.type = "password";
    };
};
</script>
<style lang="scss" scoped>

    #login {
        height: 100vh;
        
        display: flex;
        background: url(../assets/images/login.png) left bottom/35% auto no-repeat;
        justify-content: right;

        > div {display: flex;justify-content: center;width: 65vw;align-items: center;flex-direction: column;}
        
        #logo {width: 30%;}
        input:not([type="button"]){background:#efefef;border:1px solid #efefef;height:48px;border-radius:3px;width: 100%;padding:0 10px;}
        input::placeholder{font-size:16px;color:#aaa;}

        #form{width:40%;
            > div{
                margin-top: 4%;

                > div{
                    margin-bottom:2%;

                    &:before{content:"";width: 20px;height: 20px;display: inline-block;vertical-align: bottom;margin-right:5px;}
                }

                > span{display:inline-block;height: 48px;vertical-align: middle;}
            }
            .id > div:before{background:url(../assets/images/account.svg) center / cover;}
        
            .pw > div:before{background:url(../assets/images/password.svg) center / cover;}
            
            .verify{
                
                > div:before{background:url(../assets/images/verify.svg) center / cover;}
                
                #verifyBlock{border:1px solid #efefef;box-sizing:border-box;border-radius: 5px;width: calc(50% - 15px);margin-left: 15px;}
                #verifyInput{width: 50%;}
                #verifyImg{background: url(../assets/images/verify.png)center / 100% auto no-repeat #efefef;height: 100%;display: inline-block;width: calc(100% - 52px);}
                #verifyChange{display:inline-block;height:100%;width: 48px;background: url(../assets/images/again.svg) center / 60% no-repeat;}
            }

            .submit input{width:100%;}
            
            .forget{
                text-align:center;
                margin-top: 3%;
                a{
                    color:#333;
                    text-decoration: underline;
                }
            }

            .pw{
                position: relative;
            }

            
            
            #passwordCheckButton{
                width:30px;
                height:30px;
                position: absolute;
                right:9px;
                bottom:9px;
                background:url("../assets/images/eye.svg")center/cover no-repeat;
                transition: .3s;
                cursor: pointer;

                &.show{
                    background:url("../assets/images/eye1.svg")center/cover no-repeat;
                }
            }
        }
    }

</style> 