"use client";

import { useState, useEffect } from "react";
import quizData from "@/data/quiz/quiz.json";
import styles from "@/styles/quiz/quiz.module.css";
import './quiz.scss'

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

const LessonQuiz = ({setVideoEnded, handleNext}:any) => {
  const [next, setNext] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
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
  };

  const handleOptionClick = (questionIndex: number, option: string) => {
    setSelectedAnswer(option);
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = option;
      return newAnswers;
    });

    const correctAnswer = currentQuiz[questionIndex].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
    }

    setAnsweredQuestions((prev) => {
      const newAnswered = [...prev];
      newAnswered[questionIndex] = true;
      return newAnswered;
    });
  };

  const handleRetake = () => {
    initializeQuiz();
  };

  return (
    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
      <div className="inner">
        <div className="content">
            <div className="quiz-form-wrapper">
                {currentQuiz.map((item, index) => (
                    <div
                        key={index}
                        id={`question-${index + 1}`}
                        className={`question ${index === next ? "" : "d-none"}`}
                    >
                        <div className="quize-top-meta">
                            <div className="quize-top-left">
                                <span>
                                <i style={{color:"limegreen"}} className="feather-award" />
                                <small>    <b>   Points: </b>{score} </small>
                                </span>
                            </div>
                            <div className="quize-top-right">
                                <span>
                                <i style={{color:"orange"}} className="feather-clock" />
                                <small>       <b>    Time remaining: </b> No Limit </small>
                                </span>
                            </div>
                        </div>
                        <h4 style={{ 
                          color: '#24345c', 
                          marginTop: '20px', 
                          marginBottom: '20px',
                          fontSize: '16px'  
                        }}>
                          {index + 1}. {item.question}
                        </h4>
                        <div className="mt--10">
                          {item.options.map((option, optIndex) => (
                            <div className="w-100 mb-3" key={optIndex}>
                              <label
                                htmlFor={`rbt-checkbox-${index + 1}-${optIndex}`}
                                style={{
                                  border: selectedAnswers[index] === option ? '1px solid rgb(36, 52, 92)' : '1px solid #e0e0e0',
                                  borderRadius: '8px',
                                  padding: '10px 15px',
                                  width: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleOptionClick(index, option)}
                              >
                                <div
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    border: '2px solid rgb(36, 52, 92)',
                                    marginRight: '10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                  }}
                                >
                                  {selectedAnswers[index] === option && (
                                    <div
                                      style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: 'rgb(36, 52, 92)'
                                      }}
                                    />
                                  )}
                                </div>
                                <span style={{ 
                                  color: '#6f7285',
                                  fontSize: '14px'  
                                }}>
                                  {option}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                <div className={styles.buttonWrapper}>
                  <button
                    className="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
                    id="retake-btn"
                    type="button"
                    onClick={handleRetake}
                    disabled={!answeredQuestions.some((answered) => answered)}
                  >
                    New
                  </button>

                  <button
                    className="rbt-btn icon-hover btn-sm"
                    style={{ width: '150px' }}
                    id="next-btn"
                    type="button"
                    onClick={() => {setVideoEnded(false), handleNext()}}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default LessonQuiz;