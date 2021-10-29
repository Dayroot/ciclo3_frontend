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
                
                <div class="name-role-container">
                    <div >
                        <span class="menu__name">Pepito Perez</span>
                    </div>
                    <div>
                        <span class="menu__role">Administrator</span>
                    </div>
                </div>
            </div>
            <div class="menu__options">
                <router-link to="account" class="option">  
                    <div class="option__content">           
                        <div class="option__icon option__icon--n">
                            <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.0164 10.1267C8.09342 10.1267 7.19117 9.85298 6.42374 9.3402C5.65631 8.82742 5.05817 8.09858 4.70496 7.24586C4.35175 6.39314 4.25934 5.45483 4.4394 4.54958C4.61947 3.64434 5.06392 2.81282 5.71657 2.16017C6.36921 1.50753 7.20073 1.06307 8.10598 0.883006C9.01122 0.702941 9.94953 0.795357 10.8023 1.14857C11.655 1.50177 12.3838 2.09991 12.8966 2.86734C13.4094 3.63477 13.6831 4.53702 13.6831 5.46C13.6831 6.69768 13.1914 7.88467 12.3162 8.75984C11.4411 9.63501 10.2541 10.1267 9.0164 10.1267ZM9.0164 2.18C8.35713 2.18 7.71266 2.3755 7.1645 2.74177C6.61634 3.10804 6.18909 3.62864 5.9368 4.23773C5.68451 4.84681 5.6185 5.51704 5.74712 6.16364C5.87573 6.81024 6.1932 7.40419 6.65938 7.87036C7.12555 8.33654 7.7195 8.654 8.3661 8.78262C9.0127 8.91124 9.68292 8.84523 10.292 8.59294C10.9011 8.34064 11.4217 7.9134 11.788 7.36524C12.1542 6.81707 12.3497 6.17261 12.3497 5.51334C12.3497 5.0756 12.2635 4.64214 12.096 4.23773C11.9285 3.83331 11.683 3.46584 11.3734 3.15631C11.0639 2.84679 10.6964 2.60125 10.292 2.43374C9.88759 2.26622 9.45414 2.18 9.0164 2.18V2.18Z" fill="white"/>
                                <path d="M12.7297 10.9333C9.12196 10.1215 5.3477 10.5125 1.98302 12.0466C1.52028 12.2676 1.12986 12.6156 0.857215 13.0499C0.584573 13.4843 0.440931 13.9871 0.443016 14.4999V18.4666C0.443016 18.5542 0.460259 18.6408 0.493763 18.7217C0.527266 18.8026 0.576372 18.8761 0.638278 18.938C0.700183 18.9999 0.773676 19.049 0.85456 19.0825C0.935444 19.116 1.02213 19.1333 1.10968 19.1333C1.19723 19.1333 1.28392 19.116 1.3648 19.0825C1.44569 19.049 1.51918 18.9999 1.58109 18.938C1.64299 18.8761 1.6921 18.8026 1.7256 18.7217C1.7591 18.6408 1.77635 18.5542 1.77635 18.4666V14.4999C1.77054 14.2404 1.84063 13.9848 1.978 13.7646C2.11537 13.5443 2.31406 13.3689 2.54968 13.2599C4.57653 12.3241 6.78389 11.8439 9.01635 11.8533C10.2672 11.8517 11.5138 11.9994 12.7297 12.2933V10.9333Z" fill="white"/>
                                <path d="M12.823 17.2733H16.9163V18.2066H12.823V17.2733Z" fill="white"/>
                                <path d="M20.1764 13.3133H16.7297V14.6466H19.5097V20.2266H10.0631V14.6466H14.2631V14.9266C14.2631 15.1034 14.3333 15.273 14.4583 15.398C14.5834 15.5231 14.7529 15.5933 14.9297 15.5933C15.1065 15.5933 15.2761 15.5231 15.4011 15.398C15.5262 15.273 15.5964 15.1034 15.5964 14.9266V12.3333C15.5964 12.1565 15.5262 11.9869 15.4011 11.8619C15.2761 11.7369 15.1065 11.6666 14.9297 11.6666C14.7529 11.6666 14.5834 11.7369 14.4583 11.8619C14.3333 11.9869 14.2631 12.1565 14.2631 12.3333V13.3133H9.3964C9.21959 13.3133 9.05002 13.3835 8.925 13.5086C8.79997 13.6336 8.72974 13.8031 8.72974 13.98V20.8933C8.72974 21.0701 8.79997 21.2397 8.925 21.3647C9.05002 21.4897 9.21959 21.56 9.3964 21.56H20.1764C20.3532 21.56 20.5228 21.4897 20.6478 21.3647C20.7728 21.2397 20.8431 21.0701 20.8431 20.8933V13.98C20.8431 13.8031 20.7728 13.6336 20.6478 13.5086C20.5228 13.3835 20.3532 13.3133 20.1764 13.3133Z" fill="white"/>
                            </svg>

                        </div>
                        <span>Account</span>
                    </div> 
                </router-link>
                <router-link to="inventory" class="option">  
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
                <router-link to="employees" class="option">
                    <div class="option__content">      
                        <div class="option__icon option__icon--n">
                            <svg width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9C11.3261 9 12.5979 9.52678 13.5355 10.4645C14.4732 11.4021 15 12.6739 15 14V20H5V14C5 12.6739 5.52678 11.4021 6.46447 10.4645C7.40215 9.52678 8.67392 9 10 9ZM3.288 12.006C3.12886 12.5428 3.03485 13.0968 3.008 13.656L3 14V20H9.13169e-08V15.5C-0.000196807 14.6376 0.318028 13.8054 0.893635 13.1632C1.46924 12.521 2.2617 12.1139 3.119 12.02L3.289 12.006H3.288ZM16.712 12.006C17.6019 12.0602 18.4376 12.452 19.0486 13.1012C19.6596 13.7505 19.9999 14.6084 20 15.5V20H17V14C17 13.307 16.9 12.638 16.712 12.006ZM3.5 6C4.16304 6 4.79893 6.26339 5.26777 6.73223C5.73661 7.20107 6 7.83696 6 8.5C6 9.16304 5.73661 9.79893 5.26777 10.2678C4.79893 10.7366 4.16304 11 3.5 11C2.83696 11 2.20107 10.7366 1.73223 10.2678C1.26339 9.79893 1 9.16304 1 8.5C1 7.83696 1.26339 7.20107 1.73223 6.73223C2.20107 6.26339 2.83696 6 3.5 6V6ZM16.5 6C17.163 6 17.7989 6.26339 18.2678 6.73223C18.7366 7.20107 19 7.83696 19 8.5C19 9.16304 18.7366 9.79893 18.2678 10.2678C17.7989 10.7366 17.163 11 16.5 11C15.837 11 15.2011 10.7366 14.7322 10.2678C14.2634 9.79893 14 9.16304 14 8.5C14 7.83696 14.2634 7.20107 14.7322 6.73223C15.2011 6.26339 15.837 6 16.5 6V6ZM10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4C14 5.06087 13.5786 6.07828 12.8284 6.82843C12.0783 7.57857 11.0609 8 10 8C8.93913 8 7.92172 7.57857 7.17157 6.82843C6.42143 6.07828 6 5.06087 6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0V0Z" />
                            </svg> 
                        </div>
                        <span>Employees</span>
                    </div>
                </router-link>
                <router-link to="customers" class="option">
                    <div class="option__content">      
                        <div class="option__icon ">
                            <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2H7C5.9 2 5 2.9 5 4V6C5 7.1 5.9 8 7 8H17C18.1 8 19 7.1 19 6V4C19 2.9 18.1 2 17 2ZM17 6H7V4H17V6ZM20 22H4C2.9 22 2 21.1 2 20V19H22V20C22 21.1 21.1 22 20 22ZM18.53 10.19C18.3722 9.83629 18.1155 9.53575 17.7908 9.32461C17.4661 9.11347 17.0873 9.00074 16.7 9H7.3C6.51 9 5.79 9.47 5.47 10.19L2 18H22L18.53 10.19V10.19ZM9.5 16H8.5C8.22 16 8 15.78 8 15.5C8 15.22 8.22 15 8.5 15H9.5C9.78 15 10 15.22 10 15.5C10 15.78 9.78 16 9.5 16ZM9.5 14H8.5C8.22 14 8 13.78 8 13.5C8 13.22 8.22 13 8.5 13H9.5C9.78 13 10 13.22 10 13.5C10 13.78 9.78 14 9.5 14ZM9.5 12H8.5C8.22 12 8 11.78 8 11.5C8 11.22 8.22 11 8.5 11H9.5C9.78 11 10 11.22 10 11.5C10 11.78 9.78 12 9.5 12ZM12.5 16H11.5C11.22 16 11 15.78 11 15.5C11 15.22 11.22 15 11.5 15H12.5C12.78 15 13 15.22 13 15.5C13 15.78 12.78 16 12.5 16ZM12.5 14H11.5C11.22 14 11 13.78 11 13.5C11 13.22 11.22 13 11.5 13H12.5C12.78 13 13 13.22 13 13.5C13 13.78 12.78 14 12.5 14ZM12.5 12H11.5C11.22 12 11 11.78 11 11.5C11 11.22 11.22 11 11.5 11H12.5C12.78 11 13 11.22 13 11.5C13 11.78 12.78 12 12.5 12ZM15.5 16H14.5C14.22 16 14 15.78 14 15.5C14 15.22 14.22 15 14.5 15H15.5C15.78 15 16 15.22 16 15.5C16 15.78 15.78 16 15.5 16ZM15.5 14H14.5C14.22 14 14 13.78 14 13.5C14 13.22 14.22 13 14.5 13H15.5C15.78 13 16 13.22 16 13.5C16 13.78 15.78 14 15.5 14ZM15.5 12H14.5C14.22 12 14 11.78 14 11.5C14 11.22 14.22 11 14.5 11H15.5C15.78 11 16 11.22 16 11.5C16 11.78 15.78 12 15.5 12Z" />
                            </svg> 
                        </div>
                        <span>Customers</span>
                    </div>
                </router-link>
                <router-link to="analysis" class="option">
                    <div class="option__content">      
                        <div class="option__icon option__icon--n">
                            <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 15.5C0.5 15.1022 0.658035 14.7206 0.93934 14.4393C1.22064 14.158 1.60218 14 2 14H5C5.39782 14 5.77936 14.158 6.06066 14.4393C6.34196 14.7206 6.5 15.1022 6.5 15.5V20C6.5 20.3978 6.34196 20.7794 6.06066 21.0607C5.77936 21.342 5.39782 21.5 5 21.5H2C1.60218 21.5 1.22064 21.342 0.93934 21.0607C0.658035 20.7794 0.5 20.3978 0.5 20V15.5ZM8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V20C14 20.3978 13.842 20.7794 13.5607 21.0607C13.2794 21.342 12.8978 21.5 12.5 21.5H9.5C9.10218 21.5 8.72064 21.342 8.43934 21.0607C8.15804 20.7794 8 20.3978 8 20V9.5ZM15.5 2C15.5 1.60218 15.658 1.22064 15.9393 0.93934C16.2206 0.658035 16.6022 0.5 17 0.5H20C20.3978 0.5 20.7794 0.658035 21.0607 0.93934C21.342 1.22064 21.5 1.60218 21.5 2V20C21.5 20.3978 21.342 20.7794 21.0607 21.0607C20.7794 21.342 20.3978 21.5 20 21.5H17C16.6022 21.5 16.2206 21.342 15.9393 21.0607C15.658 20.7794 15.5 20.3978 15.5 20V2Z"/>
                            </svg> 
                        </div>
                        <span>Analysis</span>
                    </div>
                </router-link>
                <router-link to="" class="option option--logout" @click="setLogOut">
                    <div class="option__content">
                        <div class="option__icon option__icon--n">
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
    </div>
