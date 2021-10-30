<template>

    <div id="app" class="container">
        <router-view/>
    </div>

</template>

<script>
    export default {
        name: 'App',
        data: function(){
        },
        components: {

        },
        methods:{
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700;800&display=swap');

    
    * {
        box-sizing: border-box;
        color: #2E2B2C;
        font-size: 16px;
        font-family: 'Mulish', sans-serif;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    body {
        background: #fff;
        margin:0 auto;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
    }


  
</style>
