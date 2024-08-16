"use client";

import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";
import InstructorDashboardHeader from "@/ui/dashboard/dashboard-wrapper";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import axios from "axios";
import { rCourseUrl } from "@/app/lib/endpoints";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEnrolled, setIsEnrolled] = useState<any>();
  const [courseId, setCourseId] = useState("");
  const [course, setCourse] = useState<any>();
  const path = usePathname();
  const router = useRouter();
  const cookies = new Cookies();

  const user = cookies.get("loggedInUser");

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  async function getEnrollmentStatus(userId: string) {
    
    try {
      const res = await axios.get(`${rCourseUrl}/api/v1/Enrollments/GetUserEnrollment/${userId}`);

      if (res.data) {
        console.log("enrollment status: ", res.data.data.status);
        setIsEnrolled(res.data.data.status);
        setCourseId(res.data.data.course);
        return;
      }
    } catch (error: any) {
      console.log("error with enrollment:", error);
    }
    return null;
  }

  async function getCourse(courseId: string) {
    debugger;
    const res = await axios.get(`${rCourseUrl}/api/v1/Courses/GetCourseNew/${courseId}`);

    if (res) {
      setCourse(res.data.data);
    }
  }

  useEffect(() => {
    if (courseId) {
      getCourse(courseId);
    }
  }, [courseId]);

 
  useEffect(() => {
    if (user?.data?.id||user?.id) {
      if (isEnrolled != 0) {
        getEnrollmentStatus(user.data.id||user.id);
      }
    }
    console.log("enrolled status:", isEnrolled);
  }, [path]);

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
    </>
  );
}
