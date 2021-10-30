<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
        <div class="contenedor">
            <div class="login">
                <div class="login__right">
                    <div class="Componentes">
                        <div class="titulo">Registro</div>
                        <div class="info">
                            <form v-on:submit.prevent="processSignUp" >
                            <div class="datos">
                                <div class="fullname">
                                    <input type="text" v-model="user.fullname" placeholder="Full Name" class="text">
                                </div>
                                <div class="birthg">
                                    <div class="birth">
                                        <input type="date" v-model="user.datebirth" placeholder="Date Birth" class="text">
                                    </div>
                                    <div class="genero">
                                        <input type="text" v-model="user.gender" placeholder="Genero" class="text">
                                    </div>
                                </div>
                                <div class="address">
                                    <input type="text" v-model="user.address" placeholder="Address" class="text">
                                </div>

                                <div class="idphon">
                                    <div class="identification">
                                        <input type="number" v-model="user.identification" placeholder="Identification" class="text">
                                    </div>
                                    <div class="phone">
                                        <input type="number" v-model="user.phone_number" placeholder="Phone" class="text">
                                    </div>
                                </div>
                            </div>

                            <div class="loginx">
                                <div class="email">
                                    <input type="email" v-model="user.email" placeholder="Email" class="text">
                                </div>
                                <div class="UserName">
                                    <input type="text" v-model="user.username" placeholder="Username" class="text">
                                </div>
                                <div class="password">
                                    <input type="password" v-model="user.password" placeholder="Password" class="text">
                                </div>
                                <button type="submit" class="singup">
                                    <span>Registrarse</span>
                                </button>
                            </div>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",
    
    data: function(){
        return {
            user: {
                username: "",
                password: "",
                fullname: "",
                email: "",
                identification: "", 
                phone_number: "",
                address:"",
                is_customer: true, 
            }
        }
    },

    methods: {
        processSignUp: function(){
            console.log(this.user);
            axios.post(
                "https://bookstore-macad-backend.herokuapp.com/customer-registration/",
                this.user, 
                {headers: {}}
            )
                .then((result) => {
                    let dataSignUp = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    this.$emit('completedCustumerSignUp', dataSignUp)
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vh;
        background-image: url("../../../assets/login/fondo.jpg");
    }
    .login{
         position: absolute;
        left: 50%;
        margin-left: translateX(-50%);
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


    .login__right{
        display: flex;
        justify-content:center;
        align-items: center;
        background: #141414;
        position:relative;
    }
    .Componentes{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        left: 50%;
        transform: translateX(50%);
        width: 420px;
        height: 450px;
    }
    span{
        color:$white;
    }
    .titulo{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 286px;
        height: 60px;
        font-family: Playfair Display SC;
        font-size: 44.6512px;
        line-height: 60px;
        margin: 0px 0px 10px 0px;
        color: $white
    }
    .info{
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
    }
    .text{
        flex: 200px;
        border:none;
        background:none;
        color: $grey;
        margin: 0px 0px 0px 5px;
    }
    .text:focus{
        outline:none;
    }
    .datos{
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
    }
    .fullname{
        display: flex;
        align-items: center;
        width: 410px;
        height: 38px;
        border-radius: 8px;
        outline: 0.6px solid $white;
    }
    .birthg{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 410px;
        margin: 10px 0px 10px 0px;
    }
    .birth{
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 8px;
        margin: 0 5px 0 0;
        outline: 0.6px solid $white;
    }
    .genero{
        display: flex;
        align-items: center;
        width:400px;
        height: 38px;
        border-radius: 8px;
        outline: 0.6px solid $white;
    }
    .address{
        display: flex;
        align-items: center;
        width: 410px;
        height: 38px;
        border-radius: 8px;
        margin: 0px 0px;
        outline: 0.6px solid $white;
    }
    .idphon{
        display: flex;
        justify-content:center;
        align-items: center;
        margin: 10px 0px 10px 0px;
    }
    .identification{
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 8px;
        margin: 0 5px 0 0;
        outline: 0.6px solid $white;
    }
    .phone{
        display: flex;
        align-items: center;
        weight: 100px;
        height: 38px;
        border-radius: 8px;
        outline: 0.6px solid $white;
    }
    .loginx{
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
    }
    .email{
        display: flex;
        align-items: center;
        width: 410px;
        height: 38px;
        border-radius: 8px;
        outline: 0.6px solid $white;
    }
    .UserName{
        display: flex;
        align-items: center;
        width: 410px;
        height: 38px;
        border-radius: 8px;
        margin: 10px 0px;
        outline: 0.6px solid $white;
    }
    
    .password{
        display: flex;
        align-items: center;
        width: 410px;
        height: 38px;
        border-radius: 8px;
        outline: 0.6px solid $white;
    }

    .singup{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 286px;
        height: 37px;
        background: linear-gradient(180deg, #FFBF42 31.04%, #A76D1C 100%);
        border-radius: 8px;
        margin: 15px 0px;
        border: none;
    }
    .singup:hover{
        background:$yellow-linear-gradient;
    }
    .singup:active{
        background:$orange-linear-gradient;
    }
</style>