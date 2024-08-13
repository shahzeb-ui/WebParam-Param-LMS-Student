export const GET_TOPIC_ELEMENTS_URL = (topicId: string) =>
  `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/TopicElements/GetTopicElements/${topicId}`;

export interface TopicElement {
  id: string;
  description: string;
  videoScript: string;
  videoUrl: string | null;
  topicId: string;
  title: string;
  elementCode: string;
  isQuizGenerated: any;
}

export interface TopicElementResponse {
  data: TopicElement[];
  message: string | null;
  error: boolean;
}
