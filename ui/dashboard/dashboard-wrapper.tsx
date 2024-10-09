"use client";

import { motion, AnimatePresence } from "framer-motion"
import { rCourseUrl } from "@/app/lib/endpoints";
import "./userProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { isBrowser, isMobile } from 'react-device-detect';
import { Modal } from 'react-responsive-modal';
import { useCourseId } from "@/context/courseId-context/courseId-context";
import { usePathname } from "next/navigation";
import { GET } from "@/app/lib/api-client";
import { useProgressContext } from "@/context/progress-card-context/progress-context";


const InstructorDashboardHeader = () => {
  const { courseId, setCourseId } = useCourseId();
  const [overallPercentage, setOverallPercentage] = useState<number>(0);
  const {
    biographyPercentage,
    contactInformationPercentage,
    demographicLegalPercentage,
    employmentPercentage,
    documentsPercentage,
  } = useProgressContext(); // Use context values

  const getBorderClass = (percentage: number) => {
    if (percentage >= 80) return 'border-success';
    if (percentage >= 40) return 'border-warning';
    return 'border-danger';
  };

  const getTextClass = (percentage: number) => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 40) return 'text-warning';
    return 'text-danger';
  };

  useEffect(() => {
    const totalFields = 5; // Assuming there are 5 fields to calculate percentages for
    const completedFields = [
      biographyPercentage,
      contactInformationPercentage,
      demographicLegalPercentage,
      employmentPercentage,
      documentsPercentage
    ].filter(field => field > 0).length;

    const overallPercentage = (completedFields / totalFields) * 100;
    setOverallPercentage(overallPercentage);
  }, [biographyPercentage, contactInformationPercentage, demographicLegalPercentage, employmentPercentage, documentsPercentage]);
  
  const [course, setCourse] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const cookies = new Cookies();
  const pathname = usePathname();

  const coursesArray = [
    { courseName: "Contact Centre Manager", courseId: "66c6f9fe0c2eeac80af3b590" },
    { courseName: "Electrician", courseId: "6698edd230068555e54ac58e" },
    { courseName: "Project Management", courseId: "668fcf681a1ce7b0635b61c6" },
    { courseName: "Computer Technician", courseId: "669f4301cb3eaf57cd1040db" },
    { courseName: "New Venture Creation", courseId: "66bb53af591d6479c2b50573" },
    { courseName: "Small Retail Business Owner", courseId: "66c6f9be0c2eeac80af3b58e" }
  ];

  async function getCourse(courseId: string) {
    const res = await GET(`${rCourseUrl}/api/v1/Courses/GetCourseNew/${courseId}`);
    if (res) {
      setCourse(res.data.data);
    }
  }

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DEMO) {
      const courseId = process.env.NEXT_PUBLIC_COURSE_ID ?? "";
      getCourse(courseId);
    }
  }, [courseId]);

  useEffect(() => {
    const modalOpened = localStorage.getItem("modalOpened");
    if (modalOpened) {
      return;
    }
    setOpen(true);
    localStorage.setItem("modalOpened", "true");
  }, []);

  const bg = process.env.NEXT_PUBLIC_BANNER_URL;

  return (
    <>
      
              
      
      
  

      {/* Responsive course banner */}
      {/* <div className="rbt-dashboard-content-wrapper banner-wrapper">
        {isMobile ? (
          <div
            className=""
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_BANNER_URL})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '175px',
              position: 'relative'
            }}
          >
            
          </div> */}
        {/* ) : (
          <AnimatePresence>
            <div
              className="height-350 progress-status-wrapper"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundImage: `url(${ process.env.NEXT_PUBLIC_BANNER_URL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
             
            </div>
          </AnimatePresence>
        )} */}
      {/* </div> */}
    </>
  );
};

export default InstructorDashboardHeader;
