<template>
    <div class="container">
        <div class="title_container">
            <h1 class="titleAccount">Staff Accounts</h1>
        </div>
            <div class = "containert">
                <div class="form">
                    <div class="formtitulo">
                      USER ACCOUNT
                    </div>
                    <div class="cbtn">
                        <div class="titulod"><label>Personal Information</label></div>
                        <div class="btn">
                        <button>Editar</button></div>
                    </div>
                    <div class="useraccount">
                        <div class="tabla">
                            <div class="nomap">
                                <div class="Nombre">
                                    <div class="texto">
                                    <label> FullName </label></div>
                                    <input type="text" name="nombre" class="cuadro">
                                </div>
                                <div class="Apellidos">
                                    <div class="texto">
                                    <label> UserName </label></div>
                                    <input type="text" name="apellidos" size="20" class="cuadro">
                                </div>
                            </div>
                            <div class="emid">
                                <div class="email">
                                    <div class="texto">
                                    <label> Email </label></div>
                                    <input type="text" name="email" size="20" class="cuadro">
                                </div>
                                <div class="identificacion">
                                    <div class="texto">
                                        <label> Identification </label></div>
                                        <input type="text" name="identificacion" size="20" class="cuadro">
                                    </div>
                            </div>
                            <div class="numdir">
                                <div class="numerotelefono">
                                    <div class="texto">
                                        <label> Phone </label></div>
                                    <input type="text" name="nuemero" size="20" class="cuadro">
                                </div>
                                <div class="direccion">
                                    <div class="texto">
                                        <label> Address </label></div>
                                    <input type="text" name="direccion" size="20" class="cuadro">
                                </div>
                            </div>
                        </div>
                        <div class="cbtn">
                            <div class="titulod"><label>Password</label></div>
                            <div class="btn">
                            <button>Editar</button></div>
                        </div>
                        <div class="contraseña">
                            <div class="password">
                                <div class="texto">
                                        <label> Password </label></div>
                                <input type="text" name="password" size="20" class="cuadro">
                            </div>
                            <div class="Cpassword">
                                <div class="texto">
                                        <label> Confirm Password </label></div>
                                <input type="text" name="Cpassword" size="20" class="cuadro">
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
    </div>
   
</template>

<script>
export default {
    props:["dataAccount"],
    data: function (){
        return {
             user: {
                username: "",
                password: "",
                fullname: "",
                email: "",
                identification: "", 
                phone_number: "",
                address:"",
                is_customer: true, 
            }
        }
    
    } 
      
}
</script>

<style lang="scss" scoped>
    @import "@/assets/ColorPalette.scss";
    .container {
        display: flex;
        align-items:top;
        justify-content: center;
        height: 100vh;
        background-image: url("../../../assets/login/fondo.jpg");
    }
    .titleAccount{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 286px;
        height: 100px;
        font-family: Playfair Display SC;
        font-size: 44.6512px;
        line-height: 60px;
    }
    .containert {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        height: 80vh;
        width: 70vw;
        max-width: 700px;
        background: $light-yellow;
        border-radius: 20px;
    }
    .form{
        display: flex;
        justify-content:center;
        flex-direction: column;
    }
    .formtitulo{
        display: flex;
        justify-content:center;
        align-items: center;
        margin:10px 0px 0px 10px;
        font-size: 20px;
    }
    .cbtn{
        justify-content:none;
        flex-direction: none;
        margin:0px 0px 10px 0px;
        border-bottom: 1px solid 
    }
    .titulod{
        position: absolute;
        display: flex;
        justify-content:left;
        align-items: center;
    }
    .btn{
        display: flex;
        justify-content:right;
        align-items: center;
    }
    button{
        height: 30px;
        width: 60px;
        background: none;
        border:none
        }
    button:hover{
        background:$grey;
    }
    .useraccount{
    }
    .tabla{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
    }
    .nomap{
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .Nombre{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .Apellidos{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .emid{
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .email{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .identificacion{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .numdir{
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .numerotelefono{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .direccion{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .contraseña{
        display: flex;
        justify-content:center;
        align-items: center;
        margin: 10px 0px 0px 0px;
    }
    .password{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .Cpassword{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    input, textarea {
        border  : 10px;
        padding : 10px 10px;
        margin  : 15px;
        width   : 250px;
        background: floralwhite;
    }   
    input:focus, textarea:focus {
        background   : rgba(0,0,0,.1);
        border-radius: 5px;
        outline      : 4px;
    }
    
</style>