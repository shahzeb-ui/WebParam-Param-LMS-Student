import { GET_UNIT_STANDARDS_URL } from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";
import {
  UnitStandardData,
  ApiResponse,
} from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";

export const getAlltUnitStandards = async (
  courseId: string
): Promise<UnitStandardData[]> => {
  try {
    const response = await fetch(GET_UNIT_STANDARDS_URL(courseId), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch unit standards.");
    }

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
