"use client";

import "./lesson.scss";
import styles from "@/styles/video/ResponsiveVideoComponent.module.css";
import { GetKnowledgeTopicsNew, getTopics } from "@/app/api/lesson/lessonEndpoint";
import { TopicElement } from "@/interfaces/pharaphase/paraphase-d";
import Notes from "@/ui/lesson/notes/notes";
import QuestionAndAnswers from "@/ui/lesson/question-answers/question-answer";
import Overview from "@/ui/overview/overview";
import Transcript from "@/ui/transcript/transcript";
import Link from "next/link";
import { useEffect, useState, useRef, Suspense } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LessonQuiz from "../lesson/quiz/page";
import { cardVideos } from "./data";
import { useSearchParams } from "next/navigation";
import Loader from "@/ui/loader/loader";
import ResponsiveVideoComponent from "@/ui/synthesia/synthesia-video-frame";
import { VideoProvider } from "@/context/video-context/video-context";
import Plyr from "plyr";

function OnboardingVdeos({props}:any) {
  const [currentVideo, setCurrentVideo] = useState<any>();
  const [knowledgeTopics, setKnowledgeTopics] = useState<any[]>([]);
  const [videoLoader, setVideoLoader] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<{
    [key: string]: TopicElement[];
  }>({});
  const [checkedSubTopics, setCheckedSubTopics] = useState<{
    [key: string]: boolean;
  }>({});
  const [error, setError] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const topicRef = useRef<HTMLLIElement>(null);

  const searchparams = useSearchParams();

  const title = searchparams.get("title");

  useEffect(() => {
    setVideoLoader(true);
  }, []);


  const handleSubTopicClick = (subTopic: TopicElement, index: number) => {
    setVideoLoader(true);
    setCheckedSubTopics((prev) => ({
      ...prev,
      [subTopic.id]: !prev[subTopic.id],
    }));
    console.log("selected topic for video:", subTopic);
    setCurrentVideo(subTopic || null);
    setCurrentIndex(index);
    setVideoEnded(false);
    setVideoLoader(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };


  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  if (error) return (
    <div className="error-area">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-10">
            <h1 className="title">404!</h1>
            <h3 className="sub-title">Page not found</h3>
            <p>The page you were looking for could not be found.</p>
            <a className="rbt-btn btn-gradient icon-hover" href="/">
              <span className="btn-text">Back To My Courses</span>
              <span className="btn-icon">
                <i className="feather-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const filteredVideos = cardVideos.filter(items => items.title == title);

  console.log('filtered: ', filteredVideos);

  function handlePrevious(): void {
    if (currentIndex > 0) {
      const previousIndex = currentIndex - 1;
      setCurrentIndex(previousIndex);
      setCurrentVideo(filteredVideos[0].videos[previousIndex]);
      setVideoEnded(false);
    }
  }
  
  function handleNext(): void {
    if (currentIndex < filteredVideos[0].videos.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentVideo(filteredVideos[0].videos[nextIndex]);
      setVideoEnded(false);
    }
  }


  return (
    <div className="rbt-lesson-area bg-color-white">
      <div className="rbt-lesson-content-wrapper">
        {/* Sidebar */}
        <div className="rbt-lesson-leftsidebar">
          <div className="rbt-course-feature-inner rbt-search-activation">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Course Content</h4>
            </div>
            <div className="lesson-search-wrapper">
              <form action="#" className="rbt-search-style-1">
                <input
                  className="rbt-search-active"
                  type="text"
                  placeholder="Search Lesson"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="search-btn disabled">
                  <i className="feather-search" />
                </button>
              </form>
            </div>
            <hr className="mt--10" />
            <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                  >
                    <button
                    
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                    
                      aria-expanded="false"
                      style={{fontSize:'16px'}}
                    >
                      {title??""}
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExampleb2"
                  >
                    <div className="accordion-body card-body">
                      {filteredVideos[0].videos ? (
                        <ul style={{marginLeft:'0', paddingLeft:'0'}}>
                          {filteredVideos[0].videos?.map(
                            (subTopic: any, subIndex:any) => (
                              <>
                              <li
                                ref={subIndex === 0 ? topicRef : null}
                                className="d-flex justify-content-between align-items mt-2"
                                key={subIndex}
                                onClick={() => handleSubTopicClick(subTopic, subIndex)}
                                style={{ color: `${currentVideo?.id === subTopic.id && 'rgb(47, 87, 239)'}` }}
                              >
                                <div
                                  className="course-content-left topic_Element_container"
                                  style={{
                                    overflow: "hidden",
                                    display: "flex",
                                    gap: "18x",
                                    alignItems: "center",
                                    width:'100%'
                                  }}
                                >
                                  {currentVideo?.id == subTopic.id ? <i className="bi bi-pause-circle-fill" style={{marginRight:'15px'}}></i>:<i className="feather-play-circle icon" style={{marginRight:'15px'}} />}
                                  <p
                                    className="topic-Element-Title"
                                    style={{
                                      fontSize: 13,
                                      cursor: "pointer",
                                      textDecoration: "none",
                                      fontWeight: "bold",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textWrap: "wrap",
                                    }}
                                  >
                                    {subTopic.title}
                                  </p>
                                </div>
                                <div className="course-content-right">
                                  <span className="rbt-check ">
                                    {currentVideo?.id === subTopic.id ? (
                                      <i className="feather-check" />
                                    ) : (
                                      <i className="feather-square" />
                                    )}
                                  </span>
                                </div>
                              </li>
                              </>
                            )
                          )}
                        </ul>
                      ) : (
                        <div>Loading topics...</div>
                      )}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* End of Sidebar */}
        <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
          {!videoEnded ? <div className="inner">
            {!videoLoader ? (
              <>
                  <div className={styles.jss8}>
                    <figure className={`${styles.css1vl7155} ${styles.e1fj0tsm3}`}>
                      <div className={styles.cssb98nv4}>
                        <canvas className={styles.css1q19oq5}></canvas>
                        <div className={styles.cssq6awd8}></div>
                        <div
                          className={styles.cssl7x8s3}
                          style={{ width: "100%", height: "100%" }}
                        >
                          <iframe
                            src={currentVideo?.videoUrl}
                            loading="lazy"
                            title={`Synthesia video player - KM01-KT0101 ${currentVideo?.title}`}
                            allowFullScreen
                            allow="encrypted-media; fullscreen;"
                            onLoad={() => setVideoLoader(false)}
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              top: 0,
                              left: 0,
                              border: "none",
                              padding: 0,
                              margin: 0,
                              overflow: "hidden",
                              
                            }}
                          ></iframe>
                        </div>
                      </div>
                      <div
                        className={`${styles.cssjemxbu} ${styles.played} ${styles.showOnlyTimelineWithoutControls}`}
                      >
                        <div className={styles.css5f7vge}>
                          <div className={styles.css1k3btty}></div>
                          <div className={styles.css9tskdo}>
                            <div className={styles.css1n3scyi}>
                              <div className={styles.css9g9i5v}>
                                <div className={styles.css859fep}></div>
                                <div className={styles.MuiBoxRoot}>
                                  <div className={styles.MuiBoxRootTime}>
                                    <span
                                      className={`${styles.MuiTypographyRoot} ${styles.MuiTypographyBodyMedium2}`}
                                    >
                                      00:31
                                    </span>
                                  </div>
                                  <div className={styles.cssux22lo}>
                                    <div className={styles.csskuymjs}>
                                      <div
                                        className={styles.css1fxbdpm}
                                        //   style={{ "--videoplayer-currenttime": "69.983%" }}
                                      ></div>
                                      <div className={styles.cssy3ngs}></div>
                                      <div className={styles.cssg6ppkv}></div>
                                    </div>
                                  </div>
                                  <div className={styles.MuiBoxRootDuration}>
                                    <span
                                      className={`${styles.MuiTypographyRoot} ${styles.MuiTypographyBodyMedium2}`}
                                    >
                                      00:45
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.MuiBoxRoot}>
                                <div className={styles.MuiBoxRoot}>
                                  <div className={styles.cssrq27us}>
                                    <svg
                                      className={styles.MuiSvgIconRoot}
                                      focusable="false"
                                      aria-hidden="true"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.24421 0.420799C3.24422 -0.150621 2 0.571431 2 1.72316V14.2768C2 15.4285 3.24422 16.1506 4.24421 15.5792L15.2286 9.30235C16.2364 8.72651 16.2364 7.27346 15.2286 6.69762L4.24421 0.420799Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div className={styles.csskd7unw}>
                                    <div className={styles.csszxonyc}>
                                      <div className={styles.cssnejomu}>
                                        <span
                                          className={`${styles.MuiSliderRoot} ${styles.MuiSliderColorPrimary} ${styles.MuiSliderSizeSmall}`}
                                        >
                                          <span className={styles.MuiSliderRail}></span>
                                          <span
                                            className={styles.MuiSliderTrack}
                                            style={{ left: "0%", width: "100%" }}
                                          ></span>
                                          <span
                                            data-index="0"
                                            className={`${styles.MuiSliderThumb} ${styles.MuiSliderThumbSizeSmall} ${styles.MuiSliderThumbColorPrimary}`}
                                            style={{ left: "100%" }}
                                          ></span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.csskd7unw}>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </div>
                <div>
                  <div className="content">
                    <div className="section-title">
                      <h5><u>{currentVideo?.title}</u></h5>
                    </div>
                    <div className="rbt-button-group">
                      <button
                        className="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
                        onClick={handlePrevious}
                        disabled={currentIndex <= 0}
                      >
                        <span className="btn-icon">
                          <i className="feather-arrow-left" />
                        </span>
                        <span className="btn-text">Previous</span>
                      </button>
                      <button
                        className="rbt-btn icon-hover btn-md"
                        onClick={handleNext}
                        disabled={currentIndex > (filteredVideos[0].videos.length - 1)}
                      >
                        <span className="btn-text">Next</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </button>
                    </div>
                    <div className="content-2">
                      <div className="advance-tab-button mb--30">
                        <ul
                          className="nav nav-tabs tab-button-style-2 justify-content-start"
                          id="myTab-4"
                          role="tablist"
                        >
                          <li role="presentation">
                            <Link
                              href="#"
                              className="tab-button active"
                              id="overview-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#overview-4"
                              role="tab"
                              aria-controls="overview-4"
                              aria-selected="true"
                            >
                              <span className="title">Overview</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link
                              href="#"
                              className="tab-button"
                              id="transcript-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#transcript-4"
                              role="tab"
                              aria-controls="transcript-4"
                              aria-selected="false"
                            >
                              <span className="title">Transcript</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link
                              href="#"
                              className="tab-button"
                              id="q&a-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#q&a-4"
                              role="tab"
                              aria-controls="q&a-4"
                              aria-selected="false"
                            >
                              <span className="title">Q&A</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link
                              href="#"
                              className="tab-button"
                              id="notes-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#notes-4"
                              role="tab"
                              aria-controls="notes-4"
                              aria-selected="false"
                            >
                              <span className="title">Notes</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="overview-4"
                        role="tabpanel"
                        aria-labelledby="overview-tab-4"
                      >
                        <Overview currentVideo={currentVideo} />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="transcript-4"
                        role="tabpanel"
                        aria-labelledby="transcript-tab-4"
                      >
                        <Transcript currentVideo={currentVideo} />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="q&a-4"
                        role="tabpanel"
                        aria-labelledby="q&a-tab-4"
                      >
                        <QuestionAndAnswers />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="notes-4"
                        role="tabpanel"
                        aria-labelledby="notes-tab-4"
                      >
                        <Notes />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <SkeletonTheme baseColor="#fff" highlightColor="#EBEBEB">
                    <Skeleton width="100%" height="700px" />
                    <p style={{position:'absolute', top:'25%', left:"50%",transform: "translate(-50%, -50%)"}}><i className="bi bi-arrow-left"></i> click video to play</p>
                </SkeletonTheme>
              </div>
            )}
          </div>
          :
          <div className="inner">
            <LessonQuiz setVideoEnded={setVideoEnded} handleNext={handleNext} />
          </div>}
        </div>
      </div>
    </div>

  );
}

const OnboardingVdeosContainer = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OnboardingVdeos />
    </Suspense>
  );
};

export default OnboardingVdeosContainer;