import axios from "axios";

export async function GetKnowledgeTopicsNew(moduleId:any) {
    try {
        const res = await axios.get( `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/KnowledgeTopics/GetKnowledgeTopics/${moduleId}`);
        console.log("get knowledge topics: ",res)
        return res.data;
    } catch (error:any) {

    }
}

export async function getTopics(topicId:string) {
    try {
        const res = await axios.get( `https://khumla-dev-newcourse-read.azurewebsites.net/api/v1/TopicElements/GetTopicElements/${topicId}`);
        console.log(" topics: ",res)
        return res.data;
    } catch (error:any) {

    }
}