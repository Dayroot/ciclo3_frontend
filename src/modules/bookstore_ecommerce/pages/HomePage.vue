<template>
    <div>
        <AdCarousels />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    name: 'homepage',
    data: function(){
    },
    components: {
        AdCarousels: defineAsyncComponent(() => import( /* webpackChunkName: "adCarousel" */ '../components/AdCarousels'))
    },
    methods:{
    }
}
</script>

 <style lang="scss" scoped>
    


</style>