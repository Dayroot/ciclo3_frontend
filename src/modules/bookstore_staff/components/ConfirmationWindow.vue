<template>
    <div>
        <transition name="slide">
            <div v-if="isActivate" class="window">
                <div class="content">
                    <div>
                        <svg width="46" height="46" viewBox="0 0 46 46"  xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7023 3.4125C18.1817 2.41424 18.9333 1.57172 19.8707 0.982031C20.808 0.392339 21.8928 0.0794678 23.0002 0.0794678C24.1076 0.0794678 25.1925 0.392339 26.1298 0.982031C27.0671 1.57172 27.8188 2.41424 28.2982 3.4125L45.2065 36.6729C47.2294 40.6437 44.6732 45.9167 39.9107 45.9167H6.09191C1.32732 45.9167 -1.22476 40.6458 0.793987 36.6729L17.7023 3.4125ZM23.0002 14.6667C22.4477 14.6667 21.9178 14.8862 21.5271 15.2769C21.1364 15.6676 20.9169 16.1975 20.9169 16.75V27.1667C20.9169 27.7192 21.1364 28.2491 21.5271 28.6398C21.9178 29.0305 22.4477 29.25 23.0002 29.25C23.5528 29.25 24.0827 29.0305 24.4734 28.6398C24.8641 28.2491 25.0836 27.7192 25.0836 27.1667V16.75C25.0836 16.1975 24.8641 15.6676 24.4734 15.2769C24.0827 14.8862 23.5528 14.6667 23.0002 14.6667ZM23.0002 32.375C22.4477 32.375 21.9178 32.5945 21.5271 32.9852C21.1364 33.3759 20.9169 33.9058 20.9169 34.4583V35.5C20.9169 36.0525 21.1364 36.5824 21.5271 36.9731C21.9178 37.3638 22.4477 37.5833 23.0002 37.5833C23.5528 37.5833 24.0827 37.3638 24.4734 36.9731C24.8641 36.5824 25.0836 36.0525 25.0836 35.5V34.4583C25.0836 33.9058 24.8641 33.3759 24.4734 32.9852C24.0827 32.5945 23.5528 32.375 23.0002 32.375Z" fill="url(#gradientIcon)"/>
                            <defs>
                            <linearGradient id="gradientIcon" x1="23.3149" y1="19.9423" x2="23.3149" y2="76.4748" gradientUnits="userSpaceOnUse">
                            <stop offset="0.159375" stop-color="#FFBF42"/>
                            <stop offset="1" stop-color="#A76D1C"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p>are you sure you want to <span class="highlighted-text">{{typeOperation}} {{recordsNumber}}</span> records?</p>
                </div>
                <div class="button-bar">
                    <button @click="$emit('accept',typeOperation)" class="button">
                        <span>accept</span>
                    </button>
                    <button @click="$emit('cancel', 'confirmation')" class="button">
                        <span>cancel</span>
                    </button>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isActivate" @click="$emit('cancel','confirmation')" class="back">
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        isActivate: {
            type: Boolean,
            default: false     
        },
        typeOperation: {
            type: String,
            required: true
        },
        recordsNumber: {
            type: Number,
            default: 5,
        }
    },
    emits: ['accept', 'cancel'],
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";

    .slide-leave-active,
    .slide-enter-active {
        transition: all 300ms ease;
    }
    .slide-leave-to,
    .slide-enter-from {
        transform: translate(400%, 0);
    }

    .fade-leave-active,
    .fade-enter-active {
       
        transition: all 300ms ease;

    }
    .fade-leave-to,
    .fade-enter-from {
        opacity: 0;
    }

    .back {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        background: rgba($color: #000000, $alpha: 0.5);
    }
    .window {
        height: 200px;
        width: 295px;
        padding: 10px;
        border-radius: 20px;
        background: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top:50%;
        left:50%;
        margin-top: -100px;
        margin-left: -147.5px;
        box-shadow: 0px 1px 2px 1px rgba($color:#000000, $alpha: 0.2);
        position: absolute;
        z-index: 4;
    }
    .content {
        background: lightgreen;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .button-bar {
        background: darkkhaki;
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    .button {
        margin:0 20px;
        width:115px;
        height: 30px;
        border-radius: 6px;
        border: none;
    }
    .highlighted-text {
        color:$orange-solid;
    }
</style>