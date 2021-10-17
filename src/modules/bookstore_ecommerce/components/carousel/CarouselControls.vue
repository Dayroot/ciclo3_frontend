<template>
    <a class="carousel-control left" @click="$emit('prev')">
        <img src="../../../../assets/icons/left-arrow.svg" alt="">
    </a>
    <a class="carousel-control right" @click="$emit('next')">
        <img src="../../../../assets/icons/right-arrow.svg" alt="">
    </a>
</template>

<script>
    export default {
        emits: ['prev', 'next']
    }

</script>

<style lang="scss" scoped>

    @import "@/assets/ColorPalette.scss";
    
    .carousel-control {
        background-color: rgba($color: #000000, $alpha: 0.5);
        border: none;
        display: flex;
        position: absolute;
        height: 30px;
        width: 30px;
        top: calc(50% - 25px);
        color: #f3f3f3;
        cursor: pointer;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        transition: all 100ms ease-in-out;
    }
    .left {
        left: 0;
    }
    .right {
        right: 0;
    }
    img{
        width: 1.2em;
        
    }
    .carousel-control:hover {
        background-color: rgba($color: $yellow-solid, $alpha: 0.5);
    }
    
</style>