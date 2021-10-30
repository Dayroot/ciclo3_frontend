<template>
    <div class="card">
        <figure class="card__image" @mouseenter="setActiveSlide" @mouseleave="setActiveSlide">
            <img :src="image" alt="">
            <transition name="back-slide-opacity">
                <div class="back-slide" v-show="activeBack"></div>
            </transition>
            <transition name="options-slide-position">
                <div class="options-slide" v-show="activeOptions">
                    <button class="button-cart button-add-cart">
                        <svg class="cart-icon" width="24" height="23" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Add to cart</span>
                    </button>
                    <button class="button-cart button-see-detail">
                        <svg width="27" height="24" viewBox="0 0 27 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 6.75C13.0032 6.75777 12.51 6.83669 12.0356 6.98438C12.2551 7.3703 12.3719 7.80605 12.375 8.25C12.375 8.59472 12.3071 8.93606 12.1752 9.25454C12.0432 9.57302 11.8499 9.8624 11.6061 10.1062C11.3624 10.3499 11.073 10.5433 10.7545 10.6752C10.436 10.8071 10.0947 10.875 9.74997 10.875C9.30603 10.8719 8.87028 10.7551 8.48435 10.5356C8.17986 11.5916 8.21535 12.7167 8.58579 13.7514C8.95622 14.7861 9.64282 15.678 10.5483 16.3008C11.4538 16.9236 12.5324 17.2457 13.6311 17.2215C14.7299 17.1973 15.7932 16.828 16.6704 16.1659C17.5476 15.5038 18.1942 14.5825 18.5187 13.5325C18.8432 12.4825 18.8291 11.357 18.4784 10.3154C18.1277 9.27388 17.4582 8.36906 16.5647 7.72915C15.6712 7.08924 14.599 6.74668 13.5 6.75V6.75ZM26.8369 11.3156C24.2948 6.35578 19.2623 3 13.5 3C7.73763 3 2.70372 6.35813 0.163099 11.3161C0.055869 11.5282 0 11.7626 0 12.0002C0 12.2379 0.055869 12.4723 0.163099 12.6844C2.70513 17.6442 7.73763 21 13.5 21C19.2623 21 24.2962 17.6419 26.8369 12.6839C26.9441 12.4718 26.9999 12.2374 26.9999 11.9998C26.9999 11.7621 26.9441 11.5277 26.8369 11.3156V11.3156ZM13.5 18.75C8.87576 18.75 4.63638 16.1719 2.34701 12C4.63638 7.82812 8.87529 5.25 13.5 5.25C18.1247 5.25 22.3636 7.82812 24.6529 12C22.364 16.1719 18.1247 18.75 13.5 18.75Z"/>
                        </svg>
                        <span>See detail</span>
                    </button>
                </div>
            </transition>
        </figure>
        <div class="card__info">
            <div class="card__title">
                <p>{{name}}</p>
            </div>
            <div class="card__type">
                <span>Type:</span>
                <div class="card__type-label">
                    <span>{{type}}</span>
                </div>
            </div>
            <div class="card__edition">
                <p>Edition: <span>{{edition}}</span></p>
            </div>
            <div class="card__price">
                <span>$ {{price}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["image", "name", "edition","type", "price"],
    data() {
        return {
            activeOptions: false,
            activeBack: false,
        }
    },
    methods:{
        setActiveSlide: function(){
            this.activeBack = !this.activeBack;
            this.activeOptions = !this.activeOptions;
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/ColorPalette.scss";

.back-slide-opacity-leave-active,
.back-slide-opacity-enter-active {    
    transition: all 300ms ease;
}

.back-slide-opacity-leave-to,
.back-slide-opacity-enter-from {
    opacity: 0;
}

.options-slide-position-leave-active,
.options-slide-position-enter-active {
    transition: all 300ms ease;
}

.options-slide-position-leave-to,
.options-slide-position-enter-from {
    transform: translate(0, 100%);
}

button {
    border: none;
    border-radius: 4px;
}

.button-cart{
    width:170px;
    height: 40px;
    position: relative;
    left: 40px;
    background: $light-grey;

    & span {
        height: 40px;
        color: $dark-grey;
        position: absolute;
        left: 60px;
        top: 50%;
        margin-top:-10px;
    }

    &:hover{
        background: $yellow-linear-gradient;
    }
    &:active {
        opacity: 90%;
    }
}


.button-see-detail{
    margin-top: 15px;
}


svg {
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top:-12.5px;
    width: 25px;
    height: 25px;
    fill: $dark-grey;
    stroke: $dark-grey;

}

.back-slide{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba($color: #000000, $alpha: 0.5);
}
.options-slide{
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
}
.card{
    width: 274px;
    height: 560px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    box-shadow: 0 0 4px 2px rgba($color: #000000, $alpha: 0.2);
}
.card__image{
    width: 250px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position:relative;
    overflow: hidden;
    & img {
        width: 250px;
        height: 400px;
        object-fit: cover;
    }
}
.card__info{
    width: 250px;
}
.card__title{
    padding: 6px 0;
    height: 50px;
    overflow:hidden;
    margin-bottom: 5px;

    & p{
        text-transform: uppercase;
        text-overflow: ellipsis;
    }
}

.card__type{
    display:flex;
    padding: 4px 0;
    display:flex;
    align-items: center;
    height: 25px;
    & span{
        color: $medium-grey;
        font-size: 0.8rem;
    }
}
.card__type-label{
    margin-left: 8px;
    background: $yellow-solid;
    padding: 1px 4px;
    border-radius: 4px;
    display:flex;
    align-items: center;

    & span {
        color: $white;
        stroke: 1px solid $dark-grey;
        font-size: 0.8rem;
    }
}
.card__edition{
    padding: 4px 0;
    overflow:hidden;
    height: 25px;
    & p, & span{
        font-size: 0.8rem;
        color: $medium-grey;
    }
    & span{
        text-transform: uppercase;
        text-overflow: ellipsis;
    }
}
.card__price{
    margin-top: 5px;
    padding: 4px 0;
    height: 25px;
}

</style>