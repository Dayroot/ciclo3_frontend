<template>

    <div id="app" class="container">
        <Header />
        <p>App</p>
        <router-view/>
    </div>

</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'App',
        data: function(){
        },
        components: {
            Header: defineAsyncComponent(() => import( /* webpackChunkName: "Header" */ './bookstore_ecommerce/shared/components/Header.vue'))
        },
        methods:{
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700;800&display=swap');

    * {
        color: #2E2B2C;
        font-size: 16px;
        font-family: 'Mulish', sans-serif;
    }
    body {
        background: #EFECEA;
        margin:0 auto;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        width: 70vw;
        max-width: 1200px;
        margin : 0 auto;
    }

  
</style>
