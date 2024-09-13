import React, { useState, useEffect } from 'react';

type Option = {
  id: string;
  label: string;
  questionId: string;
  isCorrect: boolean;
  description: string;
};

type Question = {
  id: string;
  title: string;
  type: string;
  options: Option[];
};

type MultipleChoiceQuestionsProps = {
  assessmentId: string;
  setIsInteracted: (interacted: boolean) => void;
};

const MultipleChoiceQuestions: React.FC<MultipleChoiceQuestionsProps> = ({
  assessmentId,
  setIsInteracted,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    const fetchQuestionsAndOptions = async () => {
      try {
        console.log("Fetching questions for assessmentId:", assessmentId);

        // Fetch questions
        const questionsResponse = await fetch(`https://thooto-dev-be-assessment-read.azurewebsites.net/api/v1/Questions/GetQuestions/${assessmentId}`);
        const questionsData = await questionsResponse.json();
        console.log("Questions data:", questionsData);

        if (Array.isArray(questionsData.data)) {
          // Filter multiple-choice questions
          const multipleChoiceQuestions = questionsData.data.filter((question: any) => question.questionType === "Quiz");
          console.log("Filtered questions:", multipleChoiceQuestions);

          // Fetch options for each multiple-choice question
          const questionsWithOptions = await Promise.all(
            multipleChoiceQuestions.map(async (question: any) => {
              const optionsResponse = await fetch(`https://thooto-dev-be-assessment-read.azurewebsites.net/api/v1/Options/GetOptions/${question.id}`);
              const optionsData = await optionsResponse.json();
              console.log(`Options data for question ${question.id}:`, optionsData);

              return {
                ...question,
                options: Array.isArray(optionsData.data) ? optionsData.data : [],
              };
            })
          );

          setQuestions(questionsWithOptions);
          setSelectedAnswers(Array(questionsWithOptions.length).fill(""));
        } else {
          console.error("Unexpected questions data format:", questionsData);
        }
      } catch (error) {
        console.error("Error fetching questions and options:", error);
      }
    };

    if (assessmentId) {
      fetchQuestionsAndOptions();
    } else {
      console.error("assessmentId is not defined");
    }
  }, [assessmentId]);

  const handleOptionChange = (questionIndex: number, optionLabel: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionLabel;
    setSelectedAnswers(updatedAnswers);
    setIsInteracted(true);
  };

  const handleSubmitAnswers = async () => {
    try {
      // Submit answers
      const response = await fetch(`https://thooto-dev-be-assessment-write.azurewebsites.net/api/v1/StudentAnswers/AddStudentAnswers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: selectedAnswers }),
      });

      if (response.ok) {
        console.log("Answers submitted successfully");
      } else {
        console.error("Error submitting answers:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div>
      {questions.map((q, index) => (
        <div key={q.id} style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '21px' }}>{`${index + 1}. ${q.title}`}</h3>
          {Array.isArray(q.options) ? q.options.map((option) => (
            <div key={option.id}>
              <label
                style={{
                  border: `${selectedAnswers[index] === option.label ? `2px solid ${process.env.NEXT_PUBLIC_PRIMARY_COLOR ?? 'rgb(36, 52, 92)'}` : '2px solid var(--color-border)'}`,
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px',
                  borderRadius: '6px',
                  paddingLeft: '30px',
                  cursor: 'pointer',
                  marginTop: '5px',
                }}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option.label}
                  checked={selectedAnswers[index] === option.label}
                  onChange={() => handleOptionChange(index, option.label)}
                />
                {option.description}
              </label>
            </div>
          )) : (
            <p>No options available for this question.</p>
          )}
          <div className="quize-top-left mt-2">
            <span>
              Marks: <strong>5</strong>
            </span>
          </div>
        </div>
      ))}
      <button onClick={handleSubmitAnswers}>Submit Answers</button>
    </div>
  );
};

export default MultipleChoiceQuestions;