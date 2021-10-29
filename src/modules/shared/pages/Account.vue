<template>
    <div class="container">
        <div class = "content-container">
            <section class="section">
                <div class="section__header section__header-info">
                    <div class="section__title">
                        <label>Personal Information</label>
                    </div>
                    <div class="section__button">
                        <button :class="{'button-edit': editInfo, 'button-cancel': !editInfo}" @click="setFormInfoState" >{{stateInfo}}</button>
                    </div>
                </div>
                <div :class="{'form':true, 'form-desactive':editInfo}">
                    <div class="form__row">
                        <div class="form__column form__column--left">
                            <label class="form__label"> Username </label>
                            <input type="text" class="form__input" :disabled="editInfo" v-model="user.username"/>
                        </div>
                        <div class="form__column">
                            <label class="form__label"> Fullname </label>
                            <input type="text" :disabled="editInfo" v-model="user.fullname"/>
                        </div>   
                    </div>
                    <div class="form__row">
                        <div class="form__column form__column--left">
                            <label class="form__label"> Date birth </label>
                            <input type="date" class="form__input" :disabled="editInfo" v-model="user.datebirth"/>
                        </div>
                        <div class="form__column">
                            <label class="form__label"> Gender </label>
                            <input type="text" :disabled="editInfo" v-model="user.gender"/>
                        </div>   
                    </div>
                    <div class="form__row">
                        <div class="form__column form__column--left">
                            <label class="form__label"> Email </label>
                            <input type="text" class="form__input" :disabled="editInfo" v-model="user.email"/>
                        </div>
                        <div class="form__column">
                            <label class="form__label"> Identification </label>
                            <input type="text" :disabled="editInfo" v-model="user.identification"/>
                        </div>   
                    </div>
                    <div class="form__row">
                        <div class="form__column form__column--left">
                            <label class="form__label"> Phone number </label>
                            <input type="text" class="form__input" :disabled="editInfo" v-model="user.phone_number"/>
                        </div>
                        <div class="form__column">
                            <label class="form__label"> Address </label>
                            <input type="text" :disabled="editInfo" v-model="user.address"/>
                        </div>   
                    </div>
                </div>
                <button v-show="!editInfo" class="button-save" @click="changeInfo">save</button>
                <span>{{resultMessageInfo}}</span>         
            </section>
            <section class="section">
                <div class="section__header">
                    <div class="section__title">
                        <label>Password</label>
                    </div>
                    <div class="section__button">
                        <button :class="{'button-edit': true, 'button-cancel': !editPassword}" @click="setFormPasswordState">{{statePassword}}</button>
                    </div>
                </div>
                <div :class="{'form':true, 'form-desactive':editPassword}">
                    <div class="form__row">
                        <div class="form__column form__column--left">
                            <label class="form__label"> New password </label>
                            <input type="text" class="form__input" :disabled="editPassword" v-model="firstPassword"/>
                        </div>
                        <div class="form__column">
                            <label class="form__label"> Repeat new password </label>
                            <input type="text" :disabled="editPassword" v-model="secondPassword"/>
                        </div>   
                    </div>            
                </div>
                <button v-show="!editPassword" class="button-save" @click="changePassword">save</button> 
                <span>{{resultMessagePassword}}</span>         
            </section> 

        </div>
    </div>
   
</template>

