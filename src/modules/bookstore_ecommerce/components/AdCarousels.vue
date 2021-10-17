<template>
    <p>hola8</p>
    <Carousel :slides="slides" />
</template>

<script>
    import Carousel from "./carousel/Carousel.vue";

    export default {
        components: { Carousel },
        data: () => ({
            slides: [
                "https://picsum.photos/id/1032/900/400",
                "https://picsum.photos/id/1033/900/400",
                "https://picsum.photos/id/1034/900/400",
                "https://picsum.photos/id/1035/900/400",
                "https://picsum.photos/id/1036/900/400"
            ],
        }),
    }
</script>
