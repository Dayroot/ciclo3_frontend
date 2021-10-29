<template>
    <div>
        <product-book></product-book>
        <!-- <span>Book: # {{$route.params.title}}</span> -->
    </div>
</template>

<script>
import ProductBook from '../components/ProductBook.vue'
export default {
    components : { ProductBook }
}
</script>Product