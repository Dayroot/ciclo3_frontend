<template>
    <div class="detail-container">
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productData : {
                image: 'https://imgur.com/j3Am7gI',
                title: "Libro de prueba",
                tipo: "Libro",
                author: "autor",
                price: "56000",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis deleniti, accusantium, voluptates qui sequi cupiditate eveniet, facere quidem minus pariatur veritatis sit autem omnis modi quam quaerat sed natus Consequatur eius nisi excepturi ratione consectetur ipsa nemo nihil dolorem labore blanditiis, placeat distinctio doloremque. Veritatis nulla natus necessitatibus magni deleniti quisquam autem. Eaque harum nemo cupiditate rerum totam? Praesentium."
            }
        }
    }
}
</script>

<style lang="scss">
    .detail-container {
        height: 400px;
        width: 500px;
        background: cadetblue;
    }
</style>