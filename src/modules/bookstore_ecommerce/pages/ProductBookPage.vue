<template>
    <span>Book: # {{$route.params.title}}</span>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            id:{
                type: Number,
                required: true 
            },
            title:{
                type: String,
                required: true
            }
    
        },
        data: function() {
            return {
                product: {
                    id: null,
                    description: "",
                    provider_name: "",
                    stock: 0,
                    price: 0
                },
                title: "",
                author: "",
                publication_date: "",
                isbn: "",
                editorial: ""
            }
        },
        created() {
            // this.getBook();
        },
        methods: {
            async getBooks() {
                const books= await axios.get("https://bookstore-macad-backend.herokuapp.com/book/")
                    .catch((error) => {
                        if (error.response.status == "401")
                        alert("ERROR 401: books not found.");
                    });    
            },
        },  
    }
</script>