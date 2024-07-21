"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/ui/loader/loader";
import styles from "@/styles/enrolled-courses/enrolled-courses.module.css";
import { getAlltUnitStandards } from "@/actions/unit-standards/get-unit-standards";
import { UnitStandardData } from "@/interfaces/enrolled-unit-standards/unit-standards/unit-standards";
import UnitStandardWidget from "@/ui/student/enrolled/sample-unit";

const EnrolledCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [unitStandards, setUnitStandards] = useState<UnitStandardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [isProgress, setIsProgress] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [courseStyle, setCourseStyle] = useState("two");

  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // const handleNext = () => {
  //   if (endIndex < unitStandards.length) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const getUnitStandards = async (courseId: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAlltUnitStandards(courseId);
      // console.log("get data: ", data);
      setUnitStandards(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const courseId = "668fcf681a1ce7b0635b61c6";
    getUnitStandards(courseId);
  }, []);

  // console.log("The unit standard data: ", unitStandards);

  if (loading) {
    return <Loader />;
  } else {
  }

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="get-4-color rbt-title-style-3">
              <i className="bi bi-laptop "></i>
              <span className="style-3-left">My Courses</span>
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
                {unitStandards?.map((standard, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`unit-standard-completed-${index}`}
                  >
                    <UnitStandardWidget
                      data={standard}
                      courseStyle={courseStyle}
                      isProgress={isProgress}
                      isCompleted={isCompleted}
                      showDescription={showDescription}
                      isEdit={isEdit}
                      showAuthor={showAuthor}
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
                {unitStandards?.map((standard, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`unit-standard-completed-${index}`}
                  >
                    <UnitStandardWidget
                      data={standard}
                      courseStyle={courseStyle}
                      isProgress={isProgress}
                      isCompleted={isCompleted}
                      showDescription={showDescription}
                      isEdit={isEdit}
                      showAuthor={showAuthor}
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
                {unitStandards?.map((standard, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`unit-standard-completed-${index}`}
                  >
                    <UnitStandardWidget
                      data={standard}
                      courseStyle={courseStyle}
                      isProgress={isProgress}
                      isCompleted={isCompleted}
                      showDescription={showDescription}
                      isEdit={isEdit}
                      showAuthor={showAuthor}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
