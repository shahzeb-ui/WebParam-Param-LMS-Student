import axios from "axios";
import { writeUserData } from "@/app/lib/endpoints";


export async function registerUser(payload:any) {
    try {
        const register = await axios.post(`${writeUserData}/api/v1/Users/RegisterStudent`, payload);
        return register;

    } catch(error: any) {
        console.log(error);
    }

}

export async function verifyUserAccount(payload:any) {
    try {
        const verify = await axios.post(`${writeUserData}/api/v1/Users/VerifyOTP`, payload);
        return verify;

    } catch(error: any) {
        console.log(error);
    }

}

export async function LoginUser(payload:any) {
    try {
        const register = await axios.post(`${writeUserData}/api/v1/Users/Login`, payload).then(data => {return data});
        return register;

    } catch(error: any) {
        console.log(error);
    }

}

export async function sendOtp(payload:any) {
    try {
        const sendOtp = await axios.post(`${writeUserData}/api/v1/Users/SendResetPasswordOtp`, payload);
        return sendOtp;
    } catch(error: any) {
        console.log(error);
    }
}

export async function verifyOtp(payload:any) {
    try {
        const verifyOtp = await axios.put(`${writeUserData}/api/v1/Users/ResetPassword`, payload);
        return verifyOtp;
    } catch(error: any) {
        console.log(error);
    }
}
