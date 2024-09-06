"use client";
import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/ui/loader/loader";
import styles from "@/styles/enrolled-courses/enrolled-courses.module.css";
import { getAlltUnitStandards } from "@/actions/unit-standards/get-unit-standards";
import { UnitStandardData } from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";
import UnitStandardWidget from "@/ui/student/enrolled/sample-unit";
// import { isMobile } from "react-device-detect";
import { getCourseId, getEnrolledCourse } from "@/app/api/my-courses/course";
import courseImage from './courseImage.jpeg';
import Cookies from "universal-cookie";
import { isMobile } from "react-device-detect";
import Active from "./active";
import Enrolled from "./enrolled";
import Completed from "./completed";
import SoftSkills from "./softSkills/soft-skills";
import { useRouter, useSearchParams } from "next/navigation";

const EnrolledCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [unitStandards, setUnitStandards] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  
  const cookies = new Cookies();

  const user = cookies.get("loggedInUser");

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  useEffect(() => {
    if (tab == null) {
      router.push('/student/projects?tab=enrolled');
    }
  }, [tab]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
      <div className="content">
        <div className="section-title">
          <h4 className="get-4-color rbt-title-style-3">
            <i className="bi bi-laptop "></i>
            <span className="style-3-left">My Projects</span>
          </h4>
        </div>


        <div className="tab-content">
          {tab === "enrolled" && <Enrolled />}
        
        </div>
      </div>
    </div>
  );
};

const EnrolledCoursesPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EnrolledCourses />
    </Suspense>
  );
};

export default EnrolledCoursesPage;
