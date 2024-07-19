"use client";

import ChartWrapper from "@/ui/analytics/graphs/ChartWrapper";
import {
  options as OverallAssessmentBarOptions,
  data as OverallAssessmentBarData,
  barDescriptions as OverallAssessmentBarDescription,
} from "@/ui/analytics/graphs/OverallAssessment/data";
// import {
//   options as QuestionsAskedOptions,
//   data as QuestionsAskedData,
//   barDescriptions as QuestionsAskedDescription,
// } from "@/ui/analytics/graphs/QuestionsAsked/data";

import {
  options as OverallQuizBarOptions,
  data as OverallQuizBarData,
  barDescriptions as OverallQuizBarDescription,
} from "@/ui/analytics/graphs/OverallQuiz/data";

// import {
//   options as CommentsChartBarOptions,
//   data as CommentsChartBarData,
//   barDescriptions as CommentsChartBarDescription,
// } from "@/ui/analytics/graphs/CommentsChart/data";

// import { barDescriptions as StudentsProgressStatusDescription } from "@/ui/analytics/graphs/StudentsProgressStatus/data";

// import ChartLayout from "@/ui/analytics/graphs/ChartLayout";
// import { StudentsProgressStatus } from "@/ui/analytics/graphs/StudentsProgressStatus/StudentsProgressStatus";

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
        <div className="row card-group-row">
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
        </div>
      </div>
    </>
  );
}
