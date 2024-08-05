import axios from "axios";
import { wUserUrl } from "@/app/lib/endpoints";

export async function registerUser(payload: any) {
  try {
    const register = await axios.post(
      `${wUserUrl}/Users/RegisterStudent`,
      payload
    );
    return register;
  } catch (error: any) {
    alert(error);
  }
}

export async function verifyUserAccount(payload: any) {
  try {
    const verify = await axios.post(`${wUserUrl}/Users/VerifyOTP`, payload);
    return verify;
  } catch (error: any) {
    alert(error);
  }
}

export async function LoginUser(payload: any) {
  try {
    const register = await axios
      .post(`${wUserUrl}/Users/Login`, payload)
      .then((data) => {
        return data;
      });
    return register;
  } catch (error: any) {
    console.log(error);
  }
}

export async function sendOtp(payload: any) {
  try {
    const sendOtp = await axios.post(
      `${wUserUrl}/Users/SendResetPasswordOtp`,
      payload
    );
    return sendOtp;
  } catch (error: any) {
    alert(error);
  }
}

export async function verifyOtp(payload: any) {
  try {
    const verifyOtp = await axios.put(
      `${wUserUrl}/Users/ResetPassword`,
      payload
    );
    return verifyOtp;
  } catch (error: any) {
    alert(error);
  }
}
