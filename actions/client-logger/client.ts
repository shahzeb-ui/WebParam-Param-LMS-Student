import { Diagnostic } from "./logger";
import axios, { AxiosResponse } from "axios";

const token = "";
console.log(token);
let header: any;
header = {
  Authorization: "Basic YWRtaW46cmpPdjJhU1omPXxuRDYpJQ==",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  "ngrok-skip-browser-warning": "any",
};

export async function GET(endPoint: string, updateUserActivity: () => void): Promise<any> {
  try {
    const result = fetch(endPoint, {
      method: "get",
      headers: header,
    }).then(function (response) {
      updateUserActivity();
      return response.json();
    });

    return result;
  } catch (error: any) {
    console.log(
      `[API ERROR  : Method: GET; Endpoint: ${endPoint}]`,
      error.toJSON()
    );
    return error.response;
  }
}

export async function POST(endPoint: string, payload: Object, updateUserActivity: () => void): Promise<any> {
  try {
    const result = await axios.post(`${endPoint}`, payload, {
      headers: header,
    });
    updateUserActivity();
    Diagnostic("SUCCESS ON POST, returning", result);
    return result.data;
  } catch (error: any) {
    console.log(`[API ERROR : Method: POST; Endpoint: ${endPoint}]`, error);
    Diagnostic("ERROR ON POST, returning", error);
    return error.response;
  }
}

export function DELETE(endPoint: string, updateUserActivity: () => void): Promise<any> {
  let HEADER = {
    Authorization: "Basic YWRtaW46cmpOdjJhU1omPXxuRDYpJQ==",
    "Access-Control-Allow-Origin": "*",
  };

  return axios
    .delete(`${endPoint}`, { headers: HEADER })
    .then((result: AxiosResponse) => {
      updateUserActivity();
      return result.data;
    })
    .catch((error: any) => {
      return error;
    });
}

export function PUT(endPoint: string, payload: Object, updateUserActivity: () => void): Promise<any> {
  let HEADER = {
    Authorization: "Basic YWRtaW46cmpOdjJhU1omPXxuRDYpJQ==",
    "Access-Control-Allow-Origin": "*",
  };

  return axios
    .put(`${endPoint}`, payload, { headers: HEADER })
    .then((result: AxiosResponse) => {
      updateUserActivity();
      return result.data;
    })
    .catch((error: any) => {
      return error;
    });
}