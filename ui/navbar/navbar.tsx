"use client";

import { useEffect, useState } from "react";
import './navbar.scss'
import Link from "next/link";
import Image from "next/image";
import User from "@/avator/user.png";
import styles from "@/styles/side-bar/profile-nav-bar.module.css";

import Nav from "./nav";
import StudentMobileSideBar from "../student/student-enrolled-courses/mobile-student-sidebar";
import { usePathname } from "next/navigation";
import Cookies from "universal-cookie";
import SearchResults from "../searchResults/SearchResults";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  const pathname = usePathname();
  const cookies = new Cookies();
  
  useEffect(() => {
    const Pic = cookies.get("profilePic");
    setProfilePic(Pic);
  }, []);

  const sections = [
    { id: "dashboard", label: "Dashboard", link: "/student/dashboard" },
    { id: "course", label: "My Courses", link: "/student/enrolled-courses" },
  ];

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
  }, [currentSection]);

  const handleAvatarClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    if (!isSidebarOpen) {
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      });
    }
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  if (["/register", "/login", "/verify-account", "/forgot-password", "/forgot-password/otp", "/testing"].includes(pathname)) {
    return <div></div>;
  } 


  return (
    <>
      <header className="rbt-header" style={{padding:'10px 0'}}>
        <div className="rbt-sticky-placeholder"></div>

        <div className="rbt-header-wrapper" style={{padding:'10px 0'}}>
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left">
                <Link href="/" className="logo">
                  <Image src={process.env.NEXT_PUBLIC_LOGO_URL??''} alt="logo" width={80} height={20} />
                </Link>
              </div>

              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav onepagenav">
                  <ul className="mainmenu">
                    {sections.map((sec, i) => (
                      <li
                        className={currentSection === sec.label ? "current" : ""}
                        key={i}
                      >
                        <Link href={sec.link} style={{cursor:'pointer', margin:'0 10px', opacity:'.8'}}>{sec.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="rbt-header-sec-col rbt-header-center d-none d-md-block margin-right-3">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <div className="rbt-search-field">
                      <div className="search-field">
                        <input 
                          type="text" 
                          value={search}
                          placeholder="Search Course"
                          onChange={(e)=>setSearch(e.target.value)}
                          />
                        <button
                          className="rbt-round-btn serach-btn"
                          type="submit"
                        >
                          <i className="feather-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-right d-flex align-items-center mt">
                <div className="d-none d-md-block me-3">
                  <span onClick={handleAvatarClick}>
                  {profilePic ? <Image
                      src={`${profilePic}`||User.src}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-circle"
                      style={{
                        border:'2px solid lightgray'
                      }}
                    />:<Image
                    src={`${profilePic}`||User.src}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-circle"
                    style={{
                      border:'2px solid lightgray'
                    }}
                  />}
                  </span>
                  {isDropdownVisible && (
                    <div className={styles.dropdownMenu}>
                      {isDropdownVisible && <Nav setIsSidebarOpen={setIsSidebarOpen} setIsDropdownVisible={setIsDropdownVisible} />}
                    </div>
                  )}
                </div>

                <div
                  className={`humburger-menu ${isSidebarOpen ? 'active' : ''}`}
                  id="rbt-offcanvas-activation"
                  onClick={toggleSidebar}
                  style={{cursor:'pointer'}}
                >
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
      {search && <SearchResults search={search} />}
    </>
  );
};

export default Navbar;