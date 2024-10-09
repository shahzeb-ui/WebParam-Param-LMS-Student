"use client"
import { useEffect, useState } from "react";
import { getAssignments } from "@/app/api/assignments/assignment";
import { IAssignment } from "@/app/Utils/assignmentsInterface";
import { useSearchParams } from "next/navigation";

export default function ActiveAssignment() {
  const [assignments, setAssignments] = useState<IAssignment[]>([]);
  const searchParams = useSearchParams();
  const moduleId = searchParams.get("moduleId");

  const fetchAssignments = async () => {
    fect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      {assignments.map((assignment:IAssignment, index) => (
    
function AssignmentCard({ assignment }:any) {

  return (
    <table className="rbt-table table table-borderless" style={{ minWidth: "10px" }}>
      <thead>
        <tr>
          <th>Assignment Name</th>
          <th>Due Date</th>
          <th>Submission</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <span className="h6 mb--5">{assignment.title}</span>
            <p className="b3">
              Module: <a href="#">{assignment.description}</a>
            </p>
          </th>
          <td>
            <p className="b3">{assignment.scheduledDate}</p>
          </td>
          <td>
            <p className="b3">N/A</p>
          </td>
          <td>
            <div className="rbt-button-group justify-content-end">
              <a className="rbt-btn btn-xs bg-primary-opacity radius-round" title="Upload" href="#">
                <i className="bi bi-upload pl--0" /> Upload
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
