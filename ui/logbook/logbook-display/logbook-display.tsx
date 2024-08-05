"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import styles from "@/styles/logbook/logbook-list.module.css";

interface LogbookEntry {
  date: string;
  title: string;
  description: string;
  status: string;
  createdTime?: string;
  timeRemaining?: string;
  id?: string;
}

interface LogbookListProps {
  logbooks: LogbookEntry[];
  fetchMoreLogbooks: () => void;
  hasMore: boolean;
}

const LogbookList = ({
  logbooks,
  fetchMoreLogbooks,
  hasMore,
}: LogbookListProps) => {
  return (
    <div className={styles["logbook-list-container"]}>    
        {logbooks.map((logbook, index) => (
          <div
            key={index}
            className={`${styles["logbook-card-custom"]} ${
              logbook.status === "Checked Out"
                ? styles["bg-light-custom"]
                : styles["border-success-custom"]
            } rounded border mb-4`}
          >
            <div
              className={`${styles["d-flex-custom"]} justify-content-between align-items-center`}
            >
              <h5>
                {logbook.date} {logbook.title}
              </h5>
              {logbook.timeRemaining && (
                <span className="text-muted">{logbook.timeRemaining}</span>
              )}
              <span className="text-muted">{logbook.createdTime}</span>
            </div>
            <div className={styles["mt-3-custom"]}>
              <textarea
                className="form-control"
                rows={2}
                value={logbook.description}
                readOnly
              />
            </div>
            <div
              className={`${styles["d-flex-custom"]} justify-content-between align-items-center ${styles["mt-3-custom"]}`}
            >
              <div>
                <button className="btn btn-outline-success me-2" disabled>
                  <i className="bi bi-emoji-smile"></i> Good
                </button>
                <button className="btn btn-outline-secondary me-2" disabled>
                  <i className="bi bi-emoji-neutral"></i> Okay
                </button>
                <button className="btn btn-outline-danger" disabled>
                  <i className="bi bi-emoji-frown"></i> Bad
                </button>
              </div>
              <button
                className={`btn ${
                  logbook.status === "Checked Out"
                    ? "btn-secondary"
                    : logbook.status === "Checked In"
                    ? "btn-success"
                    : "btn-primary"
                }`}
                disabled
              >
                {logbook.status}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LogbookList;
