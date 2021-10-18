<template>
    <div class="staff-layout">
        <div class="sidebar">
            <p>sidebar</p>
        </div>
        <div class="dashboard">
            <p>dashboard</p>
        </div>
        <router-view />
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'staff-layout',
        data: function(){
        },
        components: {

        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
    .staff-layout {
        display: flex;
        height: 100vh;
    }
    .sidebar {
        background: cadetblue;
        height: 100%;
        width:270px;
    }
    .dashboard {
        background: coral;
        flex:500px;
    }

</style>