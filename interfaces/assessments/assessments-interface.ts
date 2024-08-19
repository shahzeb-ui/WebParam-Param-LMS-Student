export interface AssessmentResponse {
  data: {
    id: string;
    title: string;
    courseId: string;
  };
  message: string | null;
  error: boolean;
}
