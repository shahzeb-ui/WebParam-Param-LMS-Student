"use client";

import { useState } from "react";
import Link from "next/link";

interface LogbookEntry {
  date: string;
  title: string;
  description: string;
  status: string;
  timeRemaining?: string;
}

const logbookEntries: LogbookEntry[] = [
  {
    date: "12 May 2023",
    title: "Functions",
    description: "We learnt about functions and loops, we also did quizzes.",
    status: "Checked Out",
  },
  {
    date: "11 May 2023",
    title: "Introduction to Python",
    description: "",
    status: "Checkout",
    timeRemaining: "3 Hours Remaining To Checkout",
  },
  {
    date: "12 May 2023",
    title: "Continuation Of Python Introduction",
    description: "",
    status: "Checkout",
  },
];

const StudentLogbook = () => {
  const [entries, setEntries] = useState<LogbookEntry[]>(logbookEntries);

  const handleCheckout = (index: number) => {
    const newEntries = [...entries];
    newEntries[index].status = "Checked Out";
    setEntries(newEntries);
  };

  return (
    <div className="logbook-container d-flex justify-content-center align-items-start vh-100 bg-light pt-5">
      <div className="logbook-content w-100" style={{ maxWidth: "800px" }}>
        <h3 className="mb-4">Logbook</h3>
        <div className="mb-4">
          <Link href="#" className="text-decoration-none">
            Recent
          </Link>
        </div>
        {entries.map((entry, index) => (
          <div
            key={index}
            className={`logbook-entry p-4 mb-4 rounded border ${
              entry.status === "Checked Out" ? "bg-light" : "border-success"
            }`}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                {entry.date} - {entry.title}
              </h5>
              {entry.timeRemaining && (
                <span className="text-muted">{entry.timeRemaining}</span>
              )}
              <span className="text-muted">12:00AM</span>
            </div>
            <div className="mt-3">
              <textarea
                className="form-control"
                rows={2}
                placeholder="What did you learn from today's lessons?"
                value={entry.description}
                readOnly={entry.status === "Checked Out"}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <button className="btn btn-outline-success me-2">
                  <i className="bi bi-emoji-smile"></i> Good
                </button>
                <button className="btn btn-outline-secondary me-2">
                  <i className="bi bi-emoji-neutral"></i> Okay
                </button>
                <button className="btn btn-outline-danger">
                  <i className="bi bi-emoji-frown"></i> Bad
                </button>
              </div>
              <button
                className={`btn ${
                  entry.status === "Checked Out"
                    ? "btn-secondary"
                    : "btn-success"
                }`}
                onClick={() => handleCheckout(index)}
                disabled={entry.status === "Checked Out"}
              >
                {entry.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLogbook;
