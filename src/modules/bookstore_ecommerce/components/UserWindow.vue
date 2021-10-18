<template>
    <transition >
        <div v-show="isActivate" class="window">
            <div>
                <router-link to="">Log in</router-link>
            </div>
            <div>
                <router-link to="">Sign up</router-link>
            </div>

        </div>
    </transition>
</template>
<script>
export default {
    props: {
        isActivate: {
            type: Boolean,
            default: true      
        },
        
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";
    
    *{
        font-size: 0.8rem;
        color: $grey
    }
    a {
        text-decoration: none;
    }
    .window {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        width: 100px;
        height: 50px;
        background-color: $white;
        box-shadow: 0px 1px 2px 1px rgba($color: #000000, $alpha: 0.2);
        transform: translateY(91%);
        position: absolute;
        z-index: 1;

    }
</style>