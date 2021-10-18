<template>
    <div class="inventory-page">
        <!-- <h1>Inventory page</h1> -->
        <books-table></books-table>  
    </div >
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        name: 'inventory-page',
        data: function(){
        },
        components: {
            BooksTable: defineAsyncComponent(() => import( /* webpackChunkName: "booksTable" */ '../components/BooksTable')),
        },
        methods: {
            async getBooks() {
                const books= await axios.get("https://bookstore-macad-backend.herokuapp.com/book/")
                    .catch((error) => {
                        if (error.response.status == "401")
                        alert("ERROR 401: books not found.");
                    });    
            },
            async getMagazines() {
                const magazines= await axios.get("https://bookstore-macad-backend.herokuapp.com/magazine/")
                    .catch((error) => {
                        if (error.response.status == "401")
                        alert("ERROR 401: magazines not found.");
                    });         
            }
        },  
    }
</script>

<style lang="scss" scoped>

</style>