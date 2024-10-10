"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/ui/loader/loader";
import styles from "@/styles/enrolled-courses/enrolled-courses.module.css";
// import { isMobile } from "react-device-detect";

import Cookies from "universal-cookie";
import { isMobile } from "react-device-detect";
import Active from "./active";
import Enrolled from "./enrolled";
import Completed from "./completed";
import SoftSkills from "./softSkills/soft-skills";
import { useRouter, useSearchParams } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EnrolledCourses = () => {
  const [loading, setLoading] = useState(false);
  
  const cookies = new Cookies();
const access = process.env.NEXT_PUBLIC_ACCESS??"ALL_ACCESS";

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (tab === null) {
      router.push('/student/enrolled-courses?tab=enrolled');
    }
  }, [tab, router]);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div 
      className="rbt-dashboard-content bg-color-white rbt-shadow-box"
      data-aos="fade-right"
    >
      <div className="content">
        <div className="section-title d-flex justify-content-between align-items-center nav-titles">
          <h4 className="get-4-color rbt-title-style-3" style={{ height:'100%', margin:'0'}}>
            <i className="bi bi-laptop "></i>
            <span className="style-3-left">My Courses</span>
          </h4>
          <div>
            <select className="form-select" style={{width:'150px', borderRadius:'5px', margin:'0'}}>
              <option value="summative">Summative</option>
              <option value="formative">Formative</option>
            </select>
          </div>
          {/* <div>
          <select className="form-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div> */}
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
            <li role="presentation" style={{pointerEvents:access=="COURSE_ONLY"?"none": "auto", opacity: access=="COURSE_ONLY"?"0.2":"1"}}>
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
            <li role="presentation" style={{pointerEvents:access=="COURSE_ONLY"?"none": "auto", opacity: access=="COURSE_ONLY"?"0.2":"1"}}>
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
            <li role="presentation"  style={{pointerEvents:access=="COURSE_ONLY"?"none": "auto", opacity: access=="COURSE_ONLY"?"0.2":"1"}}>
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
