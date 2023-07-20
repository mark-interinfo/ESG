<template>
    <div id="login">
        <div>
            <img id="logo" src="img/img_logo.svg">
            <form id="form">
                <div class="id">
                    <div>帳號</div>
                    <input type="text" id="id" name="id" placeholder="帳號為SLL">
                </div>
                <div class="pw">
                    <div>密碼</div>
                    <input type="password" id="pw" name="pw" placeholder="請輸入8碼英數字">
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
                <div class="submit">
                    <input type="submit" value="登入">
                </div>
                <div class="forget">
                    <a href="javascript:;">忘記密碼?</a>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    #login {
        
        display: flex;background: url(img/img_login.png) left bottom/35% auto no-repeat;justify-content: right;

        > div {display: flex;justify-content: center;width: 65vw;align-items: center;flex-direction: column;}
        
        #logo {width: 30%;}
        input{background:#efefef;border:none;height:48px;border-radius:5px;width: calc(100% - 20px);padding:0 10px;}
        input::placeholder{font-size:16px;color:#aaa;}

        #form{width:40%;
            > div{
                margin-top: 4%;

                > div{
                    margin-bottom:2%;font-weight: bold;
                    &:before{content:"";width: 24px;height: 24px;display: inline-block;vertical-align: bottom;margin-right:5px;}
                }

                > span{display:inline-block;height: 48px;vertical-align: middle;}
            }
            .id > div:before{background:url(img/Icon_account.svg) center / cover;}
        
            .pw > div:before{background:url(img/Icon_password.svg) center / cover;}
            
            .verify{
                
                > div:before{background:url(img/icon_verify.svg) center / cover;}
                
                #verifyBlock{border:1px solid #efefef;box-sizing:border-box;border-radius: 5px;width: calc(45% - 20px);margin-left: 15px;}
                #verifyInput{width: 55%;}
                #verifyImg{background: url(img/verify.png)center / auto no-repeat #efefef;height: 100%;display: inline-block;width: calc(100% - 52px);}
                #verifyChange{display:inline-block;height:100%;width: 48px;background: url(img/icon_again.svg) center / 60% no-repeat;}
            }
            
            .submit{
                margin-top: 7%;
                input{background:#37D880;width: 100%;color: #fff;font-size: 16px;}
            }

            .forget{
                text-align:center;margin-top: 3%;
                a{color:#333;}
            }
        }
    }

</style> 