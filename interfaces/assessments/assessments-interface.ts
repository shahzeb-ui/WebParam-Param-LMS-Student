export const ADD_NEW_ASSESSMENT_URL =
  "https://khumla-development-assessment-write.azurewebsites.net/api/v1/Assessments/AddNewAssessment";

export interface AssessmentResponse {
  data: {
    id: string;
    title: string;
    courseId: string;
  };
  message: string | null;
  error: boolean;
}
