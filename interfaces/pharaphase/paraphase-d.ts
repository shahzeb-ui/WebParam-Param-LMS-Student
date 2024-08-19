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