</template>

<script>
export default {
    methods:{
        setLogOut: function(){
            localStorage.clear();
            alert("Sesión Cerrada");
            this.$router.push({ path: "/user/staff-login/" });
        }
    }
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
        display:flex;
        flex-direction: column;
	}
	#btn-menu:checked ~ .Menu {
		transform: translateY(0%);
        z-index: 1;
             
	}
    .menu__user-information{
        width: 270px;
        height: 82px;
        margin-top: 130px ;
        display: flex;
        align-items: center;
        padding-left: 40px;
    }
    .menu__photo{
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .menu__name{
        width: 100px;
        height: 19px;
        font-size: 16px;
    }
    .menu__role{
        width: 34px;
        height: 14px;
        font-size: 12px;
    }
    .menu__options{
        display: flex;
        flex-direction: column;
        padding: 35px 0px 0px;
        width: 270px;
    }
    .option{
        display: flex;
        align-items: center;
        width: 270px;
        height: 60px;
        text-decoration: none;
    }

    .option__content{
        display: flex;
        justify-content: left;
        align-items: center;
        padding-left: 40px;
        width: 180px;
        height: 28px;
    }
    .option__icon{
        display: flex;
        justify-content: left;
        width: 24px;
        height: 24px;
        margin-right:10px;
    }
    .option__icon--n{
        padding-left: 3px;
    }
    .option:hover{
		transition: all 400ms ease;
        border-left: 5px solid $white;
		background: linear-gradient(90deg, #FFBF42 0%, rgba(255, 191, 66, 0) 100%);
	}
    .option--logout{
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