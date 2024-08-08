"use client";

import StudentDiscussions from "@/ui/discussions/student-discussion.tsx/discussions";
import styles from "@/styles/discussions/discussions.module.css";

const StudentCourse = () => {
  return (
    <>
      <div className="mt-1-mr">
        <div className="container">
          <div className="row">
            <div className="col-lg-16">
              <div className="row g-5">
                <div className={styles.collg3}></div>

                <div className="col-lg-9">
                  <StudentDiscussions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCourse;
