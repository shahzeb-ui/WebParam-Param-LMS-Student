export const GET_UNIT_STANDARDS_URL = (courseId: string) =>
  `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/KnowledgeModules/GetKnowledgeModules/${courseId}`;
export interface UnitStandardData {
  id: string;
  title: string;
  courseId: string;
  description: string;
  status: number;
  lengthOfParagraph: string;
  documentTone: string;
  audioVoice: string | null;
  createdAt: string;
  updatedAt: string | null;
  queryPrompt: string | null;
  noOfDocuments: number;
}

export interface ApiResponse {
  data: UnitStandardData[];
  message: string | null;
  error: boolean;
}

