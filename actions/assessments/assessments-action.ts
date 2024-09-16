import { wStudentAnswersThootoUrl } from "@/app/lib/endpoints";
import {
  AssessmentResponse,
} from "@/interfaces/assessments/assessments-interface";

type StudentAnswer = {
  questionId: string;
  description: string;
  questionType: string;
  options: Array<{
    label: string;
    questionId: string;
    isCorrect: boolean;
    description: string;
    id: string;
  }>;
  studentMultipleChoiceAnswer: Array<{
    label: string;
    questionId: string;
    isCorrect: boolean;
    description: string;
    id: string;
  }>;
  studentLongTextAnswer: string;
  rubrics: Array<{
    label: string;
    description: string;
    questionId: string;
    id: string;
    facilitatorScore: number;
    moderatorScore: number;
  }>;
  moderatorFeedBack: string;
  score: number;
};

type AssessmentSubmission = {
  assessmentId: string;
  assessmentName: string;
  userId: string;
  answers: StudentAnswer[];
  fileUrl: string;
};

export const submitAssessment = async (
  submission: AssessmentSubmission
): Promise<AssessmentResponse> => {
  try {
    console.log("Submitting assessment:", submission);
    const response = await fetch(
      `${wStudentAnswersThootoUrl}/AddStudentAnswers`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([submission]),
      }
    );

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