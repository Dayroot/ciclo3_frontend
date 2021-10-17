<template>

    <div class="header-container"> 

        <div class="social-media-bar">
            <span class="social-media-bar__label">Follow us</span>         
            <nav>
                <ul class="social-media-bar__icons">
                    <li class="icon-social-media">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="../../../assets/icons/facebook.svg" alt="facebook icon" class="icon-social-media__img--fb">
                        </a>
                    </li>
                    
                    <li class="icon-social-media">
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="../../../assets/icons/instagram.svg" alt="instagram icon" class="icon-social-media__img">
                        </a>
                    </li>
                    
                    <li class="icon-social-media">
                        <a href="https://twitter.com/" target="_blank">
                            <img src="../../../assets/icons/twitter.svg" alt="twitter icon" class="icon-social-media__img ">
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="header">

            <router-link :to="{name:'home'}" class="header__logo">
                <img src="../../../assets/logoBookstore.svg" type="img/svg" alt="Logo Bookstore">
            </router-link>

            <nav>
                <ul class="menu">
                    <li class="menu__option">
                        <router-link :to="{name:'books'}" >BOOKS</router-link>
                    </li>
                    <li class="menu__option">
                        <router-link :to="{name:'magazines'}">MAGAZINES</router-link>
                    </li>
                    <li class="menu__option">
                        <router-link :to="{name:'offers'}">OFFERS</router-link>
                    </li>
                    <li class="menu__option">
                        <router-link :to="{name:'product-book', params:{ id:6, title:'evan'} }">PHYSICAL STORES</router-link>
                    </li>
                </ul>      
            </nav>

            <div class="icons-container">
                <router-link to="/home" class="icon">
                    <img src="../../../assets/icons/shoppingCart.svg" type="img/svg" alt="shopping cart icon" />
                </router-link>
                <router-link to="/home" class="icon">
                    <img src="../../../assets/icons/user.svg" type="img/svg" alt="user icon" />
                </router-link>
            </div>

        </div>

    </div>
    
</template>
 
<style lang="scss" scoped>
    
    @import "@/assets/ColorPalette.scss";

    ul {
        list-style-type: none;
        background: lightgreen;
            
    }
    a{
        text-decoration: none;
    }

    /* Social media bar styles */

    .social-media-bar{
        background: #e2b043;
        height: 55px;
        display: flex;
        align-items: center;    
    }
    .social-media-bar__label {
        color: $light-grey;
        font-family: 'Mulish', sans-serif;
        font-size: 0.8rem;
        margin-right: 0.3em;
        background: royalblue;     
    }
    .icon-social-media {
        display: inline-flex;
        margin: 0 5px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background-color: $light-grey;
        transition: all 200ms ease-in-out;
    }
    .icon-social-media__img {
        width: 12px;       
    }
    .icon-social-media__img--fb{
        width: 7px;
    }   
    .icon-social-media:hover {
        transform: scale(1.15);
        background-color: $yellow-solid;
    }

    /* logo */

    .header__logo {
        background: lightcoral; 
        width: 90px;
    }

    /* shopping cart and user icon styles */

    .icons-container {
        background: chocolate;
        display: inline-flex;
        flex: 100;
        height: 30px;
        justify-content: right;
        align-items: center;
    }

    .icon {
        margin: 0 20px;
    }

    /*menu styles */


    .header {
        background: #b4ccf8;
        height: 90px;
        display: flex;
        align-items: center; 
    }
    .menu {
        background: cadetblue;
        display: flex;
        height: 30px;
        align-items: center;

    }
    .menu__option {
        font-size: 0.8rem;
        display: inline-flex;
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
    
</style>