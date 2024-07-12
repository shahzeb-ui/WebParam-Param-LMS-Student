import { ADD_NEW_ASSESSMENT_URL } from "@/interfaces/assessments/assessments-interface";

export const addNewAssessment = async (title: string, courseId: string) => {
  try {
    const response = await fetch(ADD_NEW_ASSESSMENT_URL, {
      method: 'POST',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, courseId }),
    });

    if (!response.ok) {
      throw new Error('Failed to add new assessment.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding new assessment:', error);
    throw error;
  }
};
