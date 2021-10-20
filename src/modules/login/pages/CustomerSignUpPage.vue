<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>
            
            <form v-on:submit.prevent="processSignUp" >
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                
                <input type="text" v-model="user.fullname" placeholder="Full Name">
                <br>

                <input type="date" v-model="user.datebirth" placeholder="Date Birth">
                <br>

                <input type="text" v-model="user.gender" placeholder="Genero">
                <br>

                <input type="email" v-model="user.email" placeholder="Email">
                <br>
                
                <input type="number" v-model="user.identification" placeholder="Identification">
                <br>

                <input type="number" v-model="user.phone_number" placeholder="Phone">
                <br>

                <input type="text" v-model="user.address" placeholder="Address">
                <br>
                
                <input type="boolean" v-model="user.is_employee" placeholder="Employee">
                <br>

                <input type="boolean" v-model="user.is_customer" placeholder="Customer">
                <br>

                <button type="submit">Registrarse</button>
                
            </form>
            
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
                is_employee:"",
                is_customer: "", 
            }
        }
    },

    methods: {
        processSignUp: function(){
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
                    this.$emit('completedSignUp', dataSignUp)
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
    body {
        font-weight: 900;
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