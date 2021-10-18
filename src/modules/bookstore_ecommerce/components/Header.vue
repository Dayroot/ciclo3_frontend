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
                    <li>
                        <router-link :to="{name:'books'}" class="menu__option">BOOKS</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'magazines'}" class="menu__option">MAGAZINES</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'inventory'}" class="menu__option">STAFF</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'product-book', params:{ id:6, title:'evan'} }" class="menu__option">PHYSICAL STORES</router-link>
                    </li>
                </ul>      
            </nav>

            <div class="icons-container">
                <button class="icon icon--cart">
                    <svg class="icon__img--cart" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
                </button>
                <button @click="toggleModalUser" class="icon icon--user">
                    <svg class="icon__img--user" width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C9.98891 0 10.9556 0.293245 11.7779 0.842652C12.6001 1.39206 13.241 2.17295 13.6194 3.08658C13.9978 4.00021 14.0969 5.00555 13.9039 5.97545C13.711 6.94536 13.2348 7.83627 12.5355 8.53553C11.8363 9.2348 10.9454 9.711 9.97545 9.90393C9.00555 10.0969 8.00021 9.99784 7.08658 9.6194C6.17295 9.24096 5.39206 8.6001 4.84265 7.77785C4.29324 6.95561 4 5.98891 4 5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0ZM9 8C9.59334 8 10.1734 7.82405 10.6667 7.49441C11.1601 7.16476 11.5446 6.69623 11.7716 6.14805C11.9987 5.59987 12.0581 4.99667 11.9424 4.41473C11.8266 3.83279 11.5409 3.29824 11.1213 2.87868C10.7018 2.45912 10.1672 2.1734 9.58527 2.05764C9.00333 1.94189 8.40013 2.0013 7.85195 2.22836C7.30377 2.45542 6.83524 2.83994 6.50559 3.33329C6.17595 3.82664 6 4.40666 6 5C6 5.79565 6.31607 6.55871 6.87868 7.12132C7.44129 7.68393 8.20435 8 9 8ZM0 19V18C0 16.1435 0.737498 14.363 2.05025 13.0503C3.36301 11.7375 5.14348 11 7 11H11C12.8565 11 14.637 11.7375 15.9497 13.0503C17.2625 14.363 18 16.1435 18 18V19H16V18C16 16.6739 15.4732 15.4021 14.5355 14.4645C13.5979 13.5268 12.3261 13 11 13H7C5.67392 13 4.40215 13.5268 3.46447 14.4645C2.52678 15.4021 2 16.6739 2 18V19H0Z" />
                    </svg>
                </button>
                <user-window
                    :isActivate="userWindowActivate"
                ></user-window>
            </div>

        </div>

    </div>
    
</template>
 
 <script>
 import UserWindow from "./UserWindow";
 import { ref } from "vue";

 export default {
    props: {
    },
    data: () => ({
        
    }),
    components: {
        UserWindow,
    },
    methods: {
    
    },
    setup() {
        const userWindowActivate = ref(false);
        const toggleModalUser = () => {
        userWindowActivate.value = !userWindowActivate.value;
        };
        return { userWindowActivate, toggleModalUser };
    }
 }
 </script>


<style lang="scss" scoped>
    
    @import "@/assets/ColorPalette.scss";

    ul {
        // background: lightgreen;
        list-style-type: none;    
    }
    a{
        text-decoration: none;
    }

    /* Social media bar styles */

    .social-media-bar{
        // background: #e2b043;
        height: 55px;
        display: flex;
        align-items: center;    
    }
    .social-media-bar__label {
        // background: royalblue;
        color: $grey;
        font-family: 'Mulish', sans-serif;
        font-size: 0.8rem;
        margin-right: 0.3em;     
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
        // background: lightcoral; 
        width: 7.5em;
    }

    /* shopping cart and user icon styles */

    .icons-container {
        // background: chocolate;
        display: flex;
        justify-content: right;
        align-items: center;
        background-color: $light-grey;
        border-radius: 0.1em;
    }

    .icon {
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($color: #000000, $alpha: 0);
        width: 50px;
        height: 40px;
        cursor: pointer;
        transition: all 120ms ease-in-out;   

    }
    .icon__img {
        width: 24px;
        height: 20px;
    }

    .icon__img--user {
        fill: $dark-grey;
    }
    .icon__img--cart {
        stroke: $dark-grey;
    }
    .icon:hover {
        background-color: $yellow-solid;
        border-radius: 0.1em;
    }
    .icon:active {
        background-color: $yellow-solid-active;
        border-radius: 0.1em;
    }

    /*menu styles */

    .header {
        // background: #b4ccf8;
        height: 90px;
        display: flex;
        align-items: center;
        margin: 1.8em 0 4em 0;
    }
    .menu {
        // background: cadetblue;
        display: flex;
        width: 50vw;
        height: 30px;
        align-items: center;
        justify-content: center;
        margin: 0 20px;

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
    
</style>