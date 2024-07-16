import {
  ADD_NEW_ASSESSMENT_URL,
  AssessmentResponse,
} from "@/interfaces/assessments/assessments-interface";

export const submitAssessment = async (
  title: string,
  courseId: string
): Promise<AssessmentResponse> => {
  try {
    console.log("Submitting assessment:", { title, courseId });
    const response = await fetch(ADD_NEW_ASSESSMENT_URL, {
      method: "POST",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, courseId }),
    });

    console.log("Response status:", response.status);
    if (!response.ok) {
      console.error("Failed to submit assessment", response);
      throw new Error("Failed to submit assessment");
    }

    const data = await response.json();
    console.log("Response data:", data);
    return data;
  } catch (error) {
    console.error("Submit assessment error:", error);
    throw error;
  }
};
