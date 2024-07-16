"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/ui/lesson/side.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import LessonData from "@/data/lessons/lesson.json";
import { FetchParaphrase } from "@/actions/paraphase/paraphase-action";

interface LessonItem {
  lssonLink: string;
  lessonName: string;
  iconFile?: boolean;
  iconHelp?: boolean;
  lable: boolean;
  time: number;
  unread: boolean;
  isCircle: boolean;
}

interface Lesson {
  title: string;
  isShow: boolean;
  listItem: LessonItem[];
}

interface LessonDataStructure {
  lesson: Lesson[];
  lessonQuiz?: any[];
}

interface ParaphraseResponse {
  data: {
    id: string;
    title: string;
    videoUrl: string | null;
  };
  message: string;
  error: boolean;
}

const LessonSidebar = () => {
  const path = usePathname();
  const isActive = (href: string) => path === href;
  const [paraphraseData, setParaphraseData] = useState<ParaphraseResponse[]>(
    []
  );

  const lessonsPerPage = 5;
  const [lessons, setLessons] = useState(
    (LessonData as LessonDataStructure).lesson.slice(0, lessonsPerPage)
  );
  const [hasMore, setHasMore] = useState(
    (LessonData as LessonDataStructure).lesson.length > lessonsPerPage
  );

  const fetchMoreData = () => {
    if (lessons.length >= (LessonData as LessonDataStructure).lesson.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setLessons((prevLessons) =>
        prevLessons.concat(
          (LessonData as LessonDataStructure).lesson.slice(
            prevLessons.length,
            prevLessons.length + lessonsPerPage
          )
        )
      );
    }, 500);
  };

  const getAllParaphrase = async () => {
    try {
      const data: ParaphraseResponse[] = await FetchParaphrase(
        "6666b907de3aebf48aa068e7"
      );
      console.log("paraphrase data: ", data);
      setParaphraseData(data);
    } catch (error) {
      console.error("Fetching paraphrase error: ", error);
    }
  };

  useEffect(() => {
    getAllParaphrase();
  }, []);

  return (
    <div>
      <div className="rbt-course-feature-inner rbt-search-activation">
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
          <div className="accordion" id="accordionExampleb2">
            <InfiniteScroll
              dataLength={lessons.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b></b>
                </p>
              }
            >
              {lessons.map((data, index) => (
                <div className="accordion-item card" key={index}>
                  <h2
                    className="accordion-header card-header"
                    id={`headingTwo${index + 1}`}
                  >
                    <button
                      className={`accordion-button ${
                        !data.isShow ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      aria-expanded={data.isShow}
                      data-bs-target={`#collapseTwo${index + 1}`}
                      aria-controls={`collapseTwo${index + 1}`}
                    >
                      {data.title}
                      <span className="rbt-badge-5 ml--10">
                        1/{data.listItem.length}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`collapseTwo${index + 1}`}
                    className={`accordion-collapse collapse ${
                      data.isShow ? "show" : ""
                    }`}
                    aria-labelledby={`headingTwo${index + 1}`}
                  >
                    <div className="accordion-body card-body">
                      <ul className="rbt-course-main-content liststyle">
                        {data.listItem.map((innerData, innerIndex) => (
                          <li key={innerIndex}>
                            <Link
                              className={
                                isActive(innerData.lssonLink) ? "active" : ""
                              }
                              href={`${innerData.lssonLink}`}
                            >
                              <div className="course-content-left">
                                {innerData.iconHelp ? (
                                  <i className="feather-help-circle"></i>
                                ) : (
                                  <i
                                    className={`feather-${
                                      innerData.iconFile
                                        ? "file-text"
                                        : "play-circle"
                                    }`}
                                  ></i>
                                )}
                                <span className="text">
                                  {innerData.lessonName}
                                </span>
                              </div>
                              <div className="course-content-right">
                                {innerData.lable && innerData.time > 0 ? (
                                  <span className="min-lable">
                                    {innerData.time} min
                                  </span>
                                ) : (
                                  ""
                                )}
                                <span
                                  className={`rbt-check ${
                                    isActive(innerData.lssonLink)
                                      ? ""
                                      : "unread"
                                  }`}
                                >
                                  <i
                                    className={`feather-${
                                      isActive(innerData.lssonLink)
                                        ? "check"
                                        : "circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {/* <ul>
                      {paraphraseData.map((item, index) => (
                        <li key={index}>
                          {item.data.videoUrl ? (
                            <a
                              style={{ textDecoration: "none" }}
                              href={item.data.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.data.title}
                            </a>
                          ) : (
                            <span>{item.data.title}</span>
                          )}
                        </li>
                      ))}
                    </ul> */}
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
