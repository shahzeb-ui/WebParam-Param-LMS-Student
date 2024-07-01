"use client";

import { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import quizData from "@/data/quiz/quiz.json";
import styles from "@/styles/quiz/quiz.module.css";
import modelStyles from "@/styles/modal/modal.module.css";

const LessonQuiz = () => {
  const [next, setNext] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    Array(quizData.length).fill(false)
  ); // Track answered questions
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(quizData.length).fill(null)
  ); // Track selected answers for each question

  useEffect(() => {
    // Load state from local storage on mount
    const storedState = JSON.parse(localStorage.getItem("quizState") || "{}");
    if (storedState.next !== undefined) setNext(storedState.next);
    if (storedState.score !== undefined) setScore(storedState.score);
    if (storedState.answeredQuestions !== undefined)
      setAnsweredQuestions(storedState.answeredQuestions);
    if (storedState.selectedAnswers !== undefined)
      setSelectedAnswers(storedState.selectedAnswers);
  }, []);

  useEffect(() => {
    // Update selected answer when changing questions
    setSelectedAnswer(selectedAnswers[next]);
  }, [next, selectedAnswers]);

  useEffect(() => {
    // Save state to local storage on change
    localStorage.setItem(
      "quizState",
      JSON.stringify({
        next,
        score,
        answeredQuestions,
        selectedAnswers,
      })
    );
  }, [next, score, answeredQuestions, selectedAnswers]);

  const handlePrevious = () => {
    if (next > 0) {
      setNext(next - 1);
      setIsCorrect(null);
    }
  };

  const handleOptionChange = (event: any) => {
    if (!answeredQuestions[next]) {
      setSelectedAnswer(event.target.value);
      setSelectedAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[next] = event.target.value;
        return newAnswers;
      });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (selectedAnswer === quizData[next].answer) {
      setIsCorrect(true);
      setScore(score + 1); // Increment score if answer is correct
    } else {
      setIsCorrect(false);
    }
    setAnsweredQuestions((prev) => {
      const newAnswered = [...prev];
      newAnswered[next] = true; // Mark this question as answered
      return newAnswered;
    });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (next < quizData.length - 1) {
      setNext(next + 1);
      setIsCorrect(null);
    }
  };

  return (
    <>
      <div className="inner">
        <div className="content">
          <form
            id="quiz-form"
            className="quiz-form-wrapper"
            onSubmit={handleSubmit}
          >
            {quizData.map((item, index) => (
              <div
                key={index}
                id={`question-${index + 1}`}
                className={`question ${index === next ? "" : "d-none"}`}
              >
                <div className="quize-top-meta">
                  <div className="quize-top-left">
                    <span>
                      Questions No:{" "}
                      <strong>
                        {index + 1}/{quizData.length}
                      </strong>
                    </span>
                    <span>
                      Points Allocated: <strong>{score}</strong>
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
                    {item.options.map((option, optIndex) => (
                      <div className="col-lg-6" key={optIndex}>
                        <p className="rbt-checkbox-wrapper mb--5">
                          <input
                            id={`rbt-checkbox-${index + 1}-${optIndex}`}
                            name={`rbt-checkbox-${index + 1}`}
                            type="radio"
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={handleOptionChange}
                            disabled={answeredQuestions[index]} // Disable if already answered
                          />
                          <label
                            htmlFor={`rbt-checkbox-${index + 1}-${optIndex}`}
                          >
                            {option}
                          </label>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.buttonWrapper}>
              <button
                className="rbt-btn bg-primary-opacity btn-sm"
                id="prev-btn"
                type="button"
                disabled={next === 0}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="rbt-btn btn-gradient btn-sm ms-2"
                id="submit-btn"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal
        classNames={{ modalContainer: modelStyles.mainModalclassNames }}
        open={showModal}
        onClose={handleModalClose}
        center
      >
        <div className={modelStyles.modalContent}>
          <i
            className={`bi bi-arrow-down-circle ${modelStyles.customIcon}`}
          ></i>
          <h3 className={modelStyles.modalTitle}>Submission Result</h3>
          {isCorrect !== null && (
            <p>{isCorrect ? "Correct answer!" : "Wrong answer!"}</p>
          )}
          <div className={styles.buttonWrapper}>
            <button
              className="rbt-btn bg-primary-opacity btn-sm ms-2"
              onClick={handleModalClose}
            >
              {next < quizData.length - 1 ? "Next Question" : "Close"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LessonQuiz;
