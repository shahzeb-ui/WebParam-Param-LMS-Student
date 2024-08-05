export interface TopicElement {
  id: string;
  description: string;
  videoScript: string;
  videoUrl: string | null;
  topicId: string;
  title: string;
  elementCode: string;
}

export interface TopicElementResponse {
  data: TopicElement[];
  message: string | null;
  error: boolean;
}
