<template>
    <div class="inventory-page">
        <p>este es el inventario</p>
        <books-table :booksData="booksData"></books-table>  
    </div >
</template>

<script>
    // import { defineAsyncComponent } from 'vue'
    import axios from 'axios';
    import BooksTable from "../components/BooksTable.vue";

    export default {
        name: 'inventory-page',
        data: function(){
            return {
                booksData: null,
                magazinesData: null,
            }
        },
        components: {
            BooksTable,
        },
        methods: {
            async getBooks() {
                try {
                    axios.get("https://bookstore-macad-backend.herokuapp.com/book/")
                    .then((result) => {
                            this.booksData= result.data;
                        })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: books not found.");
                };
                        
            },
            async getMagazines() {
                try {
                    axios.get("https://bookstore-macad-backend.herokuapp.com/magazine/")
                    .then((result) => {
                            this.magazinesData= result.data;
                        })
                }catch(error) {
                    if (error.response.status == "401")
                    alert("ERROR 401: magazines not found.");
                };       
            }
        },
        mounted:function(){
            this.getBooks();
        },
    }
</script>

<style lang="scss" scoped>

</style>