<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselItem 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index"
            ></CarouselItem>   
            <CarouselControls
                @prev="prev" @next="next"
            ></CarouselControls>
        </div>
    </div>
</template>

<script>
    import CarouselItem from "./CarouselItem.vue";
    import CarouselControls from "./CarouselControls.vue";
    
    export default {
        name: "carousel",
        props:['slides'],
        components: { CarouselItem },
        data: () => ({
            currentSlide: 0,
            slideInterval: null,
        }),
        methods: {
            setCurrentSlide(index){
                this.currentSlide= index;
            },
            prev () {
                const index = this.currentSlide > 0 ? this.currentSlide - 1 :  this.slides.length - 1;
                this.setCurrentSlide(index);
            },
            next () {
                const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
                this.setCurrentSlide(index);
            }
        },
        mounted () {
            this.slideInterval = setInterval(() => {
                this.next();
            },3000 )
        },
        beforeUnmount () {
            clearInterval(this.slideInterval);
        }
    }
</script>

<style lang="css" scoped>
    
    .carousel {
        display: flex;
        justify-content: center;
    }
    .carousel-inner {
        position: relative;
        width: 900px;
        height: 400px;
        overflow: hidden;
    }

</style>