import jwt_decode from "jwt-decode";

const isAuthenticatedStaff = async(to, from, next) => {
    return new Promise( () => {
        const is_auth = localStorage.getItem("isAuthStaff") || false;
        if (is_auth == false){
            next({ path: '/user/staff-login/'})
        }else {
            const token = localStorage.getItem("token_access")
            const dateTimeExp = new Date( ( jwt_decode(token).exp )*1000 );
            const dateNow = new Date( Date.now() )
            if( dateTimeExp.getTime() > dateNow.getTime() ){
                next()
            }else{
                alert("Your session has expired!")
                next({ path: '/user/staff-login/'})
            }
            
        }
    })
}

export default isAuthenticatedStaff