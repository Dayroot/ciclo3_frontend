<template>
    <div class="inventory-page">
        <dashboard
            :title="title"
            :api="api"
            :fields="fields"
            :filterFields="filterFields"
        ></dashboard>  
    </div >
</template>

<script>
    import Dashboard from "../components/Dashboard.vue";

    export default {
        name: 'inventory-page',
        data() {
            return {
                title: "Inventory",
                api:"https://bookstore-macad-backend.herokuapp.com/book/",
                fields:["product.id","title","author","publication_date","editorial", "isbn", "product.price", "product.stock"],
                filterFields: ["id","title","author","editorial", "isbn"],
            }
        },
        components: {
            Dashboard,
        },
    }
</script>

<style lang="scss" scoped>
    .inventory-page {
        width: 100%;
        height: 100%;
    }
</style>