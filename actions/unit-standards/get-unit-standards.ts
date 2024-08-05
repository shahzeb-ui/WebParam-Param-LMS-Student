import { rCourseUrl } from "@/app/lib/endpoints";
import {
  UnitStandardData,
  ApiResponse,
} from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";

export const getAlltUnitStandards = async (
  courseId: string
): Promise<UnitStandardData[]> => {
  try {
    const response = await fetch(
      `${rCourseUrl}KnowledgeModules/GetKnowledgeModules/${courseId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const responseData: ApiResponse = await response.json();

    if (responseData.error) {
      throw new Error(
        responseData.message || "Failed to fetch unit standards."
      );
    }

    return responseData.data;
  } catch (error) {
    console.log("Error fetching unit standards: ", error);
    throw error;
  }
};
