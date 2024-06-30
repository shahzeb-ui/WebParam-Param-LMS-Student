"use client";

import { useState } from "react";
import Link from "next/link";
import Courses from "@/data/dashboard/instructor/instructor.json";
import CourseWidgets from "@/ui/student/enrolled/course";
import styles from "@/styles/enrolled-courses/enrolled-courses.module.css";

const EnrolledCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNext = () => {
    if (endIndex < Courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="get-4-color rbt-title-style-3">
              <i className="bi bi-laptop "></i>
              <span className="style-3-left">My Coursess</span>
            </h4>
          </div>
          <div
            className={`advance-tab-button mb--30${styles.advanceTabButton}`}
          >
            <ul
              className={`nav nav-tabs tab-button-style-2 ${styles.navTabs}`}
              id="myTab-4"
              role="tablist"
            >
              <li role="presentation">
                <Link
                  href="#"
                  className={`tab-button active ${styles.tabButton}`}
                  id="home-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#home-4"
                  role="tab"
                  aria-controls="home-4"
                  aria-selected="true"
                >
                  <span className="title">Enrolled</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className={`tab-button ${styles.tabButton}`}
                  id="profile-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-4"
                  role="tab"
                  aria-controls="profile-4"
                  aria-selected="false"
                >
                  <span className="title">Active</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className={`tab-button ${styles.tabButton}`}
                  id="contact-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-4"
                  role="tab"
                  aria-controls="contact-4"
                  aria-selected="false"
                >
                  <span className="title">Completed</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="home-4"
              role="tabpanel"
              aria-labelledby="home-tab-4"
            >
              <div className="row g-5">
                {Courses.slice(startIndex, endIndex)?.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-enrolled-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isProgress={true}
                      isCompleted={false}
                      isEdit={false}
                      showDescription={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="profile-4"
              role="tabpanel"
              aria-labelledby="profile-tab-4"
            >
              <div className="row g-5">
                {Courses.slice(startIndex, endIndex)?.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-active-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isCompleted={false}
                      isProgress={false}
                      isEdit={false}
                      showDescription={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="contact-4"
              role="tabpanel"
              aria-labelledby="contact-tab-4"
            >
              <div className="row g-5">
                {Courses.slice(startIndex, endIndex)?.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-completed-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isCompleted={true}
                      isProgress={true}
                      showDescription={false}
                      isEdit={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.paginationContainer}>
            <div className="rbt-card-bottom">
              <button
                className={`rbt-btn btn-sm ${styles.rbtCardBottom}`}
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                <span className="feather-arrow-left"></span>
                <span>Previous</span>
              </button>
            </div>

            <div className="rbt-card-bottom">
              <button
                className={`rbt-btn btn-sm ${styles.rbtBtn}`}
                onClick={handleNext}
                disabled={endIndex >= Courses.length}
              >
                <span>Next</span>
                <span className="feather-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
