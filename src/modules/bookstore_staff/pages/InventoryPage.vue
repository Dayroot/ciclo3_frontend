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
                fields:["product.id","title","author","isbn","product.editorial", "product.stock", "product.price","product.publication_date" ],
                filterFields: ["id","title","author","editorial", "isbn"],
                dataStructure: {
                    "product": {
                        "id": 0,
                        "editorial": "",
                        "stock": 0,
                        "price": 0,
                        "description": "",
                        "type": "",
                        "publication_date": "",
                        "image_url": ""
                    },
                    "title": "",
                    "author": "",
                    "isbn": ""
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