<script>
import axios from 'axios';
import jwt_decode from "jwt-decode";
export default {
    props:["api"],
    data: function (){
        return {
             user: {
                username: "",
                password: "",
                fullname: "",
                datebirth:"",
                gender:"",
                email: "",
                identification: "", 
                phone_number: "",
                address:"",
            },
            firstPassword:"",
            secondPassword:"",
            editInfo: true,
            stateInfo: "edit",
            resultMessageInfo: "",
            editPassword: true,
            statePassword: "edit",
            resultMessagePassword: "",

        }
    },
    methods:{
        async getDataUser(){
            try{
                const token = localStorage.getItem("token_access");
                const id = jwt_decode(token).user_id;
                const backend = this.api['backend'];
                const detail = this.api['detail'];
                await axios.get( `${backend}/${detail}/${id}`, {headers: {'Authorization': `Bearer ${token}`}} )
                .then((result) => {
                    this.user = result.data;
                });
            }catch(error) {
                    console.log(error);
            };
        },
        async changeInfo(updatePassword = "no"){
            
            try{
                const token = localStorage.getItem("token_access");
                const id = jwt_decode(token).user_id;
                const backend = this.api['backend'];
                const update = this.api['update'];
                let data = this.user;
                if(updatePassword == "yes"){
                     data = { "password": this.user.password}
                }
                console.log("datos enviandos");
                console.log(data);
                await axios.put( `${backend}/${update}/${id}`, data, {headers: {'Authorization': `Bearer ${token}`}} )
                .then((result) => {
                    if(updatePassword== "yes"){
                        this.setFormPasswordState();
                        this.resultMessagePassword = "The password has been updated!"
                    }else {
                        this.setFormInfoState();
                        this.resultMessageInfo = "The information has been updated!"
                    }
                    this.getDataUser();
                });
            }catch(error) {
                    console.log(error);
            };
        },
        changePassword(){
            if( this.firstPassword == this.secondPassword){
                this.user.password = this.firstPassword;
                this.changeInfo("yes");
            }
        },
        setFormInfoState(){
            this.resultMessageInfo = ""
            this.editInfo= !this.editInfo;
            if(this.stateInfo=="edit"){
                this.stateInfo = "cancel"
            }else{
                this.stateInfo = "edit"
            }

        },
        setFormPasswordState(){
            this.editPassword= !this.editPassword;
            if(this.statePassword=="edit"){
                this.statePassword = "cancel"
            }else{
                this.statePassword = "edit"
            }
        },
    },
    mounted() {
        this.getDataUser();
    },
      
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";
    .container {
        display: flex;
        align-items:center;
        justify-content: center;
        height: 100vh;
        background-image: url("../../../assets/login/fondo.jpg");
    }
    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        background: $white;
        border-radius: 20px;
        box-shadow: 1px 2px 5px 3px rgba($color: #000000, $alpha: 0.1);
    }
    .title-main{
        text-align: center;
        margin:10px 0px 0px 10px;
        font-size: 20px;
    }
    .section{
        display: flex;
        justify-content:center;
        flex-direction: column;
        margin-bottom: 20px;
        text-align: center;
    }
    .section__header{
        padding:20px 50px;
        margin-bottom: 20px;
        background: $yellow-linear-gradient;
    }
    .section__header-info{
        border-radius: 20px 20px 0 0;
    }

    .section__title{
        position: absolute;
        display: flex;
        justify-content:left;
        align-items: center;
    }
    button{
        border: none;
        background: none;
        display: flex;
        width: 70px;
        text-transform: capitalize;
        cursor: pointer;
    }
    .button-edit {
        text-indent: 30px;
        display: flex;
        background-image: url('../../../assets/icons/edit.svg');
        background-repeat: no-repeat;
        background-position: left;
    }
    .button-cancel{
        text-indent: 30px;
        display: flex;
        background-image: url('../../../assets/icons/cancel.svg');
        background-repeat: no-repeat;
        background-position: left;
    }
    .section__button{
        display: flex;
        justify-content:right;
        align-items: center;
    }
    .form{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
    .form-desactive{
        opacity: 40%;
    }

    .form__row{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px 50px;
    } 
    .form__column{
        display: flex;
        align-items: start;
        flex-direction: column;
        border-bottom: 1px solid $dark-grey;
    }
    .form__column--left{
        margin-right: 20px;
    }

    .form__label{
        margin-bottom: 5px;
    }
    input {
        background: none;
        border:none;
        border-radius: 4px;
        width: 280px;
        &:focus{
            outline:none;
        }
    }

    .button-save{
        background: $yellow-linear-gradient;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        border-radius: 4px;
        transition: all 80ms ease-in-out;
        &:hover{
            background: $orange-linear-gradient;
        }
        &:active{
            opacity: 60%;
        }
    }
    

    
    
</style>