"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "@/styles/logbook/logbook-login.module.css";

interface LogbookEntry {
  date: string;
  title: string;
  description: string;
  status: string;
  timeRemaining?: string;
  id?: string;
  rating?: string;
}

interface LogbookDisplayProps {
  activeTab: string;
  addNewEntry: (
    setEntry: React.Dispatch<React.SetStateAction<LogbookEntry | null>>,
    entry: LogbookEntry | null
  ) => void;
  studentEntry: LogbookEntry | null;
  workEntry: LogbookEntry | null;
  setStudentEntry: React.Dispatch<React.SetStateAction<LogbookEntry | null>>;
  setWorkEntry: React.Dispatch<React.SetStateAction<LogbookEntry | null>>;
  setStudentTimer: React.Dispatch<React.SetStateAction<number | null>>;
  setWorkTimer: React.Dispatch<React.SetStateAction<number | null>>;
  renderForm: (
    entry: LogbookEntry | null,
    setEntry: React.Dispatch<React.SetStateAction<LogbookEntry | null>>,
    setTimer: React.Dispatch<React.SetStateAction<number | null>>
  ) => JSX.Element | null;
}

const LogbookDisplay: React.FC<LogbookDisplayProps> = ({
  activeTab,
  addNewEntry,
  studentEntry,
  workEntry,
  setStudentEntry,
  setWorkEntry,
  setStudentTimer,
  setWorkTimer,
  renderForm,
}) => {
  const [entries, setEntries] = useState<LogbookEntry[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreEntries = () => {
    // Create dummy entries with current date
    const newEntries = Array.from({ length: 10 }, (_, index) => {
      const today = new Date();
      today.setDate(today.getDate() - index); // Decrement date for variation
      return {
        date: today.toLocaleDateString(),
        title: `Entry ${entries.length + index + 1}`,
        description: "Sample entry description",
        status: "Checked Out",
        rating: "Okay",
      };
    });

    setEntries((prevEntries) => {
      const updatedEntries = [...prevEntries, ...newEntries].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      return updatedEntries;
    });
    setHasMore(newEntries.length > 0); // Adjust this condition based on your data source
  };

  return (
    <div className="logbook-controls">
      <div className="d-flex justify-content-between my-3">
        <button
          className="btn btn-primary"
          onClick={() =>
            addNewEntry(
              activeTab === "school" ? setStudentEntry : setWorkEntry,
              activeTab === "school" ? studentEntry : workEntry
            )
          }
        >
          <i className="bi bi-plus"></i> Add Entry
        </button>
        <button className="btn btn-secondary">View All Entries</button>
      </div>

      <InfiniteScroll
        dataLength={entries.length}
        next={fetchMoreEntries}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more entries to show</p>}
      >
        {entries.map((entry, index) => (
          <div key={index} className={`${styles.logbookCard}`}>
            {renderForm(
              activeTab === "school" ? studentEntry : workEntry,
              activeTab === "school" ? setStudentEntry : setWorkEntry,
              activeTab === "school" ? setStudentTimer : setWorkTimer
            )}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default LogbookDisplay;
