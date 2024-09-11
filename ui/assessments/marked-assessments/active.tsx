import React, { useEffect, useState } from 'react';
import { useAssessmentContext } from '../(context)/AssessmentContext';
import { rAssessmentUrl } from '../../../app/lib/endpoints';

// Define the Assessment interface
interface Assessment {
  id: string;
  state: number;
  title: string;
  courseId: string;
  type: string;
}

export default function ActiveAssessment() {
  const { assessmentType } = useAssessmentContext();
  const [data, setData] = useState<Assessment[]>([]);
  const [filteredData, setFilteredData] = useState<Assessment[]>([]);
  const courseId = '6669f0ff8759b480859c10a7';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${rAssessmentUrl}/api/v1/assessments/GetNewAssessments/${courseId}`;
        console.log('Fetching URL:', url);
        const response = await fetch(url);
        if (!response.ok) {
          console.error(`Error fetching assessments: ${response.statusText}`);
          return;
        }
        const result = await response.json();
        console.log('API response:', result);

        if (result && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          console.error('API response does not contain a data array:', result);
        }
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };

    fetchData();
  }, [courseId]);

  useEffect(() => {
    const filtered = data.filter(assessment => assessment.type === assessmentType);
    setFilteredData(filtered);
  }, [data, assessmentType]);

  return (
    <table className="rbt-table table table-borderless">
      <thead>
        <tr>
          <th>Assessment Name</th>
          <th>Due Date</th>
          <th>Total Marks</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {filteredData.map((assessment, index) => (
          <tr key={index}>
            <th>
              <span className="h6 mb--5">{assessment.title}</span>
              <p className="b3">
                Course: <a href="#">{assessment.courseId}</a>
              </p>
            </th>
            <td>
              {<p className="b3">{/*assessment.dueDate*/}</p>}
            </td>
            <td>
              <p className="b3">{/*assessment.totalMarks*/}</p>
            </td>
            <td>
              <div className="rbt-button-group justify-content-end">
                <a
                  className="rbt-btn btn-xs bg-primary-opacity radius-round"
                  title="Start"
                  href="/take-assessment"
                >
                  Start
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}