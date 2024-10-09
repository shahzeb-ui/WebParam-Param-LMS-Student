"use client";

import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";
import InstructorDashboardHeader from "@/ui/dashboard/dashboard-wrapper";
import { CourseIdProvider } from "@/context/courseId-context/courseId-context";
import MaintenanceModal from "@/ui/banner/MaintanceModal";
import { useState, useEffect } from "react";
import FileUpload from "@/app/components/FileUpload";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  return (
    <>
      <div className="rbt-page-banner-wrapper" style={{ marginBottom: '20px' }}>
        {/* <div className="rbt-bannerap-image custom-banner" /> */}
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
                <div className="col-lg-9">
                  <div style={{ position: 'relative' }}>
                    <FileUpload acceptedFileTypes="pdf, jpg, docx" maxFileSize={5} />
                    <button
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'red',
                      }}
                      onClick={() => console.log('Remove file')}
                    >
                      Remove
                    </button>
                  </div>
                  {children}
                </div>
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
