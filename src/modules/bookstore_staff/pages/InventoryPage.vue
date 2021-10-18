<template>
    <div class="inventory-page">
        <p>este es el inventario</p>
        <books-table :booksData="booksData"></books-table>  
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    import axios from 'axios';

    export default {
        name: 'inventory-page',
        data: function(){
            return {
                booksData: [0],
                magazinesData: [0],
            }
        },
        components: {
            BooksTable: defineAsyncComponent(() => import( /* webpackChunkName: "booksTable" */ '../components/BooksTable')),
        },
        created() {
            this.getBooks();
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
    }
</script>

<style lang="scss" scoped>

</style>