import axios from "axios";
import { deployedUrl } from "../endpoints";
import { readUserData } from "../endpoints";


export async function StudentProfile(payload:any) {
    try {
        const register = await axios.post(`${deployedUrl}/api/v1/Profile/SubmitStudentDetails`, payload);
        return register;

    } catch(error: any) {
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
        const register = await axios.get(`${readUserData}/api/v1/Profile/GetDocuments/${userId}`);
        return register;

    } catch(error: any) {
        alert(error);
    }
}