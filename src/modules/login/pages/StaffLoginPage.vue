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
                            <div class="icon icon--user">
                                <svg class="icon-img" width="28" height="32" viewBox="0 0 28 32"  xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_89:26)">
                                    <path d="M13.9805 15.3024C17.8807 15.3024 21.1123 12.1266 21.1123 8.17068C21.1123 4.27052 17.8807 1.03895 13.9805 1.03895C10.0246 1.03895 6.8488 4.27052 6.8488 8.17068C6.8488 12.1266 10.0246 15.3024 13.9805 15.3024ZM18.9393 17.0853H17.9921C16.7664 17.6982 15.4292 17.9768 13.9805 17.9768C12.5319 17.9768 11.139 17.6982 9.91321 17.0853H8.96603C4.843 17.0853 1.5 20.4841 1.5 24.6071V26.8915C1.5 28.3958 2.67005 29.5659 4.1744 29.5659H23.7866C25.2353 29.5659 26.461 28.3958 26.461 26.8915V24.6071C26.461 20.4841 23.0623 17.0853 18.9393 17.0853Z"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_89:26" x="0.3" y="0.83894" width="27.3611" height="30.927" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="0.6"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_89:26"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_89:26" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <input type="text" v-model="user.username" placeholder="Username" class="input input--user">
                            </div>
                        </div>
                        <div class="password">
                            <div class="icon icon--password">
                                <svg class="icon-img" width="28" height="33" viewBox="0 0 28 33"  xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_232:3053)">
                                    <path d="M5.75 10.6875H3C2.63533 10.6875 2.28559 10.8324 2.02773 11.0902C1.76986 11.3481 1.625 11.6978 1.625 12.0625V28.5625C1.625 28.9272 1.76986 29.2769 2.02773 29.5348C2.28559 29.7926 2.63533 29.9375 3 29.9375H25C25.3647 29.9375 25.7144 29.7926 25.9723 29.5348C26.2301 29.2769 26.375 28.9272 26.375 28.5625V12.0625C26.375 11.6978 26.2301 11.3481 25.9723 11.0902C25.7144 10.8324 25.3647 10.6875 25 10.6875H22.25V9.3125C22.25 7.12446 21.3808 5.02604 19.8336 3.47887C18.2865 1.93169 16.188 1.0625 14 1.0625C11.812 1.0625 9.71354 1.93169 8.16637 3.47887C6.61919 5.02604 5.75 7.12446 5.75 9.3125V10.6875ZM8.5 10.6875V9.3125C8.5 7.85381 9.07946 6.45486 10.1109 5.42341C11.1424 4.39196 12.5413 3.8125 14 3.8125C15.4587 3.8125 16.8576 4.39196 17.8891 5.42341C18.9205 6.45486 19.5 7.85381 19.5 9.3125V10.6875H8.5ZM15.375 18.9375V21.6875H12.625V18.9375H15.375ZM20.875 18.9375V21.6875H18.125V18.9375H20.875ZM9.875 18.9375V21.6875H7.125V18.9375H9.875Z" />
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_232:3053" x="0.425" y="0.8625" width="27.15" height="31.275" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="0.6"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_232:3053"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_232:3053" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <input type="password" v-model="user.password" placeholder="Password" class="input input--password">
                            </div>
                        </div>
                        <button type="submit" @click="processLogInUser" class="loginb">
                            <span>Log in</span>
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
    emits:['completedStaffLogIn'],
    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },
    
    methods: {
        processLogInUser: async function(){
            await axios.post( "https://bookstore-macad-backend.herokuapp.com/staff-login/", this.user )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    this.$emit('completedStaffLogIn', dataLogIn)
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
        background-repeat: no-repeat;
        background-position: center;
        background-color: #f1eee9;
    }
    .login{
        width: 856px;
        height: 524px;
        filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.3));
        margin: 0 auto;
        border-radius: 20px;
        overflow: hidden;
        background: #141414;
        box-shadow: 0 0 2px 2px rgba(#000, 0.1);
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
        font-family: $primary-font-family;
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
    .icon-img {
        fill: $white;
        width: 24px;
    }
    .icon{
        width: 38px;
        height: 38px;
        margin-right: 10px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon--user{
        background: radial-gradient(50% 50% at 50% 50%, #FFBF42 19.06%, #A76D1C 100%);
    }
    .icon--password{
        background: radial-gradient(50% 50% at 50% 50%, #FF7042 19.06%, #A7351C 100%);
    }
    .input{
        display: block;
        height: 37px;
        border:none;
        background:none;
        color: $white;
    }
    .input:focus{
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

    .loginb{
        align-items: center;
        width: 286px;
        height: 37px;
        background: linear-gradient(180deg, #f3af28 31.04%, #A76D1C 100%);
        border-radius: 8px;
        margin: 50px 0;
        border: none;
        transition: all 120ms ease-in-out;
    }
    .loginb:hover{
        opacity: 80%;
    }
    .loginb:active{
        background:$orange-linear-gradient;
    }
</style>