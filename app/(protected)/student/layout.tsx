"use client"
import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";
import InstructorDashboardHeader from "@/ui/dashboard/dashboard-wrapper";
import { useEffect, useState } from "react";
import { FlagsmithProvider } from "flagsmith/react";

import flagsmith from "flagsmith";
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [flagsLoaded, setFlagsLoaded] = useState(false);
  
  useEffect(() => {
    flagsmith.init({
      environmentID: "GTGFWiyEFuVDfna2gjdqQC",
      onChange: () => {
        console.log("Flags updated", flagsmith.getAllFlags());
        setFlagsLoaded(true);
        
      },
      onError: (error) => {
        console.error("Error loading flags", error);
        setFlagsLoaded(true);
      },
    });
  }, []);

  return (
    <>
          <FlagsmithProvider
        options={{
          environmentID: "GTGFWiyEFuVDfna2gjdqQC",
        }}
        flagsmith={flagsmith}>
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
      </FlagsmithProvider>
    </>
  );
}
