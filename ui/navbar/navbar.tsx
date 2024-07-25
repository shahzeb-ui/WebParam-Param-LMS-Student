"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import UserStudent from "@/ui/user/user-dropdown";
import styles from "@/styles/side-bar/profile-nav-bar.module.css";
import StudentMobileSideBar from "../student/student-enrolled-courses/mobile-student-sidebar";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [];

  useEffect(() => {
    const sectionIds = ["dashboard", "course", "progress"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="rbt-header">
        <div className="rbt-sticky-placeholder"></div>

        <div className="rbt-header-wrapper">
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left">
                <Link 
                  href="/" 
                  className="logo" 
                  style={{ 
                    fontFamily: 'League Spartan, sans-serif', 
                    fontWeight: 'bold', 
                    color: '#24345c',
                    fontSize: '40px'
                  }}
                >
                  thooto
                </Link>
              </div>

              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav onepagenav">
                  <ul className="mainmenu">
                    {/* Removed sections map */}
                  </ul>
                </nav>
              </div>

              <div className="header-right d-flex align-items-center mt">
                <div
                  className="rbt-offcanvas-trigger d-xl-none"
                  id="rbt-offcanvas-activation"
                  onClick={toggleSidebar}
                >
                  <span className="offcanvas-trigger">
                    <span className="offcanvas-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <StudentMobileSideBar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Navbar;