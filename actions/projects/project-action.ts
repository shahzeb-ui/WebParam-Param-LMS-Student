import { readUserData } from "@/app/api/endpoints";
import { IProject } from "@/interfaces/project/project";

export const getProjects = async (): Promise<IProject[]> => {
    try {
      const response = await fetch(
        `${readUserData}/api/v1/OrganizationProgramEnrollment/GetOrganizationProgramEnrollments`,
        {
          method: "GET",
          headers: {
            Accept: "text/plain",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch logbooks");
      }
  
      const data = await response.json();
      console.log("get logbooks data: ", data);
      return data.data;
    } catch (error) {
      console.error("Error fetching logbooks:", error);
      throw error;
    }
  };
  