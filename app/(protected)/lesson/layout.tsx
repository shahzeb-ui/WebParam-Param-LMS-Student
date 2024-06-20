"use client";

import { useEffect, useState } from "react";
import LessonSidebar from "@/ui/lesson/Lesson-sidebar";
import styles from "@/styles/side-bar/lesson-side-bar.module.css";
import "@/public/scss/styles.scss";

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className={isMobile ? "" : "rbt-lesson-leftsidebar"}>
            <LessonSidebar />
          </div>
          <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
