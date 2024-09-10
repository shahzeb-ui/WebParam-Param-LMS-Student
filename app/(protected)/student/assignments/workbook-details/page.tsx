'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Question {
  type: 'multiple-choice' | 'short-answer';
  question: string;
  options?: string[];
}

interface Workbook {
  name: string;
  questions: Question[];
}

const workbooksData: Workbook[] = [
  {
    name: 'Workbook_KM01',
    questions: [
      { type: 'multiple-choice', question: 'What is the primary role of a project manager?', options: ['To execute tasks assigned by team members', 'To oversee and coordinate all aspects of a project', 'To handle only the financial aspects of a project'] },
      { type: 'multiple-choice', question: 'Which of the following is a key component of project planning?', options: ['Defining project scope', 'Hiring project team members', 'Conducting performance reviews'] },
      { type: 'short-answer', question: 'Explain the importance of stakeholder management in project management.' },
      { type: 'short-answer', question: 'Describe the steps involved in creating a project plan.' },
    ],
  },
  {
    name: 'Workbook_KM03',
    questions: [
      { type: 'multiple-choice', question: 'What is the primary purpose of project scope management?', options: ['To define and control what is included in the project', 'To manage the project budget', 'To oversee project team performance'] },
      { type: 'multiple-choice', question: 'Which document outlines the project scope?', options: ['Project Charter', 'Scope Statement', 'Risk Management Plan'] },
      { type: 'short-answer', question: 'Explain the importance of a Scope Statement in project management.' },
      { type: 'short-answer', question: 'Describe the process of creating a Work Breakdown Structure (WBS).' },
    ],
  },
];

const WorkbookPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [workbookName, setWorkbookName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWorkbookName(searchParams.get("workbookName"));
    }
  }, [searchParams]);

  const workbook = workbooksData.find(wb => wb.name === workbookName);

  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const handleOptionClick = (questionIndex: number, option: string) => {
    setSelectedOptions(prev => ({ ...prev, [questionIndex]: option }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/student/assignments?tab=workbooks');
  };

  if (!workbook) {
    return <div>Workbook not found</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {workbook.questions.map((question, index) => (
        <div key={index}>
          <p style={{ fontWeight: '800', margin: '25px 0', fontSize:'16px' }}>{question.question}</p>
          {question.type === 'multiple-choice' && (
            <div style={{ maxWidth: '600px', marginLeft: '0' }}>
              {question.options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionClick(index, option)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    padding: '10px',
                    border: '1px solid',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    borderColor: selectedOptions[index] === option ? 'rgb(36, 52, 92)' : 'lightgray',
                    fontWeight: selectedOptions[index] === option ? '550' : 'normal',
                    fontSize: '14px',
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
                      alignItems: 'center',
                    }}
                  >
                    {selectedOptions[index] === option && (
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: 'rgb(36, 52, 92)',
                        }}
                      />
                    )}
                  </div>
                  {option}
                </div>
              ))}
            </div>
          )}
          {question.type === 'short-answer' && (
            <textarea 
              rows={4} 
              style={{
                width: '100%',
                maxWidth: '600px',
                resize: 'none',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid lightgray',
                fontSize: '14px',
              }}
            />
          )}
        </div>
      ))}
      <div style={{ maxWidth: '600px', textAlign: 'right', marginTop: '20px' }}>
        <button 
          type="submit" 
          className="rbt-btn btn-sm"
          style={{
            backgroundColor: 'rgb(36, 52, 92)',
            color: 'white',
            cursor: 'pointer',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '120px'  // Adjust this value as needed
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default function WorkBookDetails() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <WorkbookPage/>
      </Suspense>
  );
}
