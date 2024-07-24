import axios from "axios";
import { getnotificationUrl } from "../endpoints";

export default async function getNotifications(userId:any) {
    const res = axios.get(`${getnotificationUrl}/api/v1/UserNotifications/GetUserNotifications/${userId}`)
    return res;
}