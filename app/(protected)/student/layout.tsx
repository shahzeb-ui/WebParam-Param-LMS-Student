"use client";

import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const cookies = new Cookies();

  const loggedInUser = cookies.get("loggedInUser");
  
  useEffect(() => {
    if (!loggedInUser) {
      router.push("/login");
    }
  }, [loggedInUser]);

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
