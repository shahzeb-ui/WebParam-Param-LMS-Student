import React, { useState } from 'react';

const MultipleChoiceQuestions = ({ setIsInteracted }: any) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(5).fill(''));

  const questions = [
    {
      question: "What is the primary role of a project manager?",
      options: [
        "To develop software",
        "To design marketing strategies",
        "To oversee and manage project progress",
        "To manage the company's finances"
      ],
      answer: "To oversee and manage project progress"
    },
    {
      question: "Which document outlines the objectives, scope, and participants in a project?",
      options: [
        "Project Charter",
        "Business Plan",
        "Risk Management Plan",
        "Stakeholder Analysis"
      ],
      answer: "Project Charter"
    },
    {
      question: "What is a Gantt Chart used for?",
      options: [
        "Tracking project milestones",
        "Managing project budget",
        "Scheduling project tasks",
        "Conducting risk analysis"
      ],
      answer: "Scheduling project tasks"
    },
    {
      question: "What does the term 'scope creep' refer to in project management?",
      options: [
        "Increased project costs",
        "Uncontrolled changes in the project scope",
        "Delays in project timeline",
        "Decrease in project quality"
      ],
      answer: "Uncontrolled changes in the project scope"
    },
    {
      question: "What is the critical path in project management?",
      options: [
        "The sequence of project activities which add the most value",
        "The longest path through the project schedule",
        "The path with the most dependencies",
        "The sequence of activities that leads to project failure"
      ],
      answer: "The longest path through the project schedule"
    }
  ];

  const handleOptionClick = (questionIndex: number, option: string) => {
    setIsInteracted(true);
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index} className='mt-3' style={{ marginBottom: '30px' }}>
          <h3 style={{fontSize:'18px'}}>{`${index + 1}. ${q.question}`}</h3>
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(index, option)}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '10px',
                margin: '5px 0',
                border: selectedAnswers[index] === option ? '1px solid rgb(36, 52, 92)' : '1px solid #ccc',
                borderRadius: '6px',
                background: 'white',
                cursor: 'pointer',
                textAlign: 'left'
              }}
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
              <span style={{ color: 'grey', fontSize: '14px' }}>{option}</span>
            </button>
          ))}
          <div className="quize-top-left mt-2">
            <span style={{ fontSize: '14px' }}>
              Marks: <strong>5</strong>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestions;
