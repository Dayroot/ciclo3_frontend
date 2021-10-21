<template>
    <div class="customer-login">
        <customer-login></customer-login>
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'customer-login-page',
        data: function(){
        },
        components: {
           CustomerLogin: defineAsyncComponent(() => import( /* webpackChunkName: "customerLoginPage" */ '../components/CustomerLogin')),
           StaffLogin: defineAsyncComponent(() => import( /* webpackChunkName: "customerLoginPage" */ '../components/StaffLogin'))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>