<template>
    <div class="staff-layout">
        <div class="sidebar">
            <sidebar></sidebar>
            
        </div>
        <div class="dashboard">
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
@import "@/assets/ColorPalette.scss";
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
        background: $negro-clarito;
        flex:500px;
    }

</style>