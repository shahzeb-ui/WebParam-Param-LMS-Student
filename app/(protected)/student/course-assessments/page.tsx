"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/assessment/assessment.module.css";
import loaderStyles from "@/ui/loader-ui/loader.module.css";
import assessmentData from "@/data/assessment/assessment.json";
import { submitAssessment } from "@/actions/assessments/assessments-action";
// import Loader from "@/ui/loader-ui/loader";

type AssessmentQuestion = {
  question: string;
};

type AssessmentData = {
  quizData: AssessmentQuestion[];
};

// Cast the imported data to the correct type
const assessment: AssessmentData = assessmentData as AssessmentData;

const AssessmentComponent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(assessment.quizData.length).fill("")
  );
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    Array(assessment.quizData.length).fill(false)
  );
  const [isInteracted, setIsInteracted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedState = JSON.parse(
      localStorage.getItem("assessmentState") || "{}"
    );
    if (savedState) {
      setCurrentIndex(savedState.currentIndex || 0);
      setAnswers(
        savedState.answers || Array(assessment.quizData.length).fill("")
      );
      setAnsweredQuestions(
        savedState.answeredQuestions ||
          Array(assessment.quizData.length).fill(false)
      );
    }
  }, []);

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleTextareaClick = () => {
    setIsInteracted(true);
  };

  const handleNavigation = (direction: string) => {
    saveStateToLocalStorage();
    setIsInteracted(false);
    if (direction === "next" && currentIndex < assessment.quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmitAssessment = async () => {
    saveStateToLocalStorage();
    setIsInteracted(false);
    setLoading(true);
    const courseId = process.env.NEXT_PUBLIC_COURSE_ID??"";
    const title = answers[currentIndex];

    try {
      console.log("Submitting assessment:", { title, courseId });
      const response = await submitAssessment(title, courseId);
      console.log("Assessment Submitted:", response);

      const newAnsweredQuestions = [...answeredQuestions];
      newAnsweredQuestions[currentIndex] = true;
      setAnsweredQuestions(newAnsweredQuestions);

      if (currentIndex < assessment.quizData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Handle assessment completion
        console.log("All questions answered. Assessment completed.");
        // Redirect or perform further actions upon successful submission
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveStateToLocalStorage = () => {
    localStorage.setItem(
      "assessmentState",
      JSON.stringify({
        currentIndex,
        answers,
        answeredQuestions,
      })
    );
  };

  return (
    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
      <div className="inner">
        {/* <div className="content">
          <div className="quiz-form-wrapper">
            {assessment.quizData.map((item, index) => (
              <div
                key={index}
                id={`question-${index + 1}`}
                className={`question ${index === currentIndex ? "" : "d-none"}`}
              >
                <div className="quize-top-meta">
                  <div className="quize-top-left">
                    <span>
                      Question No:{" "}
                      <strong>
                        {index + 1}/{assessment.quizData.length}
                      </strong>
                    </span>
                    <span>
                      Points: <strong>5</strong>
                    </span>
                  </div>
                  <div className="quize-top-right">
                    <span>
                      Time remaining: <strong>No Limit</strong>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="rbt-single-quiz">
                  <h4>
                    {index + 1}. {item.question}
                  </h4>
                  <div className="row g-3 mt--10">
                    <textarea
                      className={styles.textArea}
                      value={answers[index]}
                      onChange={handleAnswerChange}
                      onClick={handleTextareaClick}
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.buttonWrapper}>
              <button
                className="rbt-btn bg-primary-opacity btn-sm"
                type="button"
                onClick={() => handleNavigation("prev")}
                disabled={currentIndex === 0 || loading}
              >
                Previous Questions
              </button>

              <button
                className="rbt-btn btn-gradient btn-sm"
                type="button"
                onClick={handleSubmitAssessment}
                disabled={!isInteracted || loading || !answers[currentIndex]}
              >
                {loading ? (
                  <>
                    <span className={loaderStyles.loaderButton}></span>
                    Submit Assessment
                  </>
                ) : (
                  "Submit Assessment"
                )}
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AssessmentComponent;
