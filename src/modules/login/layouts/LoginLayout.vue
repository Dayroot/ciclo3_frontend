<template>
    <div class="login-layout">
        <h1>Login Layout</h1>
        <router-view 
        v-on:completedCustomerLogIn="completedCustomerLogIn"
        v-on:completedCustumerSignUp="completedCustumerSignUp"
        />
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'login-layout',
        data: function(){
        },
        components: {
        },

        methods:{
            completedCustomerLogIn: function(data) {
                localStorage.setItem("isAuth", true);
                localStorage.setItem("username", data.username);
                localStorage.setItem("token_access", data.token_access);
                localStorage.setItem("token_refresh", data.token_refresh);
                alert("Autenticación Exitosa");
                this.$router.push({ name: "home" });
            },
            completedCustumerSignUp: function(data) {
                alert("Registro Exitoso");
                this.completedCustumerLogIn(data);
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>