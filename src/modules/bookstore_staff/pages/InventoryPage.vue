<template>
    <div class="inventory-page">
        <h1>Inventory page</h1>
        <table></table>
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'inventory-page',
        data: function(){
        },
        components: {

            Table: defineAsyncComponent(() => import( /* webpackChunkName: "table" */ '../components/Table')),
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>