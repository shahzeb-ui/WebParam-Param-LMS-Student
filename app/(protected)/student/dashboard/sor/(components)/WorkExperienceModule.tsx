// components/WorkExperienceModules.tsx
import React, { useState, ChangeEvent } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Module {
  date: string;
  signedOff: string;
  name: string;
  credits: string;
  achievement: string;
}

const WorkExperienceModules: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([
    { date: '2023-01-01', signedOff: '100%', name: 'Work Module 1', credits: '10', achievement: 'Competent' },
    { date: '2023-02-01', signedOff: '95%', name: 'Work Module 2', credits: '8', achievement: 'Competent' },
  ]);


  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-10 mt-5 rbt-review-wrapper rbt-shadow-box">
      <div className="d-flex justify-content-between align-items-center w-100 p-2">
        <h5>Work Experience Modules</h5>
      </div>
      
      <table className="rbt-table table table-borderless">
        <thead className='thead-light'>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">% Signed off</th>
            <th scope="col">Name of Module</th>
            <th scope="col">Credits</th>
            <th scope="col">Achievement</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => (
            <tr key={index}>
              <td>{module.date}</td>
              <td>{module.signedOff}</td>
              <td>{module.name}</td>
              <td>{module.credits}</td>
              <td>{module.achievement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkExperienceModules;
