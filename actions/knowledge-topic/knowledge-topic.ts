import {
  GET_KNOWLEDGE_TOPICS_URL,
  KnowledgeTopicResponse,
  KnowledgeTopic,
} from "@/interfaces/knowledge/knowledge";

export const fetchKnowledgeTopics = async (
  moduleId: string
): Promise<KnowledgeTopic[]> => {
  try {
    const response = await fetch(GET_KNOWLEDGE_TOPICS_URL(moduleId), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch knowledge topics.");
    }

    const responseData: KnowledgeTopicResponse = await response.json();

    if (responseData.error) {
      throw new Error(
        responseData.message || "Failed to fetch knowledge topics."
      );
    }
    console.log("data: ", response);
    return responseData.data;
  } catch (error) {
    console.error("Error fetching knowledge topics: ", error);
    throw error;
  }
};
