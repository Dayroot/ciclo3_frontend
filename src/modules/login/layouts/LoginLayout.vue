<template>
    <div class="login-layout">
        <router-view 
        @completedCustomerLogIn="completedCustomerLogIn"
        @completedCustumerSignUp="completedCustumerSignUp"
        @completedStaffLogIn="completedStaffLogIn"
        />
    </div >
</template>

<script>
    export default {
        name: 'login-layout',
        methods:{
            completedCustomerLogIn: function(data) {
                localStorage.setItem("isAuthCustomer", true);
                localStorage.setItem("username", data.username);
                localStorage.setItem("token_access", data.token_access);
                localStorage.setItem("token_refresh", data.token_refresh);
                this.$router.push({ path: "/" });
            },
            completedCustumerSignUp: function(data) {
                alert("Registro Exitoso");
                this.completedCustumerLogIn(data);
            },
            completedStaffLogIn: function(data) {
                localStorage.setItem("isAuthStaff", true);
                localStorage.setItem("username", data.username);
                localStorage.setItem("work_area", data.work_area);
                localStorage.setItem("fullname", data.fullname);
                localStorage.setItem("token_access", data.token_access);
                localStorage.setItem("token_refresh", data.token_refresh);
                this.$router.push({ path: "/staff/" });
            },
        }

    }
</script>

<style lang="scss" scoped>
</style>