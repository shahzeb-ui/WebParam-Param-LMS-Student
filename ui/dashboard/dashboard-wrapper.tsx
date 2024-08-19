"use client";

import { rCourseUrl } from "@/app/lib/endpoints";
import "./userProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const InstructorDashboardHeader = () => {
  var t = isBrowser;

  const [isEnrolled, setIsEnrolled] = useState<any>();
  const [courseId, setCourseId] = useState("");
  const [course, setCourse] = useState<any>();

  const cookies = new Cookies();

  const user = cookies.get("loggedInUser");
  
  async function getEnrollment(userId: string) {
    
    try {
      const res = await axios.get(`${rCourseUrl}/api/v1/Enrollments/GetUserEnrollment/${userId}`);

      if (res.data) {
        console.log("enrollment id: ", res.data.data.course);
        cookies.set("courseId", res.data.data.course)
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
    if (user.data.id||user.id) {
      getEnrollment(user.data.id||user.id);
    }
  }, []);

  useEffect(() => {
    if (courseId) {
      getCourse(courseId);
    }
  }, [courseId]);


  return (
    <>
    <div className="mb-5">
        <h3 className="mb-2">
          <span style={{ fontWeight: '700' }}>{course?.title}</span>
        </h3>
        <p className="ml-5">
        {course?.id.slice(-4)}
        </p>
      </div>
      <div className="rbt-dashboard-content-wrapper">
      {isMobile&&
        <div className="rbt-shadow-box" 
        style={{
          backgroundImage: `url(${thootoHeader.src})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain',
          backgroundPosition:'top',
          height: '175px'
        }} />
      }

      {!isMobile&&
        <div className="height-350 rbt-shadow-box" 
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BANNER_URL??""})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center'
        }} />
      }
    
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
            </div>
            <div className="tutor-content">
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default InstructorDashboardHeader;
