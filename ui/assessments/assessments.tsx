"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/assessment/assessment.module.css";
import assessmentData from "@/data/assessment/assessment.json";

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

  const handleSubmitAssessment = () => {
    saveStateToLocalStorage();
    setIsInteracted(false);
    if (currentIndex < assessment.quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Assessment Submitted: ", answers);
      // Redirect or perform further actions upon submission
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
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  return (
    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
      <div className="inner">
        <div className="content">
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
                disabled={currentIndex === 0}
              >
                Previous Questions
              </button>

              <button
                className="rbt-btn btn-gradient btn-sm"
                type="button"
                onClick={handleSubmitAssessment}
                disabled={!isInteracted}
              >
                {currentIndex === assessment.quizData.length - 1
                  ? "Submit Assessment"
                  : "Submit Assessment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentComponent;
