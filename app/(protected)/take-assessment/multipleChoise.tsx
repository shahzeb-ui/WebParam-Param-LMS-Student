import React, { useState, useEffect } from 'react';

type Option = {
  label: string;
  questionId: string;
  isCorrect: boolean;
  description: string;
};

type Question = {
  id: string;
  question: string;
  type: string; // Added type to filter multiple-choice questions
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
        // Fetch questions
        const questionsResponse = await fetch(`/api/assessments/${assessmentId}/questions`);
        const questionsData = await questionsResponse.json();

        // Fetch options
        const optionsResponse = await fetch(`/api/assessments/${assessmentId}/options`);
        const optionsData = await optionsResponse.json();

        // Filter and map options to their corresponding multiple-choice questions
        const multipleChoiceQuestions = questionsData
          .filter((question: any) => question.type === "multiple-choice")
          .map((question: any) => ({
            ...question,
            options: optionsData.filter((option: any) => option.questionId === question.id),
          }));

        setQuestions(multipleChoiceQuestions);
        setSelectedAnswers(Array(multipleChoiceQuestions.length).fill(""));
      } catch (error) {
        console.error("Error fetching questions and options:", error);
      }
    };

    fetchQuestionsAndOptions();
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
      const response = await fetch(`/api/assessments/${assessmentId}/submit`, {
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
          <h3 style={{ fontSize: '21px' }}>{`${index + 1}. ${q.question}`}</h3>
          {q.options.map((option) => (
            <div key={option.label}>
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
          ))}
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