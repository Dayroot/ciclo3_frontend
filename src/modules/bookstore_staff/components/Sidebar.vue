<template>
    <div>
        <input type="checkbox" id="btn-menu">
        <div class="btn-menu">
            <div class="titulo"><h1>BOOKSTORE</h1></div>
            <label for="btn-menu"><img src="../../../assets/icons/Imagen1.png" width= 270px;
                    height= 120.93px;></label>
        </div>

        <div class="Menu">
            <div class="menu__user-information">
                <div class="menu__photo">
                </div>
                <div class="menu__name">
                    <h>PepitoPérez</h>
                </div>
                <div class="menu__role">
                    <h> Admin</h>     
                </div>
            </div>
            <div class="menu__options">
                <nav>
                    <router-link to="inventory"> <img src="../../../assets/icons/Imagen3.png" position= absolute; width= 24px; height= 24px; left= 10px; top= 2px;>  Inventary</router-link>
                </nav>    
                <nav>
                    <router-link to="sales"><img src="Imagen4.png" position= absolute; width= 24px; height= 24px; left= 10px; top= 2px;>  Sales</router-link>
                </nav>
            </div>
                
            <div class="logout">
                <div class="option__contentL">
                    <div class="Log--out">
                        <img src="../../../assets/icons/Imagen6.png" position= absolute; width= 24px; height= 24px; left= 10px; top= 2px;>
                        <h>  Log out</h>
                    </div>
                </div>
            </div>
            <div class="btn-menu">
                <div class="titulo"><h1>BOOKSTORE</h1></div>
                <label for="btn-menu"><img src="Imagen1.png" width= 270px;
                        height= 120.93px;></label></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="css" scoped>

	
	.btn-menu{
        visibility: visible;
        display: none;
        position: absolute;
        width: 270px;
        height: 120.93px;
        left: 0px;
        top: -7.5px;
        background: linear-gradient(180deg, #000000 21.97%, #0f0f0f 117.01%);
	}
    .titulo {
        position: absolute;
        width: 200px;
        height: 40px;
        left: 30px;
        top: 40px;

        font-family: Playfair Display SC;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        color: #EFECEA;
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    }
	.Menu{
		position: absolute;
		background: #3D3D3D;
		width: 100%;
		height: 100vh;
		top: 0;left: 0;
		transition: all 500ms ease;
		opacity: 0;
		visibility: hidden;
	}
	#btn-menu:checked ~ .Menu{
		opacity: 1;
		visibility: visible;
	}
	.Menu{
        position: absolute;
		width: 100%;
		max-width: 270px;
		background: #2E2B2C;
		height: 100vh;
		transition: all 500ms ease;
		transform: translateY(-100%);
	}
	#btn-menu:checked ~ .Menu {
		transform: translateY(0%);
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
        background: radial-gradient(50% 50% at 50% 50%, #FFBF42 19.06%, #A76D1C 100%);
        border-radius: 90px;
    }
    .menu__name{
        position: absolute;
        width: 89px;
        height: 19px;
        left: 105px;
        top: 31px;

        /* content */

        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        /* ivory-white */

        color: #EFECEA;
    }
    .menu__role{
        position: absolute;
        width: 34px;
        height: 14px;
        left: 105px;
        top: 50px;

        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;

        /* ivory-white */

        color: #EFECEA;
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
    .menu__options nav{
        transform: translateY(15%);
    }
    
    .menu__options nav router-link{
        display: block;
		text-decoration: none;
        width: 270px;
		padding: 20px;
        color: #FFFFFF;
		border-left: 35px solid transparent;
		transition: all 400ms ease;
    }

    .menu__options nav router-link:hover{
		border-left: 5px solid #FFFFFF;
		background: linear-gradient(90deg, #FFBF42 0%, rgba(255, 191, 66, 0) 100%);
	}

    .logout{
        position: absolute;
        width: 270px;
        height: 60px;
        left: 0px;
        top: 470px;
        border-top: 1px solid oldlace;
    }
    .option__contentL{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 2px 10px;
        position: absolute;
        width: 198px;
        height: 29px;
        left: 28px;
        top: 16px;
    }
    .Log--out{
        position: static;
        width: 143px;
        height: 19px;
        left: 45px;
        top: 2px;
        /* content */
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        /* Inside Auto Layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 10px;
    }
    .Menu .logout:hover{
        border-left: 5px solid #FFFFFF;
        background: linear-gradient(90deg, #FFBF42 0%, rgba(255, 191, 66, 0) 100%);
    }
	/*Fin de Menù lateral*/
</style>