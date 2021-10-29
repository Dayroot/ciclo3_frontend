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
            <router-link to="/user/staff-login/" class="button-staff">
                <div>         
                    <svg class="icon-staff" width="19" height="19" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.000484832L0 1.50048L3.3 6.12198C3.43892 6.3166 3.62236 6.47518 3.83502 6.58451C4.04767 6.69384 4.28339 6.75075 4.5225 6.75049H4.6275C4.82472 6.75033 5.02003 6.78907 5.20226 6.86448C5.3845 6.9399 5.55007 7.05051 5.6895 7.18999L9.702 11.2025L5.7765 15.1835C5.10509 14.9858 4.39686 14.9474 3.708 15.0711C3.01913 15.1949 2.36858 15.4775 1.80795 15.8965C1.24732 16.3154 0.792031 16.8593 0.478205 17.4849C0.164379 18.1105 0.000648302 18.8006 0 19.5005C0.000899195 20.1454 0.140406 20.7826 0.409067 21.3689C0.677729 21.9551 1.06927 22.4768 1.55716 22.8986C2.04505 23.3203 2.61789 23.6323 3.23687 23.8133C3.85586 23.9943 4.50652 24.0402 5.14477 23.9478C5.78303 23.8554 6.39396 23.6269 6.93619 23.2777C7.47842 22.9286 7.93926 22.467 8.28751 21.9242C8.63576 21.3814 8.86326 20.7701 8.95462 20.1317C9.04597 19.4933 8.99904 18.8427 8.817 18.224L12.798 14.2985L14.25 15.7505L13.7925 17.1215C13.7046 17.3857 13.692 17.6693 13.7561 17.9403C13.8202 18.2113 13.9585 18.4591 14.1555 18.656L19.1895 23.69C19.4708 23.9712 19.8523 24.1292 20.25 24.1292C20.6477 24.1292 21.0292 23.9712 21.3105 23.69L23.6895 21.311C23.9707 21.0297 24.1287 20.6482 24.1287 20.2505C24.1287 19.8527 23.9707 19.4713 23.6895 19.19L18.6555 14.156C18.4586 13.959 18.2108 13.8207 17.9398 13.7566C17.6688 13.6925 17.3853 13.7051 17.121 13.793L15.75 14.2505L14.31 12.8105L18.33 8.84598C18.9969 9.024 19.6957 9.04648 20.3727 8.9117C21.0496 8.77692 21.6866 8.48848 22.2344 8.06861C22.7823 7.64874 23.2264 7.10867 23.5325 6.49003C23.8386 5.87139 23.9985 5.19072 24 4.50048C24 4.09698 23.9475 3.70548 23.847 3.33498L20.637 6.54648L18 6.00049L17.454 3.36498L20.6655 0.153485C19.9015 -0.0519233 19.0969 -0.0523067 18.3328 0.152373C17.5686 0.357053 16.8719 0.759563 16.3129 1.31933C15.7539 1.8791 15.3524 2.57633 15.1487 3.34077C14.9451 4.1052 14.9466 4.90981 15.153 5.67348L11.193 9.69049L7.1895 5.68998C6.90818 5.40875 6.75008 5.02728 6.75 4.62948V4.52298C6.75002 4.28412 6.693 4.04871 6.58368 3.83634C6.47437 3.62396 6.31591 3.44076 6.1215 3.30198L1.5 0.000484832ZM15.969 15.9695C16.0387 15.8996 16.1214 15.8442 16.2126 15.8064C16.3037 15.7686 16.4013 15.7491 16.5 15.7491C16.5987 15.7491 16.6963 15.7686 16.7874 15.8064C16.8786 15.8442 16.9613 15.8996 17.031 15.9695L21.531 20.4695C21.6007 20.5392 21.656 20.622 21.6938 20.7131C21.7315 20.8042 21.7509 20.9019 21.7509 21.0005C21.7509 21.0991 21.7315 21.1968 21.6938 21.2879C21.656 21.379 21.6007 21.4618 21.531 21.5315C21.4613 21.6012 21.3785 21.6565 21.2874 21.6943C21.1963 21.732 21.0986 21.7514 21 21.7514C20.9014 21.7514 20.8037 21.732 20.7126 21.6943C20.6215 21.6565 20.5387 21.6012 20.469 21.5315L15.969 17.0315C15.8992 16.9618 15.8437 16.8791 15.8059 16.7879C15.7681 16.6968 15.7487 16.5991 15.7487 16.5005C15.7487 16.4018 15.7681 16.3042 15.8059 16.213C15.8437 16.1219 15.8992 16.0392 15.969 15.9695ZM4.5 16.5005L5.2065 16.8635L6 16.9025L6.4305 17.57L7.098 18.0005L7.137 18.794L7.5 19.5005L7.137 20.207L7.098 21.0005L6.4305 21.431L6 22.0985L5.2065 22.1375L4.5 22.5005L3.7935 22.1375L3 22.0985L2.5695 21.431L1.902 21.0005L1.863 20.207L1.5 19.5005L1.863 18.794L1.902 18.0005L2.5695 17.57L3 16.9025L3.7935 16.8635L4.5 16.5005Z"/>
                    </svg>
                </div>
                <span class="button-staff-label">STAFF</span>
            </router-link>
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
                        <router-link :to="{name:'about-us'}" class="menu__option">ABOUT US</router-link>
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
        height: 55px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .social-media-bar__label {
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
        background: $yellow-radial-gradient-activate;
    }
    .button-staff{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        margin-right: 50px;
        padding: 5px;
        width: 100px;
        border-radius: 0.1em;
    }
    .button-staff:hover{
        background: $yellow-linear-gradient;
        .icon-staff{
            fill: $dark-grey;
        }
        .button-staff-label {
            color: $dark-grey;
        }
    }
    .button-staff:active{
        background: $yellow-solid-active;
        .icon-staff{
            fill: $dark-grey;
        }
        .button-staff-label {
            color: $dark-grey;
        }
    }
    .button-staff-label {
        color: $grey;
        font-family: 'Mulish', sans-serif;
        font-size: 0.8rem;
    }
    .icon-staff{
        margin-right: 5px;
        fill: $grey;
        width: 22px;
    }



    /* logo */

    .header__logo {
        width: 7.5em;
        position: absolute;
        left: 0;
    }

    /* shopping cart and user icon styles */

    .icons-container {
        display: flex;
        justify-content: right;
        align-items: center;
        background-color: $light-grey;
        border-radius: 0.1em;
        position: absolute;
        right: 0;
        margin-right: 50px;
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
        background: $yellow-radial-gradient-activate;
        border-radius: 0.1em;
    }
    .icon:active {
        background-color: $yellow-solid-active;;
        border-radius: 0.1em;
    }


    /*menu styles */

    .header {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 4em 0;
        position: relative;
    }
    .menu {
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