// Define the API URL
export const GET_PRACTICAL_KNOWLEDGE_MODULES_URL = (courseId: string) =>
  `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/KnowledgeModules/GetPracticalKnowledgeModules/${courseId}`;

// Define the types for the response data
export interface KnowledgeModuleData {
  id: string;
  createdAt: string;
  updatedAt: string | null;
  courseId: string;
  title: string;
  description: string;
  moduleCode: string;
  isPractical: boolean;
}

export interface ApiResponse {
  data: KnowledgeModuleData[];
  message: string | null;
  error: boolean;
}

export const getPracticalKnowledgeModules = async (
  courseId: string
): Promise<KnowledgeModuleData[]> => {
  try {
    const response = await fetch(
      GET_PRACTICAL_KNOWLEDGE_MODULES_URL(courseId),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch practical knowledge modules.");
    }

    const responseData: ApiResponse = await response.json();

    if (responseData.error) {
      throw new Error(
        responseData.message || "Failed to fetch practical knowledge modules."
      );
    }

    return responseData.data;
  } catch (error) {
    console.log("Error fetching practical knowledge modules: ", error);
    throw error;
  }
};
