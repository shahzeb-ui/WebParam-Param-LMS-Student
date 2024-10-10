"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getStudentMarkedAssignments } from "@/app/api/assignments/assignments";
import { IMarkedAssignment } from "@/interfaces/assignments/assignments";
import Cookies from "universal-cookie";
import NoAssignmentsCard from "./NoAssignmentsCard";

export default function ActiveAssignment() {
  const [assignments, setAssignments] = useState<IMarkedAssignment[]>([]);
  const searchParams = useSearchParams();
  
  const cookies = new Cookies();
  const user = cookies.get("loggedInUser");

  const fetchAssignments = async () => {
    try {
      const assignmentsData = await getStudentMarkedAssignments(user.data.id!);
      setAssignments(assignmentsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      {assignments.length > 0 ? (
        assignments.map((assignment: IMarkedAssignment, index) => (
          <AssignmentCard key={index} assignment={assignment} />
        ))
      ) : (
        <NoAssignmentsCard />
      )}
    </div>
  );
}

type assignment = {
  assignment: IMarkedAssignment;
};

function AssignmentCard({ assignment }: assignment) {
  return (
    <>
      <table
        className="rbt-table table table-borderless"
        style={{ minWidth: "10px" }}
      >
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Due Date</th>
            <th>Submission Date</th>
            <th>Mark</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <span className="h6 mb--5">
                {assignment.studentAssignment.title}
              </span>
            </th>
            <td>
              <p className="b3">
                {new Date(
                  assignment.studentAssignment.dueDate
                ).toLocaleDateString()}
              </p>
            </td>
            <td>
              <p className="b3">
                {new Date(assignment.studentAssignment.submissionDate).toLocaleDateString()}
              </p>
            </td>
            <td>
              <p className="b3">{assignment.mark}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
