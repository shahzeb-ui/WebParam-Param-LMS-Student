"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface LogbookEntry {
  date: string;
  title: string;
  description: string;
  status: string;
  timeRemaining?: string;
}

const initialEntries: LogbookEntry[] = [
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
  const [entries, setEntries] = useState<LogbookEntry[]>(initialEntries);
  const [timers, setTimers] = useState<{ [key: number]: number }>({});

  const handleCheckin = (index: number) => {
    const newEntries = [...entries];
    newEntries[index].status = "Checked In";
    setEntries(newEntries);

    // Start the timer
    setTimers((prevTimers) => ({
      ...prevTimers,
      [index]: 24 * 60 * 60,
    }));
  };

  const handleCheckout = (index: number) => {
    const newEntries = [...entries];
    newEntries[index].status = "Checked Out";
    setEntries(newEntries);

    // Stop the timer
    setTimers((prevTimers) => {
      const newTimers = { ...prevTimers };
      delete newTimers[index];
      return newTimers;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const newTimers = { ...prevTimers };
        Object.keys(newTimers).forEach((key) => {
          const index = parseInt(key);
          if (newTimers[index] > 0) {
            newTimers[index] -= 1;
            const hours = Math.floor(newTimers[index] / 3600);
            const minutes = Math.floor((newTimers[index] % 3600) / 60);
            const seconds = newTimers[index] % 60;
            const timeString = `${hours}h ${minutes}m ${seconds}s remaining`;
            const newEntries = [...entries];
            newEntries[index].timeRemaining = timeString;
            setEntries(newEntries);
          } else {
            handleCheckout(index);
          }
        });
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [entries]);

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
                onChange={(e) => {
                  const newEntries = [...entries];
                  newEntries[index].description = e.target.value;
                  setEntries(newEntries);
                }}
                readOnly={entry.status === "Checked Out"}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <button
                  className="btn btn-outline-success me-2"
                  disabled={entry.status === "Checked Out"}
                >
                  <i className="bi bi-emoji-smile"></i> Good
                </button>
                <button
                  className="btn btn-outline-secondary me-2"
                  disabled={entry.status === "Checked Out"}
                >
                  <i className="bi bi-emoji-neutral"></i> Okay
                </button>
                <button
                  className="btn btn-outline-danger"
                  disabled={entry.status === "Checked Out"}
                >
                  <i className="bi bi-emoji-frown"></i> Bad
                </button>
              </div>
              {entry.status === "Checked Out" ? (
                <button className="btn btn-secondary" disabled>
                  {entry.status}
                </button>
              ) : entry.status === "Checked In" ? (
                <button
                  className="btn btn-success"
                  onClick={() => handleCheckout(index)}
                >
                  Checkout
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCheckin(index)}
                >
                  Checkin
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLogbook;
