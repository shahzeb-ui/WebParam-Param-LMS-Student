"use client";

import { rCourseUrl } from "@/app/lib/endpoints";
import "./userProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useStore } from "@/stores/useStore";
import { useFlags } from "flagsmith/react";

const InstructorDashboardHeader = () => {
  var t = isBrowser;
  const [isEnrolled, setIsEnrolled] = useState<any>();
  const [course, setCourse] = useState<any>();
  const [courseId, setCourseId] = useState<string>('');
  const flags = useFlags(["next_public_banner_url","next_public_course_id","next_public_demo"]);
  const banner = flags.next_public_banner_url.value;
  const flagSmithCourseId = flags.next_public_course_id.value;
  const demo = flags.next_public_demo.value ?? "";

  const selectedcourseId = useStore((state:any) => state.courseId);
  const changeCourseId = useStore((state:any) => state.setCourseId);


  const coursesArray = [
    {
      courseName: "Contact Centre Manager ",
      courseId: "66c6f9fe0c2eeac80af3b590"
    },
    {
      courseName: "Electrician", 
      courseId: "6698edd230068555e54ac58e"
    },
    {
      courseName: "Project Management", 
      courseId: "668fcf681a1ce7b0635b61c6"
    },
    {
      courseName: "Computer Technician",
      courseId: "669f4301cb3eaf57cd1040db"
    },
    {
      courseName: "New Venture Creation",
      courseId: "66bb53af591d6479c2b50573"
    },
    {
      courseName: "Small Retail Business Owner",
      courseId: "66c6f9be0c2eeac80af3b58e"
    }
]

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
    
    const res = await axios.get(`${rCourseUrl}/api/v1/Courses/GetCourseNew/${courseId}`);

    if (res) {
      setCourse(res.data.data);
      console.log("Courses", res.data.data)
    }
  }

  useEffect(() => {

    if (flagSmithCourseId) {
      getCourse(`${flagSmithCourseId}`);

    }
  }, []);


  return (
    <>
    <div className="mb-5">
      {demo ?
        <div style={{ maxWidth: "40rem" }}>
        {/* Select */}
            <span className="select-label d-block">Select a course</span>
  
            <div className="tom-select-custom">
              <select
          style={{fontSize: "1.5rem"}}
            className="js-select form-select tomselected ts-hidden-accessible"
            autoComplete="off"
            data-hs-tom-select-options='{
                          "placeholder": "Select a course...",
                          "hideSearch": true
                        }'
            id="tomselect-1"
            tabIndex={-1}
            value={coursesArray.find(course => course.courseId === selectedcourseId)?.courseId}
            onChange={(e) => {
              setCourseId(e.target.value);
              changeCourseId(e.target.value);
              
            }}
          >
             {coursesArray?.map((course: any) => (
              <option value={course.courseId}>{course.courseName}</option>
             ))}
          </select>
        
        </div>
          {/* End Select */}
        </div>:<h3 className="mb-2">
          <span style={{ fontWeight: '700' }}>{course?.title}</span>
        </h3>
        
}
      </div>
      <div className="rbt-dashboard-content-wrapper">
      {isMobile&&
        <div className="rbt-shadow-box" 
        style={{
          backgroundImage: `url(${banner??""})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center',
          height: '175px'
        }} />
      }

      {!isMobile&&
        <div className="height-350 rbt-shadow-box" 
        style={{
          backgroundImage: `url(${banner??""})`,
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
