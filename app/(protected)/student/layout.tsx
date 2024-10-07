"use client";

import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";
import InstructorDashboardHeader from "@/ui/dashboard/dashboard-wrapper";
import { CourseIdProvider } from "@/context/courseId-context/courseId-context";
import MaintenanceModal from "@/ui/banner/MaintanceModal";
import { useState, useEffect } from "react";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  return (
    <>
      <div className="rbt-page-banner-wrapper">
        {/* <div className="rbt-banner-image custom-banner" /> */}
      </div>

      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <InstructorDashboardHeader />
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

      <MaintenanceModal
        show={showMaintenanceModal}
        onHide={() => setShowMaintenanceModal(false)}
      />
    </>
  );
}
