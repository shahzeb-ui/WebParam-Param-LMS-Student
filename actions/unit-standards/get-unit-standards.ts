import { GET_UNIT_STANDARDS_URL } from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";

export const getAlltUnitStandards = async (courseId:string): Promise<any> => {
    try {
        const response = await fetch(GET_UNIT_STANDARDS_URL(courseId), {
            method: "GET",
            headers: {
                "Accept": "text/plain",
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch unit standards.");
        }

        const data = await response.json();
        console.log("unit standards data: ", data);
        return data;

    } catch (error) {
        console.log("Error fetching unit standards: ", error);
        throw error;
    }
}