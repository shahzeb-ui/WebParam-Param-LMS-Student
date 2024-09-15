import { GET, PUT } from "@/app/lib/api-client";
import { rCourseUrl, readUserData, writeUserData } from "@/app/lib/endpoints";
import axios from "axios";


export async function StudentProfile(payload: any) {
    try {
        // const register = await axios.put(`${writeUserData}/api/v1/Profile/UpdateProfile`,payload);
        const res = await PUT( payload,`${writeUserData}/api/v1/Profile/UpdateProfile`,);
        return res;
    } catch (error: any) {
        console.log(error);
    }
}

export async function updateDemographicsInformation(payload: any) {
    try {
        // const res = await axios.put(`${writeUserData}/api/v1/Student/UpdateStudentDemographicsInformation`,payload);
        const res = await PUT(payload,`${writeUserData}/api/v1/Student/UpdateStudentDemographicsInformation`, );
        return res;
    } catch (error: any) {
        console.log(error);
    }
}

export async function updateContactInformation(payload: any) {
    try {
        // const res = await axios.put(`${writeUserData}/api/v1/Student/UpdateStudentContactInformation`,payload);
        const res = await PUT( payload,`${writeUserData}/api/v1/Student/UpdateStudentContactInformation`);
        return res;
    } catch (error: any) {
        console.log(error);
    }
}

export async function updateEmployeeInformation(payload: any) {
    try {
        // const res = await axios.put(`${writeUserData}/api/v1/Student/UpdateStudentEmployeeInformation`,payload);
        const res = await PUT(payload,`${writeUserData}/api/v1/Student/UpdateStudentEmployeeInformation`);
        return res;
    } catch (error: any) {
        console.log(error);
    }
}

export async function updateRegionalInformation(payload: any) {
    try {
        // const res = await axios.put(`${writeUserData}/api/v1/Student/UpdateStudentRegionalInformation`,payload);
        const res = await PUT( payload,`${writeUserData}/api/v1/Student/UpdateStudentRegionalInformation`,);
        return res;
    } catch (error: any) {
        console.log(error);
    }
}

export async function getStudentProfile(userId: any) {
    try {
        // const register = await axios.get(`${readUserData}/api/v1/Profile/GetUserProfile/${userId}`
        // );
        // const register = await axios.get(`${readUserData}/api/v1/Profile/GetUserProfile/${userId}`);
        const res = await GET(`${readUserData}/api/v1/Profile/GetUserProfile/${userId}`);
        return res;
    } catch (error: any) {
        console.log(error);
    }
}

export const getStudentData = async (studentId: string) => {
    // const resp = await axios.get(`${readUserData}/api/v1/Student/GetStudentInformation/${studentId} `)
    const res = await GET(`${readUserData}/api/v1/Student/GetStudentInformation/${studentId} `);
    return res.data
}


export async function getStudentDocuments(userId: any) {
    try {
        // const register = await axios.get(`${readUserData}/api/v1/Documents/GetDocuments/${userId}`);
        const res = await GET(`${readUserData}/api/v1/Documents/GetDocuments/${userId}`);
        return res;

    } catch (error: any) {
        console.log(error);
    }
}




export async function getDocumentsByCourseId(courseId: any) {
    try {
        //TODO: BRAD: Pass in id from env for boundlesss
        //  const register = await axios.get(`https://khumla-prod-newcourse-read.azurewebsites.net/api/v1/Document/GetCourseDocuments/66aa8c8245223bcb337a9641`);

        // const register = await axios.get(`${readUserData}/api/v1/Documents/GetDocuments/${courseId}`);
        const res = await GET(`${readUserData}/api/v1/Documents/GetDocuments/${courseId}`);
        return res;

    } catch (error: any) {
        console.log(error);
    }
}
