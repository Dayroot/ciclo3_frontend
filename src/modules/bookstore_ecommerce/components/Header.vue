<template>

    <div class="header-container"> 

        <div class="social-media-bar">
            <span class="social-media-bar__label">Follow us</span>
            <div class="social-media-bar__icons">
                <a href="https://www.facebook.com/" target="_blank" class="icon-social-media">
                    <img src="../../../assets/icons/facebook.svg" alt="" class="icon-social-media__img--fb">
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="icon-social-media">
                    <img src="../../../assets/icons/instagram.svg" alt="" class="icon-social-media__img">
                </a>
                <a href="https://twitter.com/" target="_blank" class="icon-social-media">
                    <img src="../../../assets/icons/twitter.svg" alt="" class="icon-social-media__img ">
                </a>
            </div>
        </div>

        <div class="header">

            <router-link :to="{name:'home'}" class="header__logo">
                <img src="../../../assets/logoBookstore.svg" type="img/svg" alt="Logo Bookstore">
            </router-link>

            <div class="menu">
                <router-link :to="{name:'books'}" class="menu__option">BOOKS</router-link>
                <router-link :to="{name:'magazines'}" class="menu__option">MAGAZINES</router-link>
                <router-link :to="{name:'offers'}" class="menu__option">OFFERS</router-link>
                <router-link :to="{name:'product-book', params:{ id:6, title:'evan'} }" class="menu__option">PHYSICAL STORES</router-link> 
            </div>

            <div class="icons-container">
                <router-link to="/home" class="icon">
                    <img src="../../../assets/icons/shoppingCart.svg" type="img/svg" alt="Logo Bookstore" />
                </router-link>
                <router-link to="/home" class="icon">
                    <img src="../../../assets/icons/user.svg" type="img/svg" alt="Logo Bookstore" />
                </router-link>
            </div>

        </div>

    </div>
    
</template>
 
<style lang="scss" scoped>
    
    @import "@/assets/ColorPalette.scss";

    * {
        display: inherit
    }
    .social-media-bar{
        /* background: #e2b043; */
        height: 55px;
        display: flex;
        justify-content: left;
    }
    .header {
        /* background: #b4ccf8; */
        height: 90px;
        display: flex;
        
    }
    .menu {
        /* background: cadetblue; */
        margin: 0;
        align-items: center;
        justify-content: center;
        flex:50px
    }
    .menu__option {
        position: relative;
        display: block;
        font-size: 0.8rem;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        margin: 0 20px;
        transition: all 450ms ease;
        &::after,
        &::before{
            content: '';
            display: block;
            position: absolute;
            transition: width 540ms, opacity 300ms ease;
            height: 0.15rem;
            bottom: -1px;
        }
        &::before{
            width: 0;
            background-color: $yellow-solid;
        }

        &::after{
            width: 100%;
            border: 1px solid $yellow-solid;
            border-top: 0;
            opacity: 0;
        }

        &:hover{
            
            &::before{
                width: 0;
                animation: width 1000ms ease forwards;
            }

            &::after{
                opacity: 1;
            }
        }

    }

    @keyframes width{
        0%{
            width: 0;
        }

        50%{
            width: 100%;
        }

        100%{
            width: 70%;
        }
    }

    .router-link-exact-active.menu__option {
        color: $yellow-solid;
    }


    .header__logo {
        /* background: lightcoral; */
        width: 90px;
    }

    .icon {
        width: 20px;
        margin: 0 20px;
    }
    .social-media-bar__label {
        align-items: center;
        color: $light-grey;
        font-family: 'Mulish', sans-serif;
        font-size: 0.8rem;
        
    }
    .icon-social-media {
        width: 20px;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        background-image: url("../../../assets/icons/circle.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: transform 0.2s;
    }
    .icon-social-media__img {
        width: 12px;
    }
    .icon-social-media__img--fb{
        width: 7px;
    }
    
    /* Hover effects */
    .icon-social-media:hover {
        transform: scale(1.15);
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        background-image: url("../../../assets/icons/circle-hover.svg");
        background-repeat: no-repeat;
        background-position: center;
    }

    
</style>