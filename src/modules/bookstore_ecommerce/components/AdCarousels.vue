<template>
    <carousel 
        :slides="slides" 
        :interval="4000"
        indicators
    ></carousel>
</template>

<script>
    import Carousel from "./carousel/Carousel.vue";

    export default {
        components: { Carousel },
        data: () => ({
            slides: [
                "https://i.imgur.com/7bKYlfS.png",
                "https://i.imgur.com/mbDRw2m.png",
                "https://i.imgur.com/YKXb0lC.png",
                "https://i.imgur.com/MgNdAaI.png"   
            ],
        }),
    }
</script>
