
const test = "testing";
const env =  "prod" ;

// const env = process.env.NEXT_PUBLIC_API_URL;

export const writeUserData = `https://thooto-${env}-user-write.azurewebsites.net`;

export const readUserData = `https://thooto-${env}-user-read.azurewebsites.net`;

export const wCourseUrl = `https://thooto-${env}-newcourse-write.azurewebsites.net`;

export const rCourseUrl = `https://thooto-${env}-newcourse-read.azurewebsites.net`;

export const wDocumentUrl = `https://thooto-${env}-document-write.azurewebsites.net`;

export const rDocumentUrl = `https://thooto-${env}-document-read.azurewebsites.net`;

export const rDocumentParaphraseUrl = `https://thooto-${env}-document-parser.azurewebsites.net`;

export const wGenerateVideoScriptUrl = `https://thooto-${env}-document-parser.azurewebsites.net`;

export const wQuizGenerateUrl = `https://thooto-${env}-quiz-generate.azurewebsites.net`;

export const rQuizUrl = `https://thooto-${env}-quiz-read.azurewebsites.net`;

export const wAudioGenerateUrl = `https://thooto-${env}-audio-generate.azurewebsites.net`;

export const wAssessmentUrl =  "https://thooto-development-assessment-write.azurewebsites.net";

export const twAssessmentUrl = `https://thooto-${test}-assessment-write.azurewebsites.net`;

export const rAssessmentUrl = `https://thooto-${env}-assessment-read.azurewebsites.net`;

export const wQuestionUrl = `https://thooto-${env}-assessment-write.azurewebsites.net/api/Questions`;

export const rAggregatorUrl = `https://thooto-${env}-api-aggregator.azurewebsites.ne1`;

export const rAggregator = `https://thooto-${test}-aggregator.azurewebsites.net`;

export const wRubricUrl = `https://thooto-${env}-assessment-write.azurewebsites.net/api/Rubrics`;

export const rRubricUrl = `https://thooto-${env}-assessment-read.azurewebsites.net/api/v1/Rubrics`;

export const wOptionUrl = `https://thooto-${env}-assessment-write.azurewebsites.net/api/Options`;

export const rOptionUrl = `https://thooto-${env}-assessment-read.azurewebsites.net/api/v1/Options`;

export const rKnowledgeModuleUrl = `https://thooto-${env}-newcourse-read.azurewebsites.net`;

export const rAnalyticUrl = `https:thooto-${env}-activity-read.azurewebsites.net`;

export const getCodesUrl = `https://thooto-${env}-user-read.azurewebsites.net`;

export const rNotificationUrl = `https://thooto-${env}-notification-read.azurewebsites.net`;

export const wNotificationUrl = `https://thooto-${env}-notification-write.azurewebsites.net`;

export const wLoogBookUrl = `https://thooto-${env}-logbook-write.azurewebsites.net`;

export const rLoogBookUrl = `https://thooto-${env}-logbook-read.azurewebsites.net`;
