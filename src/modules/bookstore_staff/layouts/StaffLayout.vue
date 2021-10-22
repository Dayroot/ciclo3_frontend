<template>
    <body>
        <div class="staff-layout">
            <div class="sidebar">
                <sidebar></sidebar>       
            </div>
            <div class="dashboard">
                <router-view />
            </div>
        </div >
    </body>
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
        max-width: 1920px;
        margin: 0 auto;
        background: $negro-clarito;
    }
    .sidebar { 
        width:270px;
    }
    .dashboard {
        flex:500px;
    }

</style>