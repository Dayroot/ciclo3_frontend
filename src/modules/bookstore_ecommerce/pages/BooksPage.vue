<template>
    <div class="container">
        <div class="content">
            <div class="filter">
                <div class="filter-text">
                    <span>Sort by</span>
                </div>
                <select name="books" id="">
                    <option value="lowerPrice">Lower price</option>
                    <option value="higherPrice">Higher price</option>
                    <option value="mostNew">The most new</option>
                </select>
            </div>
            <div class="product-cards">
                <product-book
                v-for="(book) in this.productData"
                :key="book.product.id"
                :image="book.product.image_url"
                :title="book.title"
                :type="book.product.type"
                :author="book.author"
                :price="book.product.price"
            ></product-book>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import axios from 'axios';
export default {
    components : { 
        ProductBook: defineAsyncComponent(() => import( /* webpackChunkName: "ProductBook" */ '../components/ProductBook'))
        },
    data() {
        return {
            api: "https://bookstore-macad-backend.herokuapp.com/book/",
            productData:[],
        }
    },
    methods:{
        async getDataProducts() {
                try {
                    await axios.get(this.api)
                    .then((result) => {
                        this.productData= result.data;
                    })
                }catch(error) {
                    if (error.response.status == "401")
                    console.log("ERROR 401: not found.");
                };          
            },
    },
    created: function(){
        this.getDataProducts();
    },
}
</script>Product

<style lang="scss">
@import "@/assets/ColorPalette.scss";

.container{
    width: 100%;
    height: 100%;
    display: flex;
}
.content{
    display: flex;
    padding-top: 10px;
    border-top: 0.2px solid $light-grey;
}
.product-cards{
    display:flex;
    flex-wrap: wrap;
    justify-content: left;
    flex:6;
}
.filter {
    margin-top: 10px;
    flex:1;
    height: 100px;
    border-right: 0.2px solid $light-grey;
    // box-shadow: 0 0 4px 2px rgba($color: #000000, $alpha: 0.2);
}
.filter-text{

    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 10px;
    
    & span {
        text-transform: uppercase;
        font-size: 0.9rem;
    }
}

select {
    height: 30px;
    width: 100%;
    border:none;
    font-size: 0.8rem;
    padding: 0 7px;
    color: $grey;
    & > option{
         font-size: 0.8rem;
         color: $grey;
     }
     & > option:focus{
         background: $faded-yellow;
     }

     &:focus{
         outline: none;
     }
}
    
</style>