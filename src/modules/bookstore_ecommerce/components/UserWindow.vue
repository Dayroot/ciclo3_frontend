<template>
    <transition >
        <div v-show="isActivate" class="window">
            <div class="button">
                <router-link to="/user/login" class="text">Log in</router-link>
            </div>
            <div class="button">
                <router-link to="/user/signup" class="text">Sign up</router-link>
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
        width: 100px;
        height: 50px;
        background-color: $white;
        box-shadow: 0px 1px 2px 1px rgba($color: #000000, $alpha: 0.2);
        transform: translateY(91%);
        position: absolute;
        z-index: 1;
    }
    .button {
        padding: 5px 5px 5px 25px;
        transition: all 200ms ease-in-out;
    }
    .button:hover {
        background: $faded-yellow;
        .text {
            color: $dark-grey;
        }
    }
    .button:active {
        background-color: $yellow-solid-active;
        padding: 8px 8px 8px 28px;
    }
</style>