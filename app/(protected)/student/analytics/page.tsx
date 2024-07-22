"use client";

import ChartWrapper from "@/ui/analytics/graphs/ChartWrapper";
import {
  options as OverallAssessmentBarOptions,
  data as OverallAssessmentBarData,
  barDescriptions as OverallAssessmentBarDescription,
} from "@/ui/analytics/graphs/OverallAssessment/data";
import {
  options as QuestionsAskedOptions,
  data as QuestionsAskedData,
  barDescriptions as QuestionsAskedDescription,
} from "@/ui/analytics/graphs/QuestionsAsked/data";

import {
  options as OverallQuizBarOptions,
  data as OverallQuizBarData,
  barDescriptions as OverallQuizBarDescription,
} from "@/ui/analytics/graphs/OverallQuiz/data";

import {
  options as CommentsChartBarOptions,
  data as CommentsChartBarData,
  barDescriptions as CommentsChartBarDescription,
} from "@/ui/analytics/graphs/CommentsChart/data";

import { barDescriptions as StudentsProgressStatusDescription } from "@/ui/analytics/graphs/StudentsProgressStatus/data";

import ChartLayout from "@/ui/analytics/graphs/ChartLayout";
import { StudentsProgressStatus } from "@/ui/analytics/graphs/StudentsProgressStatus/StudentsProgressStatus";

export default function PageAnalytics() {
  return (
    <>
      <div className="content">
        <div className="section-title">
          <h4 className="get-4-color rbt-title-style-3">
            <i className="bi bi-clipboard2-data"></i>
            <span className="style-3-left">Analytics</span>
          </h4>
        </div>
        <div className="row mb-lg-8pt"></div>
        <div className="row mb-lg-8pt">
       



        <div
                  className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
                  id="review"
                >
                  <div className="course-content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">Leaderboard</h4>
                    </div>
                    <div className="row g-5 align-items-center">
                      <div className="col-lg-3">
                        <div className="rating-box">
                          <div className="rating-number">71</div>
                          <div className="rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              // className="bi bi-star-half"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> */}
                          </div>
                          <span className="sub-title">You are currently ranked <b> 8th out of 56 </b> participants</span>
                        </div>
                      </div>


                      <div className="col-lg-9">
                        <div className="review-wrapper">
                          <div className="single-progress-bar">
                            <div className="rating-text">
                             <p><small>S.Dzodzo</small></p>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={87}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "87%" }}
                              />
                            </div>
                            <span className="value-text">87%</span>
                          </div>
                          <div className="single-progress-bar">
                            <div className="rating-text">
                             <p><small>J.Dube</small></p>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={87}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "87%" }}
                              />
                            </div>
                            <span className="value-text">87%</span>
                          </div>
                          <div className="single-progress-bar">
                            <div className="rating-text">
                            <p><small>M.van Heerden</small></p>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={86}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "86%" }}
                              />
                            </div>
                            <span className="value-text">86%</span>
                          </div>
                          <div className="single-progress-bar">
                            <div className="rating-text">
                             <p><small>J.Nash</small></p>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              />
                            </div>
                            <span className="value-text">80%</span>
                          </div>
                          <div className="single-progress-bar">
                            <div className="rating-text">
                          <p><small>S.Naidoo</small></p>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              />
                            </div>
                            <span className="value-text">80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



        </div>
        <div className="row card-group-row mt-3">
        <div className="col-lg-6 col-md-12 card-group-row__col">
<div
                  className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--10"
                  id="review"
                >
              
    
  
      <div className="col-lg-12 col-md-12 col-sm-6 col-12">
        <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
          <div className="inner">
            <div className="rbt-round-icon bg-violet-opacity">
              <i className="feather-award" />
            </div>
            <div className="content">
              <h3 className="counter without-icon color-violet">
                <div className="odometer odometer-auto-theme">
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">1</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value"></span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </h3>
              <span className="rbt-title-style-2 d-block">
                New Notification
              </span>
            </div>
          </div>
        </div>
      </div>
                  </div>
                  </div>
          <div className="col-lg-6 col-md-12 card-group-row__col">
            <ChartWrapper
              title="Quiz Attempts"
              barDescriptions={OverallQuizBarDescription}
              options={OverallQuizBarOptions}
              data={OverallQuizBarData}
              type="line"
            />
          </div>

          <div className="col-lg-6 col-md-12 card-group-row__col">
            <ChartWrapper
              title="Assessment Completed"
              barDescriptions={OverallAssessmentBarDescription}
              options={OverallAssessmentBarOptions}
              data={OverallAssessmentBarData}
              type="bar"
            />
          </div>

          <div className="col-lg-6 col-md-12 card-group-row__col">
            <ChartWrapper
              title="Questions Asked"
              barDescriptions={QuestionsAskedDescription}
              options={QuestionsAskedOptions}
              data={QuestionsAskedData}
              type="bar"
            />
          </div>

          {/* <div className="col-lg-6 col-md-12 card-group-row__col">
            <ChartWrapper
              title="Comments"
              barDescriptions={CommentsChartBarDescription}
              options={CommentsChartBarOptions}
              data={CommentsChartBarData}
              type="bar"
            />
          </div> */}
{/* 
          <div className="col-lg-6 col-md-12 card-group-row__col">
            <ChartLayout
              title="Progress Status"
              barDescriptions={StudentsProgressStatusDescription}
              type="pie"
            >
              <StudentsProgressStatus />
            </ChartLayout>
          </div> */}

        </div>
      
      </div>
      
      <br/>
    </>
  );
}
