"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "@/ui/lesson/side.module.css";
import { fetchTopicElements } from "@/actions/paraphase/paraphase-action";
import { fetchKnowledgeTopics } from "@/actions/knowledge-topic/knowledge-topic";
import { useVideo } from "@/context/video-context/video-context";
import { useLessonContext } from "@/context/lesson-context/lesson-context";
import { KnowledgeTopic } from "@/interfaces/knowledge/knowledge";
import LessonData from "@/data/lessons/lesson.json";
import { TopicElement } from "@/interfaces/pharaphase/paraphase-d";

const LessonSidebar = () => {
  const { setId, navigateToLesson } = useLessonContext();
  const { setSelectedVideoUrl } = useVideo();
  const [knowledgeTopics, setKnowledgeTopics] = useState<KnowledgeTopic[]>([]);
  const [expandedTopics, setExpandedTopics] = useState<{
    [key: string]: TopicElement[];
  }>({});
  const [expandedQuizzes, setExpandedQuizzes] = useState<{
    [key: string]: boolean;
  }>({});
  const [expandedAssignments, setExpandedAssignments] = useState<{
    [key: string]: boolean;
  }>({});
  const [expandedAssessments, setExpandedAssessments] = useState<{
    [key: string]: boolean;
  }>({});
  const [isActiveUrl, setIsActiveUrl] = useState<string | null>(null);

  useEffect(() => {
    const getAllKnowledgeTopics = async (id: string) => {
      try {
        const topics = await fetchKnowledgeTopics(id);
        console.log("Fetched knowledge topics: ", topics);
        setKnowledgeTopics(topics);

        // Automatically expand the first topic if it exists
        if (topics.length > 0) {
          const firstTopicId = topics[0].id;
          const elements = await fetchTopicElements(firstTopicId);
          setExpandedTopics((prevState) => ({
            ...prevState,
            [firstTopicId]: elements,
          }));

          const firstVideoUrl = elements.find((el) => el.videoUrl)?.videoUrl;
          if (firstVideoUrl) {
            setSelectedVideoUrl(firstVideoUrl);
            setIsActiveUrl(firstVideoUrl);
          }
        }
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
          setIsActiveUrl(firstVideoUrl);
        }
      } catch (error) {
        console.error("Error fetching topic elements: ", error);
      }
    }
  };

  const handleActiveVideoUrl = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsActiveUrl(videoUrl);
  };

  const handleToggle = (setFunction: any, id: any) => {
    setFunction((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className={styles.lessonScrollSidebar}>
      <div className="rbt-course-feature-inner rbt-search-activation">
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
          <div className="accordion" id="accordionExampleb2">
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
                    <span
                      style={{
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "280px",
                      }}
                    >
                      {topic.name}
                    </span>
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
                        {expandedTopics[topic.id].map((element, elIndex) => (
                          <React.Fragment key={element.id}>
                            <li className="d-flex justify-content-between align-items mt-2">
                              <div className="course-content-left">
                                <i
                                  className="feather-play-circle"
                                  style={{
                                    color:
                                      isActiveUrl == element.videoUrl
                                        ? "#2f57ef"
                                        : "#6b7385",
                                  }}
                                ></i>
                                <p
                                  onClick={() =>
                                    element.videoUrl &&
                                    handleActiveVideoUrl(element.videoUrl)
                                  }
                                  style={{
                                    cursor: element.videoUrl
                                      ? "pointer"
                                      : "default",
                                    textDecoration: "none",
                                    fontWeight:
                                      isActiveUrl == element.videoUrl
                                        ? "bold"
                                        : "normal",
                                    color:
                                      isActiveUrl == element.videoUrl
                                        ? "#2f57ef"
                                        : "#6b7385",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    maxWidth: "240px",
                                  }}
                                >
                                  {element.title}
                                </p>
                              </div>
                              <div className="course-content-right">
                                <span
                                  className={`rbt-check ${
                                    isActiveUrl === element.videoUrl
                                      ? ""
                                      : "unread"
                                  }`}
                                >
                                  <i
                                    className={`feather-${
                                      isActiveUrl === element.videoUrl
                                        ? "check"
                                        : "circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            </li>

                            {/* Quizzes Section */}
                            {LessonData.lesson
                              .filter((lesson) => lesson.title.includes("quiz"))
                              .map((quiz, quizIndex) => (
                                <li
                                  key={`quiz-${elIndex}-${quizIndex}`}
                                  className="d-flex justify-content-between align-items mt-2"
                                >
                                  <div className="course-content-left">
                                    <i
                                      className="feather-help-circle"
                                      style={{
                                        color:
                                          isActiveUrl == quiz.title
                                            ? "#2f57ef"
                                            : "#6b7385",
                                      }}
                                    ></i>
                                    <p>
                                      <a href={quiz.listItem[0].lssonLink}>
                                        {quiz.title}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="course-content-right">
                                    <span
                                      className={`rbt-check ${
                                        isActiveUrl === quiz.title
                                          ? ""
                                          : "unread"
                                      }`}
                                    >
                                      <i
                                        className={`feather-${
                                          isActiveUrl === quiz.title
                                            ? "check"
                                            : "circle"
                                        }`}
                                      ></i>
                                    </span>
                                  </div>
                                </li>
                              ))}
                          </React.Fragment>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assessments Section */}
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion mt-4">
          {LessonData.lesson
            .filter((lesson) => lesson.title.includes("Assessments"))
            .map((assessment, index) => (
              <div className="accordion-item card" key={`assessment-${index}`}>
                <h2
                  className="accordion-header card-header"
                  id={`assessmentHeading${index}`}
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded={!!expandedAssessments[index]}
                    data-bs-target={`#assessmentCollapse${index}`}
                    aria-controls={`assessmentCollapse${index}`}
                    onClick={() => handleToggle(setExpandedAssessments, index)}
                  >
                    {assessment.title}
                  </button>
                </h2>
                <div
                  id={`assessmentCollapse${index}`}
                  className={`accordion-collapse collapse ${
                    expandedAssessments[index] ? "show" : ""
                  }`}
                  aria-labelledby={`assessmentHeading${index}`}
                >
                  <div className="accordion-body card-body">
                    <ul className="rbt-course-main-content liststyle">
                      {assessment.listItem.map((item, idx) => (
                        <li key={idx}>
                          <p>
                            <a href={item.lssonLink}>{item.lessonName}</a>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Assignments Section */}
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion mt-4">
          {LessonData.lesson
            .filter((lesson) => lesson.title.includes("Assignments"))
            .map((assignment, index) => (
              <div className="accordion-item card" key={`assignment-${index}`}>
                <h2
                  className="accordion-header card-header"
                  id={`assignmentHeading${index}`}
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded={!!expandedAssignments[index]}
                    data-bs-target={`#assignmentCollapse${index}`}
                    aria-controls={`assignmentCollapse${index}`}
                    onClick={() => handleToggle(setExpandedAssignments, index)}
                  >
                    {assignment.title}
                  </button>
                </h2>
                <div
                  id={`assignmentCollapse${index}`}
                  className={`accordion-collapse collapse ${
                    expandedAssignments[index] ? "show" : ""
                  }`}
                  aria-labelledby={`assignmentHeading${index}`}
                >
                  <div className="accordion-body card-body">
                    <ul className="rbt-course-main-content liststyle">
                      {assignment.listItem.map((item, idx) => (
                        <li key={idx}>
                          <p>
                            <a href={item.lssonLink}>{item.lessonName}</a>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LessonSidebar;
