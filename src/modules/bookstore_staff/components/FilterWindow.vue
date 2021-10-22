<template>
    <transition >
            <div v-show="isActivate" class="window">
                <div 
                    v-for="(option, index) in filterFields" 
                    :key="index" 
                    @click="$emit('filterField',option)" 
                    class="button"
                >
                    <button class="text">{{option}}</button>
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
        filterFields: {
            type: Array,
            default: null
        } 
    },
    emits: ['filterField'],
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";
    
    *{
        font-size: 0.8rem;
        color: $grey
    }
    button {
        border: none;
        background: none;
    }
    .window {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100px;
        height: auto;
        background-color: $white;
        box-shadow: 0px 1px 2px 1px rgba($color: #000000, $alpha: 0.2);
        transform: translateY( 31px);
        position: absolute;
        z-index: 2;
    }
    .button {
        padding: 5px 5px 5px 10px;
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
        padding: 8px 8px 8px 13px;
    }

</style>