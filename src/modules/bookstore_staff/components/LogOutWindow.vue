<template>
    <div>
        <transition name="slide">
            <div v-if="isActivate" class="window">
                <div class="content">
                    <div>
                        <svg class="icon-log-out"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12L7 16V13H16V11H7V8L2 12Z" />
                            <path d="M13.001 2.99906C11.8185 2.99578 10.6471 3.22717 9.55471 3.67982C8.4623 4.13247 7.47057 4.79739 6.63696 5.63606L8.05096 7.05006C9.37296 5.72806 11.131 4.99906 13.001 4.99906C14.871 4.99906 16.629 5.72806 17.951 7.05006C19.273 8.37206 20.002 10.1301 20.002 12.0001C20.002 13.8701 19.273 15.6281 17.951 16.9501C16.629 18.2721 14.871 19.0011 13.001 19.0011C11.131 19.0011 9.37296 18.2721 8.05096 16.9501L6.63696 18.3641C8.33596 20.0641 10.596 21.0011 13.001 21.0011C15.406 21.0011 17.666 20.0641 19.365 18.3641C21.065 16.6651 22.002 14.4051 22.002 12.0001C22.002 9.59506 21.065 7.33506 19.365 5.63606C18.5314 4.79739 17.5396 4.13247 16.4472 3.67982C15.3548 3.22717 14.1834 2.99578 13.001 2.99906V2.99906Z" />
                        </svg>
                    </div>
                    <p>you want to close the session?</p>
                </div>
                <div class="button-bar">
                    <button @click="$emit('yes')" class="button">
                        <span>yes</span>
                    </button>
                    <button @click="$emit('cancel')" class="button">
                        <span>cancel</span>
                    </button>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isActivate" @click="$emit('cancel')" class="back">
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
    },
    emits: ['yes', 'cancel'],
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
        background: $dark-grey;
        height: 150px;
        width: 295px;
        padding: 10px;
        border-radius: 0.8em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top:50%;
        left:50%;
        margin-top: -100px;
        margin-left: -147.5px;
        box-shadow: 0px 1px 2px 1px rgba($color:#000000, $alpha: 0.2);
        position: absolute;
        z-index: 5;
    }
    .content {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .button-bar {
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .button {
        margin: 0 10px;
        border: none;
        background: $yellow-linear-gradient;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        border-radius: 4px;
        transition: all 80ms ease-in-out;
        &:hover{
            background: $orange-linear-gradient;
        }
        &:active{
            opacity: 60%;
        }
    }
    .icon-log-out{
        fill: $white;
        width: 40px;
    }
    p{
        color: $white;
    }
    
</style>