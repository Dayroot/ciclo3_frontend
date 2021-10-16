<template>
    <div class="ecommerce-layout">
        <Header />
        <h1>Ecommerce Layout</h1>
        <router-view />
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'ecommerce-layout',
        data: function(){
        },
        components: {
            Header: defineAsyncComponent(() => import( /* webpackChunkName: "Header" */ '../components/Header'))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>