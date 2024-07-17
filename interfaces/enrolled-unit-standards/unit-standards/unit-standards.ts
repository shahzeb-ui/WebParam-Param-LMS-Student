export const GET_UNIT_STANDARDS_URL = (courseId: string) => `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/Modules/${courseId}`
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
export interface UnitStandardResponse {
    data: UnitStandardData;
    message: string;
    error: boolean;
}
