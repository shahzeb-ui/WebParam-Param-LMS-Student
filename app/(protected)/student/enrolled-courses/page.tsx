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

  const [isProgress, setIsProgress] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [courseStyle, setCourseStyle] = useState("two");
  
  const cookies = new Cookies();

  const user = cookies.get("loggedInUser");

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getUnitStandards = async (courseId: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAlltUnitStandards(courseId);
      setUnitStandards(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getKnowledgeModules = async (userId:any) => {
    debugger;
    if (userId) {
        const courseId = await getCourseId(userId);
        if (courseId?.data) {
            const res = await getEnrolledCourse(courseId?.data);
    
            console.log("knowledge modules: ", res?.data.data);
            if (res?.data) {
                setUnitStandards(res.data.data);
            }
        }
    }
  }

  useEffect(() => {
    debugger;
    getKnowledgeModules(user.data.id||user.data.userId);

    console.log("knowledge modules:", unitStandards);
  }, []);

  useEffect(() => {
    if (tab == null) {
      router.push('/student/enrolled-courses?tab=enrolled');
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
            <span className="style-3-left">My Courses</span>
          </h4>
        </div>
        <div className={`advance-tab-button mb--30 ${styles.advanceTabButton}`}>
          <ul className={`nav nav-tabs tab-button-style-2 ${styles.navTabs}`} id="myTab-4" role="tablist">
            <li role="presentation">
              <Link
                href="#"
                className={`tab-button ${tab == "enrolled" && "active"} ${styles.tabButton}`}
                id="home-tab-4"
                data-bs-toggle="tab"
                data-bs-target="#home-4"
                role="tab"
                aria-controls="home-4"
                aria-selected="true"
                onClick={() => router.push('/student/enrolled-courses?tab=enrolled')}
              >
                <span className="title">Enrolled</span>
              </Link>
            </li>
            <li role="presentation">
              <Link
                href="#"
                className={`tab-button ${tab == "active" && "active"} ${styles.tabButton}`}
                id="profile-tab-4"
                data-bs-toggle="tab"
                data-bs-target="#profile-4"
                role="tab"
                aria-controls="profile-4"
                aria-selected="false"
                onClick={() => router.push('/student/enrolled-courses?tab=active')}
              >
                <span className="title">Active</span>
              </Link>
            </li>
            <li role="presentation">
              <Link
                href="#"
                className={`tab-button ${tab == "completed" && "active"} ${styles.tabButton}`}
                id="contact-tab-4"
                data-bs-toggle="tab"
                data-bs-target="#contact-4"
                role="tab"
                aria-controls="contact-4"
                aria-selected="false"
                onClick={() => router.push('/student/enrolled-courses?tab=completed')}
              >
                <span className="title">Completed</span>
              </Link>
            </li>
            <li role="presentation">
              <Link
                href="#"
                className={`tab-button ${tab == "softSkills" && "active"} ${styles.tabButton}`}
                id="contact-tab-4"
                data-bs-toggle="tab"
                data-bs-target="#contact-4"
                role="tab"
                aria-controls="contact-4"
                aria-selected="false"
                onClick={() => router.push('/student/enrolled-courses?tab=softSkills')}
              >
                <span className="title">Soft Skills</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          {tab === "enrolled" && <Enrolled />}
          {tab === "active" && <Active />}
          {tab === "completed" && <Completed />}
          {tab === "softSkills" && <SoftSkills />}
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
