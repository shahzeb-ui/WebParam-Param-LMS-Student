import axios from "axios";
import { rUserUrl, wUserUrl } from "@/app/lib/endpoints";

export async function StudentProfile(payload: any) {
  try {
    const register = await axios.put(
      `${wUserUrl}/Profile/UpdateProfile`,
      payload
    );
    return register;
  } catch (error: any) {
    console.log(error);
  }
}

export async function updateDemographicsInformation(payload: any) {
  try {
    const res = await axios.put(
      `${wUserUrl}/Student/UpdateStudentDemographicsInformation`,
      payload
    );
    return res;
  } catch (error: any) {
    console.log(error);
  }
}

export async function updateContactInformation(payload: any) {
  try {
    const res = await axios.put(
      `${wUserUrl}/Student/UpdateStudentContactInformation`,
      payload
    );
    return res;
  } catch (error: any) {
    console.log(error);
  }
}

export async function updateEmployeeInformation(payload: any) {
  try {
    const res = await axios.put(
      `${wUserUrl}/Student/UpdateStudentEmployeeInformation`,
      payload
    );
    return res;
  } catch (error: any) {
    console.log(error);
  }
}

export async function updateRegionalInformation(payload: any) {
  try {
    const res = await axios.put(
      `${wUserUrl}/Student/UpdateStudentRegionalInformation`,
      payload
    );
    return res;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getStudentProfile(userId: any) {
  try {
    const register = await axios.get(
      `${rUserUrl}/Profile/GetUserProfile/${userId}`
    );
    return register;
  } catch (error: any) {
    console.log(error);
  }
}

export const getStudentData = async (studentId: string) => {
  const resp = await axios.get(
    `${rUserUrl}/Student/GetStudentInformation/${studentId} `
  );
  return resp.data;
};

export async function getStudentDocuments(userId: any) {
  try {
    const register = await axios.get(
      `${rUserUrl}/Documents/GetDocuments/${userId}`
    );
    return register;
  } catch (error: any) {
    console.log(error);
  }
}
