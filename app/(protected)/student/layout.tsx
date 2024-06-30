"use client";

import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-1-mr">
        <div className="container">
          <div className="row">
            <div className="col-lg-16">
              <div className="row g-5">
                <div className={`col-lg-3 ${styles.sidebarHiddenOnMobile}`}>
                  <StudentDashboardSidebar />
                </div>
                <div className="col-lg-9">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
