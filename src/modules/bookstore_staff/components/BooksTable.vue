<template>
    <div>  
        <table>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publication date</th>
                    <th scope="col">Editorial</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dataRow) in booksData" :key="dataRow.product.id">
                    <input type="checkbox" name="" id="">
                    <th scope="row">{{ dataRow.product.id  }}</th>
                    <td>{{ dataRow.title }}</td>
                    <td>{{ dataRow.author }}</td>
                    <td>{{ dataRow.publication_date }}</td>
                    <td>{{ dataRow.editorial }}</td>
                    <td>{{ dataRow.isbn }})</td>
                    <td>{{ dataRow.product.price }}</td>
                    <td>{{ dataRow.product.stock  }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue'
export default {
    props: ["booksData"],
    components: {
        
    },
    methods: {
    },
}
</script>