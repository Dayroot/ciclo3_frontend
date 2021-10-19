<template>
    <div class="inventory-page">
        <p>este es el inventario</p>
        <custom-table :rowsData="rowsData" :fields="fields"></custom-table>  
    </div >
</template>

<script>
    import axios from 'axios';
    import CustomTable from "../components/CustomTable.vue";

    export default {
        name: 'inventory-page',
        props: {
            api: {
                type: String,
                required: true,
                default: "https://bookstore-macad-backend.herokuapp.com/book/"
            },
            fields:{
                type: Array,
                required: true,
                default: ["product.id","title","author","publication_date","editorial", "isbn", "product.price", "product.stock"]
            }
        },
        data: function(){
            return {
                rowsData: null,
            }
        },
        components: {
            CustomTable,
        },
        methods: {
            async getData() {
                try {
                    axios.get(this.api)
                    .then((result) => {
                        this.rowsData= result.data;
                    })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: books not found.");
                };
                        
            },
        },
        mounted:function(){
            this.getData();
        },
    }
</script>

<style lang="scss" scoped>
    .inventory-page {
        width: 100%;
        height: 100%;
    }
</style>