import { GET_UNIT_STANDARDS_URL } from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";
import { UnitStandardResponse, UnitStandardData} from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";

export const getAlltUnitStandards = async (courseId:string): Promise<UnitStandardData[]> => {
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

        const data: UnitStandardResponse[] = await response.json();
        // console.log("unit standards data: ", data);

        // Extract data from each item in the array
        const unitStandards = data.map(item => item.data);
        return unitStandards;

    } catch (error) {
        console.log("Error fetching unit standards: ", error);
        throw error;
    }
}
