<template>
    <div class="contenedor">
        <div class="login">
            <div class="login__left">
                <div class="Text_left">
                    <div class="Your">
                        <img src="../../../assets/login/Youronlylimit.svg">
                    </div>
                    <div class="Is">
                        <img src="../../../assets/login/isyou.svg">
                    </div>
                </div>
                <div class="fondo_left">
                    <img src="../../../assets/login/login__background.png">
                </div>
            </div>
            <div class="login__right">
                <div class="Componentes">
                    
                        <span class="titulo">BOOKSTORE</span>
                    <div class="info">
                        <div class="UserName">
                            <div class="iconU">
                                <img src="../../../assets/login/icon.png">
                            </div>
                            <div>
                                <input type="text" v-model="user.username" placeholder="Username" class="text">
                            </div>
                        </div>
                        <div class="password">
                            <div class="iconP">
                                <img src="../../../assets/login/icon1.png">
                            </div>
                            <div>
                                <input type="password" v-model="user.password" placeholder="Password" class="text">
                            </div>
                        </div>
                        <button type="submit" class="loginb">
                            <span>LogIn</span>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "LogIn",
    
    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },
    
    methods: {
        processLogInUser: function(){
            axios.post(
                "https://bookstore-macad-backend.herokuapp.com/login/",
                this.user, 
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                });
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/ColorPalette.scss";
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }
    .contenedor{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-image: url("../../../assets/login/fondo.jpg");
    }
    .login{
        width: 856px;
        height: 524px;
        filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.3));
        margin: 0 auto;
        border-radius: 20px;
        overflow: hidden;
        background: #141414;
        box-shadow: 0 0 3px 3px rgba(#000, 0.2);
        display: flex;
    }
    .Text_left{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        position: absolute;
        width: 144px;
        height: 57.24px;
        left: 170px;
        top: 150px;
    }
    .Is{
        position: static;
        width: 144px;
        height: 33px;
        left: 0px;
        top: 24.24px;
        font-weight: 900;
        font-size: 28.5269px;
        line-height: 33px;
        text-align: right;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 0px;
    }
    .login__right{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 427px;
        height: 524px;
        background: #141414;
    }
    .Componentes{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        width: 286px;
        height: 400px;
    }
    span{
        color:$white;
    }
    .titulo{
        width: 286px;
        height: 60px;
        font-family: Playfair Display SC;
        font-size: 44.6512px;
        line-height: 60px;
    }
    .info{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        width: 285.9px;
        height: 400px;
    }
    .UserName{
        display: flex;
        align-items: center;
        width: 285.9px;
        height: 38px;
        border-radius: 8px;
        margin: 0px 0px;
        outline: 0.6px solid $white;
    }
    .iconU{
        width: 35px;
        height: 35px;
        margin: 0 10px 0 0;
    }
    .text{
        display: block;
        height: 37px;
        border:none;
        background:none;
        color: $white;
    }
    .text:focus{
        outline:none;
    }
    .password{
        display: flex;
        align-items: center;
        width: 285.9px;
        height: 38px;
        border-radius: 8px;
        margin: 20px 0px;
        outline: 0.6px solid $white;
    }
    .iconP{
        width: 35px;
        height: 35px;
        margin: 0 10px 0 0;
    }
    .loginb{
        align-items: center;
        width: 286px;
        height: 37px;
        background: linear-gradient(180deg, #FFBF42 31.04%, #A76D1C 100%);
        border-radius: 8px;
        margin: 50px 0px;
        border: none;
    }
    .loginb:hover{
        background:$yellow-linear-gradient;
    }
    .loginb:active{
        background:$orange-linear-gradient;
    }

</style>