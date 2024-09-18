"use client";

import { rCourseUrl } from "@/app/lib/endpoints";
import "./userProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { isBrowser, isMobile } from 'react-device-detect';
import { Modal } from 'react-responsive-modal';
import { useCourseId } from "@/context/courseId-context/courseId-context";

const InstructorDashboardHeader = () => {
  const { courseId, setCourseId } = useCourseId();
  const [course, setCourse] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const cookies = new Cookies();

  const coursesArray = [
    { courseName: "Contact Centre Manager", courseId: "66c6f9fe0c2eeac80af3b590" },
    { courseName: "Electrician", courseId: "6698edd230068555e54ac58e" },
    { courseName: "Project Management", courseId: "668fcf681a1ce7b0635b61c6" },
    { courseName: "Computer Technician", courseId: "669f4301cb3eaf57cd1040db" },
    { courseName: "New Venture Creation", courseId: "66bb53af591d6479c2b50573" },
    { courseName: "Small Retail Business Owner", courseId: "66c6f9be0c2eeac80af3b58e" }
  ];

  console.log("courseId f: ", coursesArray.find(course => course.courseId === courseId)?.courseName);

  useEffect(() => {
    const modalOpened = localStorage.getItem("modalOpened");
    if (modalOpened) {
      return;
    }
    setOpen(true);
    localStorage.setItem("modalOpened", "true");
  }, []);

  return (
    <>
      {/* Modal for course selection */}
      {process.env.NEXT_PUBLIC_DEMO && (
        <Modal 
          open={!open} 
          onClose={() => setOpen(false)} 
          center 
          blockScroll={true}
          focusTrapped={true}
          closeOnOverlayClick={false}
          styles={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            modal: { width: '30%', height: '30%', borderRadius: '10px', minWidth: '300px' },
          }}
          classNames={{ modal: 'custom-modal' }}
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
      <div className="mb-5" style={{marginTop:"-7%"}}>
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
      <div className="rbt-dashboard-content-wrapper">
        {isMobile ? (
          <div
            className="rbt-shadow-box"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_BANNER_URL ?? ""})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '175px'
            }}
          />
        ) : (
          <div
            className="height-350 rbt-shadow-box"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_BANNER_URL ?? ""})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
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
