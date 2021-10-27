<template>
    <div class="product">
        <p>Books</p>
        <!-- <product v-for=""> </product> -->
    </div>
    <body>
        <div class="container">
            <div class="card">
                <figure>
                    <img src="https://imgur.com/j3Am7gI">
                </figure>
                <div class="contenido">
                    <h3>title</h3>
                    <h5>type</h5>
                    <h5>author</h5>
                    <h5>price</h5>
                </div>
            </div>
        </div>
    </body>
</template>
<script>
export default {
    data () {
        return {
            productData : {
                image:'',
                title: '',
                type: '',
                author: '',
                price: '',
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/ColorPalette.scss";
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 100%;
    height: 400px;
    margin: 20px;
    display: inline;
    text-align: left;
    overflow: hidden;
    background: $yellow-solid;
    cursor: default;
    transition: all 400ms ease;
}

.container:hover{
    box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
    transform: translateY(-3%);
}

.container img{
    width: 100%;
    height: 300px;
}

.container .contenido{
    padding: 15px;
    text-align: left;
}

.container .contenido h3{
    font-weight: 400;
}
</style>