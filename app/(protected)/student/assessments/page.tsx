"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import ActiveAssessment from "@/ui/assessments/marked-assessments/active";
import CompletedAssessment from "@/ui/assessments/marked-assessments/completed";
import styles from "@/app/(protected)/student/assessments/assessments.module.css";

function Assessments() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "active"
  );

  useEffect(() => {
    const tab = searchParams.get("tab") || "active";
    setActiveTab(tab);
  }, [searchParams]);


  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
      <div className="content">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Assessments</h4>
        </div>
        <div className={styles.navAssignmentsContainer}>
          <div className="col-lg-10 offset-lg-1">
          <ul className="nav nav-tabs tab-button-style-2 justify-content-center " id="myTab-4" role="tablist">
              
              <li role="presentation" onClick={() => router.push('/student/assessments?tab=active')} style={{cursor:'pointer'}}>
                <a className={`tab-button ${activeTab === 'active' ? 'active' : ''}`} id="profile-tab-4" role="tab" aria-selected={activeTab === 'active'}>
                  <span className="title">Active Assessments</span>
                </a>
              </li>
              <li role="presentation" onClick={() => router.push('/student/assessments?tab=completed')} style={{cursor:'pointer'}}>
                <a className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`} id="contact-tab-4" role="tab" aria-selected={activeTab === 'completed'}>
                  <span className="title">Completed Assessments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className="mt-3" /> */}
        <div className="rbt-dashboard-table table-responsive mobile-table-750 mt-3">
          {activeTab === "completed" && <CompletedAssessment />}
          {activeTab === "active" && <ActiveAssessment />}

        </div>
      </div>
    </div>
  );
}

export default function AssignmentsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/student/assessments?tab=active");
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Assessments />
    </Suspense>
  );
}
