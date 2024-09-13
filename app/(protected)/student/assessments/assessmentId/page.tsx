"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitAssessment } from "@/actions/assessments/assessments-action";
import MultipleChoice from "../../../take-assessment/multipleChoise";
import styles from "@/styles/assessment/assessment.module.css";
import loaderStyles from "@/ui/loader-ui/loader.module.css";

type LongAnswerQuestion = {
  id: string;
  title: string;
  type: string;
  score: string;
};

const AssessmentComponent = () => {
  const router = useRouter();
  const [longQuestions, setLongQuestions] = useState<LongAnswerQuestion[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isInteracted, setIsInteracted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [quizCount, setQuizCount] = useState<number>(0);

  const assessmentId = "66e3cbef3e73f6ee989eaf29";

  useEffect(() => {
    if (assessmentId) {
      // Fetch questions based on assessmentId
      fetch(`https://thooto-dev-be-assessment-read.azurewebsites.net/api/v1/Questions/GetQuestions/${assessmentId}`)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data.data)) {
            const longTextQuestions = data.data.filter((question: any) => question.questionType === "Long Text");
            const quizQuestions = data.data.filter((question: any) => question.questionType === "Quiz");
            setLongQuestions(longTextQuestions);
            setQuizCount(quizQuestions.length);
            setAnswers(Array(longTextQuestions.length).fill(""));
          } else {
            console.error("Unexpected data format:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
        });
    }
  }, [assessmentId]);

  useEffect(() => {
    const savedState = JSON.parse(
      localStorage.getItem("assessmentState") || "{}"
    );
    if (savedState) {
      setAnswers(savedState.answers || Array(longQuestions.length).fill(""));
    }
  }, [longQuestions]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInteracted && timeRemaining !== null) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) =>
          prevTime !== null ? prevTime - 1 : null
        );
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isInteracted, timeRemaining]);

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
    if (!isInteracted) {
      setIsInteracted(true);
      setTimeRemaining(3600);
    }
  };

  const handleSubmitAssessment = async () => {
    saveStateToLocalStorage();
    setIsInteracted(false);
    setLoading(true);

    try {
      const responses = await Promise.all(
        answers.map((answer) =>
          submitAssessment(answer, assessmentId as string)
        )
      );
      console.log("Assessment Submitted:", responses);

      // Handle assessment completion
      console.log("All questions answered. Assessment completed.");
      // Clear local storage and reset answers
      localStorage.removeItem("assessmentState");
      setAnswers(Array(longQuestions.length).fill(""));
      setTimeRemaining(null); // Reset the timer

      setTimeout(() => {
        router.push("/student/assessments?tab=completed");
      }, 2000);
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
        answers,
      })
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
      <div className="inner" style={{ margin: "0 auto" }}>
        <div className="content">
          <div className="quiz-form-wrapper">
            <div className="quize-top-meta">
              <>
                <div className="quize-top-left">
                  <span>
                    Total Marks: <strong>50</strong>
                  </span>
                </div>
                <div className="quize-top-right">
                  <span>
                    Time remaining:{" "}
                    <strong>
                      {timeRemaining !== null
                        ? formatTime(timeRemaining)
                        : "No Limit"}
                    </strong>
                  </span>
                </div>
              </>
            </div>
            <MultipleChoice
              assessmentId={assessmentId as string}
              setIsInteracted={setIsInteracted}
            />
            {longQuestions.map((item, index) => (
              <div key={item.id} id={`question-${index + 1}`} className="question">
                <div className="rbt-single-quiz">
                  <h4 style={{ margin: "0 auto", fontSize: "21px" }}>
                    {quizCount + index + 1}. {item.title}
                  </h4>
                  <div className="row g-3 mt--10">
                    <textarea
                      className={styles.textArea}
                      value={answers[index]}
                      onChange={(e) => handleAnswerChange(e, index)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <hr />
                <div className="quize-top-meta">
                  <div className="quize-top-left">
                    <span>
                      Marks: <strong>{item.score}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.buttonWrapper}>
              <button
                className="rbt-btn btn-sm"
                style={{ backgroundColor: "rgb(36, 52, 92) !important" }}
                type="button"
                onClick={handleSubmitAssessment}
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
        </div>
      </div>
    </div>
  );
};

export default AssessmentComponent;