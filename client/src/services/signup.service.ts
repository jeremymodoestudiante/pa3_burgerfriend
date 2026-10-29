import type { UserSignUp } from "../types/User";

const API_URL = "http://localhost:3001/api/users/register";

export const registerUser = async(body: UserSignUp) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    return res.json();
}