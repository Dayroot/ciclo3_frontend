<template>

    <div class="container">
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
        color: #2E2B2C;
        font-size: 16px;
        font-family: 'Mulish', sans-serif;
    }
    body {
        background: #fff;
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
