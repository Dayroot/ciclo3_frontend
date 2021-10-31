<template>
    <div class="ecommerce-layout">
        <Header/>
        <div class="content">
            <router-view />
        </div>
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
            Header: defineAsyncComponent(() => import( /* webpackChunkName: "header" */ '../components/Header')),
            Footer: defineAsyncComponent(() => import( /* webpackChunkName: "footer" */ '../components/Footer'))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
    .ecommerce-layout {
        width: 70vw;
        max-width: 1200px;
        margin : 0 auto;
        height: 100%;
        overflow-x: hidden;
    }

</style>