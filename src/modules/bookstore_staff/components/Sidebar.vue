<template>
    <div>
        <input type="checkbox" id="btn-menu">
        <div class="btn-menu btn-menu--top">
            <label for="btn-menu">
                <span class="Titulo">BOOKSTORE</span>
                <svg width="270" height="114" viewBox="0 0 270 114"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M206 113C242 111 255.5 104 270 99.5V-7.5H0V104C8 99.8333 52 96.5 84.5 102C130.154 109.726 170 115 206 113Z" fill="url(#paint0_linear_91:391)"/>
                    <defs>
                    <linearGradient id="paint0_linear_91:391" x1="135" y1="-8" x2="135" y2="134" gradientUnits="userSpaceOnUse">
                    <stop offset="0.190625" stop-color="#FFBF42"/>
                    <stop offset="1" stop-color="#A76D1C"/>
                    </linearGradient>
                    </defs>
                </svg>
            </label>
        </div>
        <div class="Menu">
            <div class="menu__user-information">
                <div class="menu__photo">
                    <svg width="50" height="50" viewBox="0 0 50 50"  xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_91:326)">
                        <rect width="50" height="50" rx="25" fill="url(#paint0_radial_91:326)"/>
                        <path d="M34.4445 17.7778C34.4445 23.2912 29.9578 27.7778 24.4445 27.7778C18.9311 27.7778 14.4445 23.2912 14.4445 17.7778C14.4445 12.2645 18.9311 7.77783 24.4445 7.77783C29.9578 7.77783 34.4445 12.2645 34.4445 17.7778ZM6.66668 50.0001H4.44446V47.7778C4.44446 39.2023 11.4245 32.2223 20 32.2223H28.8889C37.4667 32.2223 44.4445 39.2023 44.4445 47.7778V50.0001H6.66668Z" fill="#EFECEA"/>
                        </g>
                        <defs>
                        <radialGradient id="paint0_radial_91:326" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 25) rotate(90) scale(25)">
                        <stop offset="0.190625" stop-color="#FFBF42"/>
                        <stop offset="1" stop-color="#A76D1C"/>
                        </radialGradient>
                        <clipPath id="clip0_91:326">
                        <rect width="50" height="50" rx="25" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="menu__name">
                    <span>Pepito Perez</span>
                </div>
                <div class="menu__role">
                    <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.832 5.916L4.104 1.626C4.044 1.486 3.986 1.318 3.93 1.122C3.906 1.218 3.88 1.31 3.852 1.398C3.824 1.482 3.794 1.56 3.762 1.632L2.034 5.916H5.832ZM7.71 9H7.236C7.18 9 7.134 8.986 7.098 8.958C7.062 8.926 7.034 8.886 7.014 8.838L6.018 6.372H1.848L0.852 8.838C0.836 8.882 0.808 8.92 0.768 8.952C0.728 8.984 0.68 9 0.624 9H0.156L3.63 0.51H4.236L7.71 9ZM12.7807 4.314C12.5527 3.97 12.2987 3.728 12.0187 3.588C11.7427 3.448 11.4267 3.378 11.0707 3.378C10.7187 3.378 10.4107 3.442 10.1467 3.57C9.88266 3.698 9.66066 3.88 9.48066 4.116C9.30466 4.348 9.17066 4.628 9.07866 4.956C8.99066 5.28 8.94666 5.638 8.94666 6.03C8.94666 6.918 9.10866 7.572 9.43266 7.992C9.76066 8.408 10.2327 8.616 10.8487 8.616C11.2407 8.616 11.5987 8.514 11.9227 8.31C12.2467 8.106 12.5327 7.82 12.7807 7.452V4.314ZM13.3507 0.27V9H13.0387C12.9347 9 12.8747 8.948 12.8587 8.844L12.7987 7.902C12.5347 8.262 12.2267 8.548 11.8747 8.76C11.5227 8.972 11.1267 9.078 10.6867 9.078C9.95066 9.078 9.37866 8.824 8.97066 8.316C8.56266 7.808 8.35866 7.046 8.35866 6.03C8.35866 5.594 8.41466 5.188 8.52666 4.812C8.64266 4.432 8.81066 4.104 9.03066 3.828C9.25066 3.548 9.52066 3.328 9.84066 3.168C10.1647 3.008 10.5367 2.928 10.9567 2.928C11.3607 2.928 11.7107 3.002 12.0067 3.15C12.3027 3.298 12.5607 3.518 12.7807 3.81V0.27H13.3507ZM15.316 9V3.03H15.634C15.734 3.03 15.792 3.08 15.808 3.18L15.862 4.044C16.094 3.712 16.36 3.444 16.66 3.24C16.96 3.036 17.298 2.934 17.674 2.934C18.11 2.934 18.458 3.06 18.718 3.312C18.982 3.564 19.16 3.914 19.252 4.362C19.324 4.118 19.424 3.906 19.552 3.726C19.684 3.546 19.834 3.398 20.002 3.282C20.17 3.162 20.352 3.074 20.548 3.018C20.748 2.962 20.952 2.934 21.16 2.934C21.456 2.934 21.722 2.984 21.958 3.084C22.194 3.18 22.394 3.324 22.558 3.516C22.722 3.708 22.848 3.944 22.936 4.224C23.024 4.504 23.068 4.824 23.068 5.184V9H22.498V5.184C22.498 4.6 22.372 4.156 22.12 3.852C21.868 3.544 21.508 3.39 21.04 3.39C20.832 3.39 20.632 3.428 20.44 3.504C20.252 3.58 20.084 3.694 19.936 3.846C19.792 3.994 19.676 4.18 19.588 4.404C19.504 4.628 19.462 4.888 19.462 5.184V9H18.886V5.184C18.886 4.604 18.77 4.16 18.538 3.852C18.31 3.544 17.974 3.39 17.53 3.39C17.206 3.39 16.906 3.486 16.63 3.678C16.354 3.87 16.108 4.136 15.892 4.476V9H15.316ZM25.6083 3.03V9H25.0383V3.03H25.6083ZM25.8543 0.972C25.8543 1.044 25.8383 1.112 25.8063 1.176C25.7783 1.236 25.7403 1.29 25.6923 1.338C25.6443 1.386 25.5883 1.424 25.5243 1.452C25.4603 1.48 25.3923 1.494 25.3203 1.494C25.2483 1.494 25.1803 1.48 25.1163 1.452C25.0523 1.424 24.9963 1.386 24.9483 1.338C24.9003 1.29 24.8623 1.236 24.8343 1.176C24.8063 1.112 24.7923 1.044 24.7923 0.972C24.7923 0.9 24.8063 0.832 24.8343 0.767999C24.8623 0.7 24.9003 0.642 24.9483 0.594C24.9963 0.546 25.0523 0.507999 25.1163 0.48C25.1803 0.452 25.2483 0.438 25.3203 0.438C25.3923 0.438 25.4603 0.452 25.5243 0.48C25.5883 0.507999 25.6443 0.546 25.6923 0.594C25.7403 0.642 25.7783 0.7 25.8063 0.767999C25.8383 0.832 25.8543 0.9 25.8543 0.972ZM28.1902 4.074C28.4662 3.73 28.7842 3.454 29.1442 3.246C29.5082 3.038 29.9122 2.934 30.3562 2.934C30.6842 2.934 30.9722 2.986 31.2202 3.09C31.4722 3.194 31.6802 3.344 31.8442 3.54C32.0082 3.736 32.1322 3.972 32.2162 4.248C32.3002 4.524 32.3422 4.836 32.3422 5.184V9H31.7662V5.184C31.7662 4.624 31.6382 4.186 31.3822 3.87C31.1262 3.55 30.7362 3.39 30.2122 3.39C29.8242 3.39 29.4602 3.49 29.1202 3.69C28.7842 3.886 28.4842 4.16 28.2202 4.512V9H27.6442V3.03H27.9622C28.0622 3.03 28.1202 3.08 28.1362 3.18L28.1902 4.074Z" fill="#EFECEA"/>
                    </svg>
                </div>
            </div>
            <div class="menu__options">
                <router-link to="inventory" class="option__inventory">  
                    <div class="option__content">           
                        <div class="option__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"/>
                                <path d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z" />
                            </svg>
                        </div>
                        <span>Inventory</span>
                    </div> 
                </router-link>
                <router-link to="sales" class="option__sales">
                    <div class="option__content">      
                        <div class="option__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H7C5.9 2 5 2.9 5 4V6C5 7.1 5.9 8 7 8H17C18.1 8 19 7.1 19 6V4C19 2.9 18.1 2 17 2ZM17 6H7V4H17V6ZM20 22H4C2.9 22 2 21.1 2 20V19H22V20C22 21.1 21.1 22 20 22ZM18.53 10.19C18.3722 9.83629 18.1155 9.53575 17.7908 9.32461C17.4661 9.11347 17.0873 9.00074 16.7 9H7.3C6.51 9 5.79 9.47 5.47 10.19L2 18H22L18.53 10.19ZM9.5 16H8.5C8.22 16 8 15.78 8 15.5C8 15.22 8.22 15 8.5 15H9.5C9.78 15 10 15.22 10 15.5C10 15.78 9.78 16 9.5 16ZM9.5 14H8.5C8.22 14 8 13.78 8 13.5C8 13.22 8.22 13 8.5 13H9.5C9.78 13 10 13.22 10 13.5C10 13.78 9.78 14 9.5 14ZM9.5 12H8.5C8.22 12 8 11.78 8 11.5C8 11.22 8.22 11 8.5 11H9.5C9.78 11 10 11.22 10 11.5C10 11.78 9.78 12 9.5 12ZM12.5 16H11.5C11.22 16 11 15.78 11 15.5C11 15.22 11.22 15 11.5 15H12.5C12.78 15 13 15.22 13 15.5C13 15.78 12.78 16 12.5 16ZM12.5 14H11.5C11.22 14 11 13.78 11 13.5C11 13.22 11.22 13 11.5 13H12.5C12.78 13 13 13.22 13 13.5C13 13.78 12.78 14 12.5 14ZM12.5 12H11.5C11.22 12 11 11.78 11 11.5C11 11.22 11.22 11 11.5 11H12.5C12.78 11 13 11.22 13 11.5C13 11.78 12.78 12 12.5 12ZM15.5 16H14.5C14.22 16 14 15.78 14 15.5C14 15.22 14.22 15 14.5 15H15.5C15.78 15 16 15.22 16 15.5C16 15.78 15.78 16 15.5 16ZM15.5 14H14.5C14.22 14 14 13.78 14 13.5C14 13.22 14.22 13 14.5 13H15.5C15.78 13 16 13.22 16 13.5C16 13.78 15.78 14 15.5 14ZM15.5 12H14.5C14.22 12 14 11.78 14 11.5C14 11.22 14.22 11 14.5 11H15.5C15.78 11 16 11.22 16 11.5C16 11.78 15.78 12 15.5 12Z" />
                            </svg> 
                        </div>
                        <span>Sales</span>
                    </div>
                </router-link>
            </div>
                
            <router-link to="/" class="logout">
                <div class="option__content">
                    <div class="option__icon">
                        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.20833 5.20833H9.45833C10.0312 5.20833 10.5 4.73958 10.5 4.16667C10.5 3.59375 10.0312 3.125 9.45833 3.125H3.20833C2.0625 3.125 1.125 4.0625 1.125 5.20833V19.7917C1.125 20.9375 2.0625 21.875 3.20833 21.875H9.45833C10.0312 21.875 10.5 21.4062 10.5 20.8333C10.5 20.2604 10.0312 19.7917 9.45833 19.7917H3.20833V5.20833Z" />
                        <path d="M19.5104 12.1354L16.6042 9.22915C16.5317 9.15472 16.4387 9.10361 16.337 9.08234C16.2354 9.06108 16.1297 9.07064 16.0335 9.10979C15.9373 9.14894 15.855 9.21591 15.797 9.30212C15.7391 9.38833 15.7082 9.48987 15.7083 9.59373V11.4583H8.41667C7.84375 11.4583 7.375 11.9271 7.375 12.5C7.375 13.0729 7.84375 13.5416 8.41667 13.5416H15.7083V15.4062C15.7083 15.875 16.2708 16.1041 16.5938 15.7708L19.5 12.8646C19.7083 12.6666 19.7083 12.3333 19.5104 12.1354Z" />
                        </svg>
                    </div>
                    <span>Log out</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "@/assets/ColorPalette.scss";

	#btn-menu{
        visibility: visible;
        display: none;
        position: relative;
        width: 270px;
        height: 120.93px;
        left: 0px;
        top: -7.5px;
        background: linear-gradient(180deg, #000000 21.97%, #0f0f0f 117.01%);
        z-index: 3;
	}
    .Titulo {
        position: absolute;
        width: 200px;
        height: 40px;
        left: 30px;
        top: 40px;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    }
    *{
        color: $white;
    }
    svg{
        fill: $white;
    }
	.Menu{
        width: 100%;
		position: absolute;
		transition: all 500ms ease;
		opacity: 0;     
	}
    
	#btn-menu:checked ~ .Menu{
		opacity: 1;
		visibility: visible;
        z-index: 1;
	}
	.Menu{
		max-width: 270px;
		background: $dark-grey;
		height: 100%;
		transition: all 500ms ease;
		transform: translateY(-100%);
	}
	#btn-menu:checked ~ .Menu {
		transform: translateY(0%);
        z-index: 1;
             
	}
    .menu__user-information{
        position: absolute;
        width: 270px;
        height: 82px;
        left: 0px;
        top: 125px;
    }
    .menu__photo{
        position: absolute;
        width: 50px;
        height: 50px;
        left: 39px;
        top: 16px;
    }
    .menu__name{
        position: absolute;
        width: 100px;
        height: 19px;
        left: 105px;
        top: 31px;
        font-size: 16px;
        line-height: 19px;
    }
    .menu__role{
        position: absolute;
        width: 34px;
        height: 14px;
        left: 105px;
        top: 50px;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
    }
    .menu__options{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 35px 0px 0px;
        position: absolute;
        width: 270px;
        height: 215px;
        left: 0px;
        top: 200px;
    }
    .option__inventory{
        position: absolute;
        width: 270px;
        height: 60px;
        left: 0px;
        top: 35px;
    }
    .option__content{
        display: flex;
        align-items: center;
        padding: 2px 10px;
        position: absolute;
        width: 180px;
        height: 28px;
        left: 26px;
        top: 16px;
    }
    .option__icon{
        width: 24px;
        height: 24px;
        margin: 0px 10px;
    }
    
    .option__sales{
        position: absolute;
        width: 270px;
        height: 60px;
        left: 0px;
        top: 95px;
    }

    .option__inventory:hover{
		transition: all 400ms ease;
        border-left: 5px solid $white;
		background: linear-gradient(90deg, #FFBF42 0%, rgba(255, 191, 66, 0) 100%);
	}
    .option__sales:hover{
		transition: all 400ms ease;
        border-left: 5px solid $white;
		background: linear-gradient(90deg, #FFBF42 0%, rgba(255, 191, 66, 0) 100%);
	}
    .logout{
        position: absolute;
        width: 270px;
        height: 60px;
        left: 0px;
        top: 400px;
        border-top: 1px solid $white;
    }
 
    .Menu .logout:hover{
        display: block;
		text-decoration: none;
        width: 270px;
		padding: 20px;
		transition: all 400ms ease;
        border-left: 5px solid $white;
		background: linear-gradient(90deg, #FFBF42 0%, rgba(255, 191, 66, 0) 100%);
    }
    .btn-menu--top {
        position: absolute;
        z-index: 3;
        
    }
</style>