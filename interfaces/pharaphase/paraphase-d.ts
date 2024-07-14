export const PARAPHRASE_URL = 'https://khumla-development-newcourse-read.azurewebsites.net/api/v1/Paraphrase';

export interface ParaphraseData {
    id: string;
    title: string;
    description: string;
    documentId: string;
    audioBlobUrl: string;
    audioStatus: number;
    status: number;
    videoUrl: string | null;
    createdAt: string;
    updatedAt: string;
    isSystemGenerated: boolean;
    isQuizGenerated: boolean;
    isAudioGenerated: boolean;
}

export interface ParaphraseResponse {
    data: ParaphraseData;
    message: string;
    error: boolean;
}
