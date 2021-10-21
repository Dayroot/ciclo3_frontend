<template>
    <div class="sidenav">
            <div class="login-main-text">
                <h2>Login Page</h2>
                <br>
                <p>Your only limit is you</p>
            </div>
        </div>
        <div class="main">
            <div class="logIn_user">
                <div class="container_logIn_user">
                <form v-on:submit.prevent="processLogInUser" >
                    <br><br><br>
                    <div class="fadeIn first">
                        <img src="HFJHGKHGFKGFKGF" id="icon" alt="User Icon" />
                    </div>
                    <br><br><br><br>
                    <div class="form-group">
                        <label>User Name</label>
                        <br><br>
                        <input type="text" v-model="user.username" placeholder="Username">
                    </div>
                    <br>
                    <div class="form-group">
                        <label>Password</label>
                        <br><br>
                        <input type="password" v-model="user.password" placeholder="Password">
                    <br>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-black">LogIn</button>
                </form>
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
                    this.$emit('completedCustomerLogIn', dataLogIn)
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
    body {
        font-weight: 900;
    }

    .sidenav {
        height: 100%;
        background-color: #FFBF42;
        overflow-x: hidden;
        padding-top: 20px;
    }


    .main {
        padding: 0px 10px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
    }

    @media screen and (max-width: 450px) {
        .login-form{
            margin-top: 30%;
        }

    }

    @media screen and (min-width: 768px){
        .main{
            margin-left: 40%; 
        }

        .sidenav{
            width: 40%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
        }

        .login-form{
            margin-top: 40%;
        }
    }

    .login-main-text{
        margin-top: 20%;
        padding: 40px;
        color: #FF7042;
    }

    .login-main-text h2{
        font-family: 'Bitter', serif;
        font-size: 32px;
        color: #000;
        font-weight: bold;
    }

    .btn-black{
        background-color: #FFBF42  !important;
        color: #000;
    }
</style>