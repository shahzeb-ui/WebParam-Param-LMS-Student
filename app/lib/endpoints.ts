
const test = "testing";
const env = process.env.NEXT_PUBLIC_API_ENV == "production" ? "prod" : "dev";

// const env = process.env.NEXT_PUBLIC_API_URL;

export const writeUserData = `https://khumla-${env}-user-write.azurewebsites.net`;

export const readUserData = `https://khumla-${env}-user-read.azurewebsites.net`;

export const wCourseUrl = `https://khumla-${env}-newcourse-write.azurewebsites.net`;

export const rCourseUrl = `https://khumla-${env}-newcourse-read.azurewebsites.net`;

export const wDocumentUrl = `https://khumla-${env}-document-write.azurewebsites.net`;

export const rDocumentUrl = `https://khumla-${env}-document-read.azurewebsites.net`;

export const rDocumentParaphraseUrl = `https://khumla-${env}-document-parser.azurewebsites.net`;

export const wGenerateVideoScriptUrl = `https://khumla-${env}-document-parser.azurewebsites.net`;

export const wQuizGenerateUrl = `https://khumla-${env}-quiz-generate.azurewebsites.net`;

export const rQuizUrl = `https://khumla-${env}-quiz-read.azurewebsites.net`;

export const wAudioGenerateUrl = `https://khumla-${env}-audio-generate.azurewebsites.net`;

export const wAssessmentUrl =  "https://khumla-development-assessment-write.azurewebsites.net";

export const twAssessmentUrl = `https://khumla-${test}-assessment-write.azurewebsites.net`;

export const rAssessmentUrl = `https://khumla-${env}-assessment-read.azurewebsites.net`;

export const wQuestionUrl = `https://khumla-${env}-assessment-write.azurewebsites.net/api/Questions`;

export const rAggregatorUrl = `https://khumla-${env}-api-aggregator.azurewebsites.ne1`;

export const rAggregator = `https://khumla-${test}-aggregator.azurewebsites.net`;

export const wRubricUrl = `https://khumla-${env}-assessment-write.azurewebsites.net/api/Rubrics`;

export const rRubricUrl = `https://khumla-${env}-assessment-read.azurewebsites.net/api/v1/Rubrics`;

export const wOptionUrl = `https://khumla-${env}-assessment-write.azurewebsites.net/api/Options`;

export const rOptionUrl = `https://khumla-${env}-assessment-read.azurewebsites.net/api/v1/Options`;

export const rKnowledgeModuleUrl = `https://khumla-${env}-newcourse-read.azurewebsites.net`;

export const rAnalyticUrl = `https:khumla-${env}-activity-read.azurewebsites.net`;

export const getCodesUrl = `https://khumla-${env}-user-read.azurewebsites.net`;

export const rNotificationUrl = `https://khumla-${env}-notification-read.azurewebsites.net`;

export const wNotificationUrl = `https://khumla-${env}-notification-write.azurewebsites.net`;

export const wLoogBookUrl = `https://khumla-${env}-logbook-write.azurewebsites.net`;

export const rLoogBookUrl = `https://khumla-${env}-logbook-read.azurewebsites.net`;

