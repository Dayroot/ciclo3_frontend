<template>
    <div class="ecommerce-layout">
        <Header/>
        <router-view />
        <Footer/>
        
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'ecommerce-layout',
        data: function(){
        },
        components: {
            Header: defineAsyncComponent(() => import( /* webpackChunkName: "Header" */ '../components/Header')),
            Footer: defineAsyncComponent(() => import( /* webpackChunkName: "Header" */ '../components/Footer'))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>