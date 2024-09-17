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

const InstructorDashboardHeader = () => {
  const { courseId, setCourseId } = useCourseId();
  const [course, setCourse] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [biographyPercentage, setBiographyPercentage] = useState<string>("");
  const [contactInformationPercentage, setContactInformationPercentage] = useState<string>("");
  const [employmentPercentage, setEmploymentPercentage] = useState<string>("");
  const [documentsPercentage, setDocumentsPercentage] = useState<string>("");
  const [demographicLegalPercentage, setDemographicLegalPercentage] = useState<string>("");
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
    
    const res = await axios.get(`${rCourseUrl}/api/v1/Courses/GetCourseNew/${courseId}`);

    if (res) {
      setCourse(res.data.data);
    }
  }

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DEMO) {
      const courseId = process.env.NEXT_PUBLIC_COURSE_ID??"";
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

  useEffect(() => {
    const biography = localStorage.getItem("Biography");
    const contactInformationPercentage = localStorage.getItem("contactInformationPercentage");
    const demographicLegalPercentage = localStorage.getItem("demographicLegalPercentage");
    const employmentPercentage = localStorage.getItem("employmentPercentage");
    const documentsPercentage = localStorage.getItem("documentsPercentage");
    if (biography) {
      setBiographyPercentage(biography);
    }
    if (contactInformationPercentage) {
      setContactInformationPercentage(contactInformationPercentage);
    }
    if (demographicLegalPercentage) {
      setDemographicLegalPercentage(demographicLegalPercentage);
    }
    if (employmentPercentage) {
      setEmploymentPercentage(employmentPercentage);
    }
    if (documentsPercentage) {
      setDocumentsPercentage(documentsPercentage);
    }
  }, []);

  return (
    <>
      {/* Modal for course selection */}
      {process.env.NEXT_PUBLIC_DEMO && (
        <Modal 
          open={open} 
          onClose={() => setOpen(false)} 
          center 
          blockScroll={true}
          focusTrapped={true}
          closeOnOverlayClick={false}
          styles={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            modal: { width: '30%', height: '30%', borderRadius: '10px' },
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <h4 className="mb-4">Select a course</h4>
            <div className="tom-select-custom">
              <select
                style={{ fontSize: "1.5rem" }}
                className="js-select form-select"
                value={coursesArray.find(course => course.courseId === courseId)?.courseId ?? ""}
                onChange={(e) => {
                  const selectedCourseId = e.target.value;
                  setCourseId(selectedCourseId);  // Update the context
                  localStorage.setItem("courseId", selectedCourseId);  // Optionally update localStorage directly if needed
                  setOpen(false);
                }}
              >
                <option value="">Select a course...</option>
                {coursesArray.map((course) => (
                  <option key={course.courseId} value={course.courseId}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Modal>
      )}

      {/* Course title display */}
      <div className="mb-5">
        {process.env.NEXT_PUBLIC_DEMO ? (
          <div style={{ maxWidth: "40rem" }}>
            <span className="select-label d-block">Select a course</span>
            <div className="tom-select-custom">
              <select
                style={{ fontSize: "1.5rem" }}
                className="js-select form-select"
                value={coursesArray.find(course => course.courseId === courseId)?.courseId ?? ""}
                onChange={(e) => {
                  const selectedCourseId = e.target.value;
                  setCourseId(selectedCourseId);  // Update the context
                  localStorage.setItem("courseId", selectedCourseId);  // Optionally update localStorage directly if needed
                }}
              >
                <option value="">Select a course...</option>
                {coursesArray.map((course) => (
                  <option key={course.courseId} value={course.courseId}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <h3 className="mb-2">
            <span style={{ fontWeight: '700' }}>{course?.title}</span>
          </h3>
        )}
      </div>

      {/* Responsive course banner */}
      <div className="rbt-dashboard-content-wrapper banner-wrapper">
        {isMobile ? (
          <div
            className="rbt-shadow-box"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_FREEMIUM  ? process.env.NEXT_PUBLIC_THOOTO_BANNER_URL:process.env.NEXT_PUBLIC_BANNER_URL})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '175px',
              position: 'relative'
            }}
          >
            <AnimatePresence>
              {pathname === "/student/student-profile" && isClicked &&
                <div className="info-button-container">
            <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }} 
             transition={{ duration: 1 }}
             className="rbt-dashboard-content rbt-shadow-box mobile-progress-status" style={{display:`${isHovered ? 'flex !important' : 'none !important'}`}}>
                  <div className="mobile-progress-status-left border-warning">
                    <h4>66%</h4>
                    <p>Completed</p>
                  </div>
                  <div className="mobile-progress-status-right">
                    <h4>Profile Completion</h4>

                    <div className="mobile-progress-bar-container">
                      <div className="mobile-progress-item">
                        <h6>Biography:</h6><span className="progress-percentage text-success">100%</span>
                      </div>
                      <div className="mobile-progress-item">
                        <h6>Demographics:</h6><span className="progress-percentage text-warning">60%</span>
                      </div>
                      <div className="mobile-progress-item">
                        <h6>Contacts:</h6><span className="progress-percentage text-success">80%</span>
                      </div>
                      <div className="mobile-progress-item">
                        <h6>Employment:</h6><span className="progress-percentage text-danger">30%</span>
                      </div>
                      <div className="mobile-progress-item">
                        <h6>Documents:</h6><span className="progress-percentage text-warning">60%</span>
                      </div>
                    </div>
                  </div>  
                </motion.div>
                </div>
              }

               
              {pathname === "/student/student-profile" && <button type="button" 
                className="btn btn-primary progress-status-button" 
                style={{overflow:"hidden", color:"#24345c"}} 
                onClick={()=>setIsClicked(!isClicked)}>
                {isClicked ? <i className="bi bi-x-circle-fill text-danger" style={{fontSize:"1.5rem"}}/>:<i className="bi bi-info-circle-fill" style={{color:"#24345c"}} />}

                {isClicked ? "" : "My Progress"}
                </button>}
                 {/* } */}
            </AnimatePresence>
          </div>
        ) : (
          <AnimatePresence>
          <div
            className="height-350 rbt-shadow-box progress-status-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}  
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_FREEMIUM  ? process.env.NEXT_PUBLIC_THOOTO_BANNER_URL:process.env.NEXT_PUBLIC_BANNER_URL})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }}
          >
            {pathname === "/student/student-profile" && isHovered ?
            <motion.div
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }} 
             transition={{ duration: 1 }}
             className="rbt-dashboard-content rbt-shadow-box progress-status" style={{display:`${isHovered ? 'flex !important' : 'none !important'}`}}>
                  <div className="progress-status-left border-warning">
                    <h4>66%</h4>
                    <p>Completed</p>
                  </div>
                  <div className="progress-status-right">
                    <h4>Profile Completion</h4>
                    <div className="progress-bar-container">
                      <div className="progress-item">
                        <h6>Biography:</h6><span className="progress-percentage text-success">{biographyPercentage}%</span>
                      </div>
                      <div className="progress-item">
                        <h6>Demographics:</h6><span className="progress-percentage text-warning">{demographicLegalPercentage}%</span>
                      </div>
                      <div className="progress-item">
                        <h6>Contacts:</h6><span className="progress-percentage text-success">{contactInformationPercentage}%</span>
                      </div>
                      <div className="progress-item">
                        <h6>Employment:</h6><span className="progress-percentage text-danger">{employmentPercentage}%</span>
                      </div>
                      <div className="progress-item">
                        <h6>Documents:</h6><span className="progress-percentage text-warning">{documentsPercentage}%</span>
                      </div>
                    </div>
                  </div>  
                </motion.div>
                :
                <div className="progress-status-left border-warning">
                   {pathname === "/student/student-profile" ? <i className="bi bi-info-circle-fill progress-status"></i> : null}
                  </div>
                }
          </div>
          </AnimatePresence>
        )}

        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg"></div>
            <div className="tutor-content"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardHeader;
