"use client";

import { useState } from "react";
import styles from "@/styles/overview/overview.module.css";

const Overview = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getDisplayContent = (
    text: string,
    isCollapsed: boolean,
    wordLimit = 100
  ) => {
    const lines = text.split("\n").map((line) => line.trim());
    const isLong = lines.length > wordLimit;
    const displayContent =
      isCollapsed && isLong
        ? lines.slice(0, wordLimit).join("\n") + "..."
        : text;
    return { displayContent, isLong };
  };

  const transcriptData = [
    {
      time: "",
      text: "this introductory video, we'll explore the fundamentals of C# programming, laying the groundwork for your journey into software development.",
    },
    {
      time: "",
      text: "Today, we'll cover the basics of C#, including data types, variables, and control structures.",
    },
    {
      time: "",
      text: " for developing a wide range of applications, from desktop software to web applications and games.",
    },
    {
      time: "",
      text: "Throughout this course, you'll learn how to write clean, efficient code in C#, following best practices and industry standards.",
    },
  ];

  const { displayContent, isLong } = getDisplayContent(
    transcriptData.map((item) => item.text).join("\n"),
    isCollapsed
  );

  return (
    <div className="container mt-4 pb-5">
      <div className="row">
        <div className="col-md-5 mb-3">
          <label className="form-label fw-bold underline-2">
            What you will learn
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <div className="mb-3">
          <div className="mt-2">
            {transcriptData.map((entry, index) => (
              <div className={styles.transcriptLine} key={index}>
                <div className={styles.transcriptTime}>{entry.time}</div>
                <div className={styles.transcriptContent}>{entry.text}</div>
              </div>
            ))}
            {isLong && (
              <a
                onClick={toggleCollapse}
                className="ms-2"
                style={{ cursor: "pointer" }}
              >
                {isCollapsed ? "Read more" : "Show less"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
