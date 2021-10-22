<template>
    <div class="product">
        <p>{{title}}</p>
    </div>
    <router-link :to="{name: 'product-book'}"></router-link>
</template>

<script>
export default {
    data () {
        return {
            productData : {
                image: 'https://imgur.com/j3Am7gI',
                title: "Libro de prueba",
                tipo: "Libro",
                author: "autor",
                price: "56000"
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/ColorPalette.scss";

.product {
    width: 300px;
    height: 400px;
    background: $yellow-solid;
}
    
</style>