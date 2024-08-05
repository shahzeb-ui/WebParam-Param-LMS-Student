export const GET_KNOWLEDGE_TOPICS_URL = (moduleId: string) =>
  `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/KnowledgeTopics/GetKnowledgeTopics/${moduleId}`;

export interface KnowledgeTopic {
  id: string;
  createdAt: string;
  updatedAt: string | null;
  name: string;
  description: string;
  moduleId: string;
  topicCode: string;
  isGenerated: boolean;
  lengthOfVideoScript: number;
}

export interface KnowledgeTopicResponse {
  data: KnowledgeTopic[];
  message: string | null;
  error: boolean;
}
