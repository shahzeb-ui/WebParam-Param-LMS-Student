"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import ActiveAssessment from "@/ui/assessments/marked-assessments/active";
import CompletedAssessment from "@/ui/assessments/marked-assessments/completed";
import UpcomingAssessment from "@/ui/assessments/marked-assessments/upcoming";
import styles from "@/app/(protected)/student/assessments/assessments.module.css";

function Assessments() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "upcoming"
  );

  useEffect(() => {
    const tab = searchParams.get("tab") || "upcoming";
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/student/assessments?tab=${tab}`);
  };

  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
      <div className="content">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Assessments</h4>
        </div>
        <div className={styles.navAssignmentsContainer}>
          <div className="col-lg-10 offset-lg-1">
            <ul
              className={`nav nav-tabs ${styles.navAssignments}`}
              id="myTab-4"
              role="tablist"
            >
              <li
                className={`nav-item ${styles.navItem}`}
                role="presentation"
                onClick={() => handleTabClick("upcoming")}
              >
                <a
                  className={`nav-link ${styles.navLink} ${
                    activeTab === "upcoming" ? "active" : ""
                  }`}
                  id="home-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#home-4"
                  role="tab"
                  aria-controls="home-4"
                  aria-selected={activeTab === "upcoming"}
                  href="#"
                >
                  <span className="title">Upcoming</span>
                </a>
              </li>
              <li
                className={`nav-item ${styles.navItem}`}
                role="presentation"
                onClick={() => handleTabClick("active")}
              >
                <a
                  className={`nav-link ${styles.navLink} ${
                    activeTab === "active" ? "active" : ""
                  }`}
                  id="profile-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-4"
                  role="tab"
                  aria-controls="profile-4"
                  aria-selected={activeTab === "active"}
                  href="#"
                >
                  <span className="title">Active</span>
                </a>
              </li>
              <li
                className={`nav-item ${styles.navItem}`}
                role="presentation"
                onClick={() => handleTabClick("completed")}
              >
                <a
                  className={`nav-link ${styles.navLink} ${
                    activeTab === "completed" ? "active" : ""
                  }`}
                  id="contact-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-4"
                  role="tab"
                  aria-controls="contact-4"
                  aria-selected={activeTab === "completed"}
                  href="#"
                >
                  <span className="title">Completed</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="rbt-dashboard-table table-responsive mobile-table-750 mt-3">
          {activeTab === "completed" && <CompletedAssessment />}
          {activeTab === "active" && <ActiveAssessment />}
          {activeTab === "upcoming" && <UpcomingAssessment />}
        </div>
      </div>
    </div>
  );
}

export default function AssignmentsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/student/assessments?tab=upcoming");
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Assessments />
    </Suspense>
  );
}
