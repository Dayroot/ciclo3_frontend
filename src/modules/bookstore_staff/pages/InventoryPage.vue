<template>
    <div class="inventory-page">
        <dashboard
            :title="title"
            :api="api"
            :fields="fields"
            :filterFields="filterFields"
            :dataStructure="dataStructure"
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
                dataStructure: {
                    "product": {
                        "description": "libro de álgebra",
                        "provider_name": "distriomega",
                        "stock": 72,
                        "price": 135000
                    },
                    "title": "Álgebra del Baldor",
                    "author": "Aurelio Baldor",
                    "publication_date": "1941-06-19",
                    "isbn": "30293695809",
                    "editorial": "alfaguara"
                }
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