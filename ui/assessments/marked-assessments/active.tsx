import React, { useEffect, useState } from 'react';
import { useAssessmentContext } from '../(context)/AssessmentContext';
import { rAssessmentUrl } from '../../../app/lib/endpoints';

enum AssessmentType {
  Summative = 0,
  Formative = 1,
}

interface Assessment {
  id: string;
  state: number;
  title: string;
  courseId: string;
  type: AssessmentType;
}

export default function ActiveAssessment() {
  const { assessmentType } = useAssessmentContext();
  const [data, setData] = useState<Assessment[]>([]);
  const [filteredData, setFilteredData] = useState<Assessment[]>([]);
  const courseId = '6669f0ff8759b480859c10a7';
  //const courseId = Cookies.get('courseId'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${rAssessmentUrl}/api/v1/assessments/GetNewAssessments/${courseId}`);
        if (!response.ok) {
          console.error(`Error fetching assessments: ${response.statusText}`);
          return;
        }
        const result = await response.json();

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
    console.log('data:', data);
    console.log('assessmentType from context:', assessmentType);

    let filtered: Assessment[] = [];
    if (assessmentType === "summative") {
      filtered = data.filter(assessment => assessment.type === AssessmentType.Summative);
    } else if (assessmentType === "formative") {
      filtered = data.filter(assessment => assessment.type === AssessmentType.Formative);
    }
    console.log('filtered:', filtered);
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
                Course: <a href="#">{/*assessment.course*/}</a>
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