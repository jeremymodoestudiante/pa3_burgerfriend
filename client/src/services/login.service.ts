import type { UserLogIn } from "../types/User";

const API_URL = "http://localhost:3001/api/users/login";


export const loginUser = async(body: UserLogIn) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    const result = await res.json();
    if(result.token){
        console.log(result);
        //lo guardo en local storage el token
        localStorage.setItem("token", result.token);
    }else{
        localStorage.removeItem("token");
    }
    
    return result;
}