"use client";

import styles from "@/styles/leaderboard/Leaderboard.module.css";
import LeaderData from "@/data/laderboard-data/leaderboard.json";

interface Student {
  rank: number;
  name: string;
  points: number;
}

const Leaderboard = () => {
  const students: Student[] = LeaderData;

  return (
    <div className="content">
      <div className="section-title">
        <h4 className="get-4-color rbt-title-style-3">
          <i className="bi bi-trophy-fill"></i>
          <span className="style-3-left">Leaderboard</span>
        </h4>
      </div>

      <div className="table-responsive">
        <table className={`table ${styles.minimalTable}`}>
          <thead className="table-dark">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Student</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rank}>
                <td>{student.rank}</td>
                <td>{student.name}</td>
                <td>{student.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
