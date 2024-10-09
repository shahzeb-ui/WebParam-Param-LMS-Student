import { get, post, put } from "../../lib/util";
import { Diagnostic } from "../../lib/util-logger";
import { rAssessmentUrl } from "@/app/lib/endpoints";

export const getAssignments = async (id:string) => {
    try {
        const resp = await get(`${rAssessmentUrl}/api/v1/Assignment/GetAssignments/${id}`);
        const data = resp.data;
        Diagnostic("SUCCESS ON GET, returning", data);
        return data;
      } catch (err) {
        Diagnostic("ERROR ON GET, returning", err);
        throw err;
      }
  };