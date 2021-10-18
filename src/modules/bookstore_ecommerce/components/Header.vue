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
                        <router-link :to="{name:'offers'}" class="menu__option">OFFERS</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'product-book', params:{ id:6, title:'evan'} }" class="menu__option">PHYSICAL STORES</router-link>
                    </li>
                </ul>      
            </nav>

            <div class="icons-container">
                <button class="icon icon--user">
                    <img src="../../../assets/icons/shoppingCart.svg" 
                        type="img/svg" 
                        alt="shopping cart icon" 
                        class="icon__img"     
                    />  
                </button>
                <button @click="toggleModalUser" class="icon icon--cart">
                    <img src="../../../assets/icons/user.svg" 
                        type="img/svg" 
                        alt="user icon"
                        class="icon__img" 
                    />
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
        width: 8vw;
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