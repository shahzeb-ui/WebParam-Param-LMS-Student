"use client";

import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import quizData from "@/data/quiz/quiz.json";
import styles from "@/styles/quiz/quiz.module.css";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

const LessonQuiz = () => {
  const [next, setNext] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    Array(quizData.length).fill(false)
  );
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(quizData.length).fill(null)
  );
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    initializeQuiz();
  }, []);

  useEffect(() => {
    setSelectedAnswer(selectedAnswers[next]);
  }, [next, selectedAnswers]);

  useEffect(() => {
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

  const initializeQuiz = () => {
    const shuffledQuestions = quizData.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    setCurrentQuiz(selectedQuestions);

    setNext(0);
    setScore(0);
    setAnsweredQuestions(Array(selectedQuestions.length).fill(false));
    setSelectedAnswers(Array(selectedQuestions.length).fill(null));
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!answeredQuestions[next]) {
      setSelectedAnswer(event.target.value);
      setSelectedAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[next] = event.target.value;
        return newAnswers;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (answeredQuestions[next]) {
      setNext((prevNext) => prevNext + 1);
    } else {
      if (selectedAnswer === currentQuiz[next].answer) {
        setIsCorrect(true);
        setScore(score + 1);
      } else {
        setIsCorrect(false);
      }
      setAnsweredQuestions((prev) => {
        const newAnswered = [...prev];
        newAnswered[next] = true;
        return newAnswered;
      });
    }
  };

  const handleNext = () => {
    window.location.href = "/lesson";
  };

  const handleRetake = () => {
    initializeQuiz();
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
            {currentQuiz.map((item, index) => (
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
                        {index + 1}/{currentQuiz.length}
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
                            disabled={answeredQuestions[index]}
                          />
                          <label
                            htmlFor={`rbt-checkbox-${index + 1}-${optIndex}`}
                            className={
                              answeredQuestions[index]
                                ? option === item.answer
                                  ? styles.correct
                                  : selectedAnswers[index] === option
                                  ? styles.wrong
                                  : styles.wrong
                                : ""
                            }
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
                className="rbt-btn bg-primary-opacity btn-sm ms-2"
                id="retake-btn"
                type="button"
                onClick={handleRetake}
                disabled={!answeredQuestions.some((answered) => answered)}
              >
                Retake Quiz
              </button>

              <button
                className="rbt-btn btn-gradient btn-sm ms-2"
                id="submit-btn"
                type="submit"
                disabled={
                  !selectedAnswer ||
                  answeredQuestions.every((answered) => answered)
                }
              >
                Submit
              </button>

              <button
                className="rbt-btn btn-gradient btn-sm ms-2"
                id="next-btn"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LessonQuiz;
