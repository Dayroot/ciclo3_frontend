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