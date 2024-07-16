import axios from "axios";
import { deployedUrl } from "../endpoints";
import { readUserData } from "../endpoints";

let HEADER = {
    "Authorization":"Basic YWRtaW46cmpPdjJhU1omPXxuRDYpJQ==",
    "Access-Control-Allow-Origin": "*",
  };


export async function StudentProfile(payload: any) {
    try {
        debugger;
        const register = await axios.put(`https://khumla-development-user-write.azurewebsites.net/api/v1/Profile/UpdateProfile`,HEADER,payload);
        return register;
    } catch (error: any) {
        alert(error);
    }
}

export async function getStudentProfile(userId:any) {
    try {
        const register = await axios.get(`${readUserData}/api/v1/Profile/GetUserProfile/${userId}`);
        return register;

    } catch(error: any) {
        alert(error);
    }
}

export async function getStudentDocuments(userId:any) {
    try {
        const register = await axios.get(`${readUserData}/api/Documents/GetDocuments/${userId}`);
        return register;

    } catch(error: any) {
        alert(error);
    }
}