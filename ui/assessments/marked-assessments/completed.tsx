import React from 'react';
import { useAssessmentContext } from '../(context)/AssessmentContext';

const summativeData = [
  {
    title: "Write a short essay on yourself",
    course: "Fundamentals 101",
    submissions: 2,
  },
  {
    title: "Speaking Korean for Beginners",
    course: "Speaking 101",
    submissions: 3,
  },
  {
    title: "Song Writing Techniques 101",
    course: "Song Writing",
    submissions: 10,
  },
  {
    title: "Arabic For Beginners",
    course: "Arabic Writing",
    submissions: 15,
  },
];

const formativeData = [
  {
    title: "Conflict Resolution Strategies",
    course: "Communication 103",
    submissions: 6,
  },
  {
    title: "Active Listening Skills",
    course: "Communication 104",
    submissions: 9,
  },
  {
    title: "Public Speaking Basics",
    course: "Communication 105",
    submissions: 7,
  },
];

export default function CompletedAssessment() {
  const { assessmentType } = useAssessmentContext();
  const data = assessmentType === "summative" ? summativeData : formativeData;

  return (
    <>
    <table className="rbt-table table table-borderless">
      <thead>
        <tr>
          <th colSpan={2} className="fontSize12">Assessment (marks)</th>
          <th className="fontSize12">Submissions</th>
          <th className="fontSize12" style={{textAlign:'right', paddingRight:'60px'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((assessment, index) => (
          <tr key={index}>
            <th colSpan={2}>
              <span className="h6 mb--5">{assessment.title}</span>
              <p className="b3">
                Course: <a href="#">{assessment.course}</a>
              </p>
            </th>
            <td>
              <p className="b3">{assessment.submissions}</p>
            </td>
            <td>
              <div className="rbt-button-group justify-content-end">
                <a
                  className="rbt-btn btn-xs bg-primary-opacity radius-round"
                  title="View"
                  href="#"
                >
                  <i className="float-left bi bi-eye pl--0" />
                  <span className="viewButtonText">View</span>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}