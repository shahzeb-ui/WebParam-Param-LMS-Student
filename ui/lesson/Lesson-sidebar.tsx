"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "@/ui/lesson/side.module.css";
import { fetchTopicElements } from "@/actions/paraphase/paraphase-action";
import { fetchKnowledgeTopics } from "@/actions/knowledge-topic/knowledge-topic";
import { useVideo } from "@/context/video-context/video-context";
import { useLessonContext } from "@/context/lesson-context/lesson-context";
import { KnowledgeTopic } from "@/interfaces/knowledge/knowledge";
import { TopicElement } from "@/interfaces/pharaphase/paraphase-d";

const LessonSidebar = () => {
  const { setId, navigateToLesson } = useLessonContext();
  const { setSelectedVideoUrl } = useVideo();
  const [knowledgeTopics, setKnowledgeTopics] = useState<KnowledgeTopic[]>([]);
  // const [lessons, setLessons] = useState<Lesson[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState<{
    [key: string]: TopicElement[];
  }>({});

  useEffect(() => {
    const getAllKnowledgeTopics = async (id: string) => {
      try {
        const topics = await fetchKnowledgeTopics(id);
        console.log("Fetched knowledge topics: ", topics);
        setKnowledgeTopics(topics);
      } catch (error) {
        console.error("Error fetching knowledge topics: ", error);
      }
    };

    const savedId = localStorage.getItem("lessonId");
    if (savedId) {
      getAllKnowledgeTopics(savedId);
    }
  }, []);

  const handleTopicClick = async (topicId: string) => {
    if (!expandedTopics[topicId]) {
      try {
        const elements = await fetchTopicElements(topicId);
        setExpandedTopics((prevState) => ({
          ...prevState,
          [topicId]: elements,
        }));

        const firstVideoUrl = elements.find((el) => el.videoUrl)?.videoUrl;
        if (firstVideoUrl) {
          setSelectedVideoUrl(firstVideoUrl);
        }
      } catch (error) {
        console.error("Error fetching topic elements: ", error);
      }
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className="rbt-course-feature-inner rbt-search-activation">
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
          <div className="accordion" id="accordionExampleb2">
            <InfiniteScroll
              dataLength={knowledgeTopics.length}
              next={() => {}}
              hasMore={false}
              loader={<h4>Loading...</h4>}
            >
              {knowledgeTopics.map((topic, index) => (
                <div className="accordion-item card" key={topic.id}>
                  <h2
                    className="accordion-header card-header"
                    id={`heading${index + 1}`}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      aria-expanded={!!expandedTopics[topic.id]}
                      data-bs-target={`#collapse${index + 1}`}
                      aria-controls={`collapse${index + 1}`}
                      onClick={() => handleTopicClick(topic.id)}
                    >
                      {topic.name}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${
                      expandedTopics[topic.id] ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index + 1}`}
                  >
                    <div className="accordion-body card-body">
                      {expandedTopics[topic.id] && (
                        <ul className="rbt-course-main-content liststyle">
                          {expandedTopics[topic.id].map((element) => (
                            <li key={element.id}>
                              <p
                                onClick={() =>
                                  setSelectedVideoUrl(element.videoUrl)
                                }
                                style={{
                                  cursor: element.videoUrl
                                    ? "pointer"
                                    : "default",
                                  textDecoration: "none",
                                }}
                              >
                                <strong>{element.title}</strong>
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonSidebar;
