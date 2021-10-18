<template>
    <div class="staff-layout">
        <div class="sidebar">
            <sidebar></sidebar>
            
        </div>
        <div class="dashboard">
            <p>dashboard</p>
            <router-view />
        </div>
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'staff-layout',
        components: {
            Sidebar: defineAsyncComponent(() => import( /* webpackChunkName: "sidebar" */ '../components/Sidebar'))
        },
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