import axios from "axios";
import { deployedUrl } from "../endpoints";


export async function registerUser(payload:any) {
    try {
        const register = await axios.post(`${deployedUrl}/api/v1/Users/RegisterUser`, payload);
        return register;

    } catch(error: any) {
        alert(error);
    }

}

export async function verifyUserAccount(payload:any) {
    try {
        const verify = await axios.post(`${deployedUrl}/api/v1/Users/VerifyOTP`, payload);
        return verify;

    } catch(error: any) {
        alert(error);
    }

}

export async function LoginUser(payload:any) {
    try {
        const register = await axios.post(`${deployedUrl}/api/v1/Users/Login`, payload);
        return register;

    } catch(error: any) {
        alert(error);
    }

}