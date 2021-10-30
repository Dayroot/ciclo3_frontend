<template>
    <carousel 
        :slides="slides" 
        :interval="4000"
        indicators
    ></carousel>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        components: { Carousel: defineAsyncComponent(() => import( /* webpackChunkName: "adCarousel" */ './carousel/Carousel')) 
        },
        data: () => ({
            slides: [
                "https://i.imgur.com/xkqat43.png",
                "https://i.imgur.com/hcI6O5c.png",
                "https://i.imgur.com/ZDi19cC.png",   
            ],
        }),
    }
</script>
