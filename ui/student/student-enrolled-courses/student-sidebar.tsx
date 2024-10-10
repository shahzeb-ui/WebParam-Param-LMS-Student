"use client";

import Cookies from "universal-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GetSideBarData } from "@/interfaces/SidebarData";
import styles from "./StudentDashboardSidebar.module.css";
import Image from "next/image";
import profilePicture from "../../../app/(auth)/login/profilepic.jpeg";
import ramalo from "../../../ui/login/ramalo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Importing logout icon

const StudentDashboardSidebar: React.FC = () => {
  const cookies = new Cookies();
  const path = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  const handleLogOut = () => {
    cookies.remove("loggedInUser");
    cookies.remove("username");
    cookies.remove("userEmail");
    cookies.remove("resetEmail");
    localStorage.removeItem("courseId");
    localStorage.removeItem("modalOpened");
    router.push("/login");
  };

  useEffect(() => {
    const storedUsername = cookies.get("username");
    setUsername(storedUsername);
  }, []);

  const SidebarData = GetSideBarData();

  const basePath = path.split("?")[0];

  useEffect(() => {
    console.log(`This is the path: ${path}`);
  });

  const calculateFillOpacity = (progress: number) => {
    return progress / 100; // Adjust opacity between 0 (0%) to 1 (100%)
  };
  const calculateProgressWidth = (progress: number) => {
    const totalWidth = 22; // The full width of the SVG
    return (progress / 100) * totalWidth; // Adjust the width based on progress (0 to 100)
  };

  return (
    <div
      className={`sticky-top h-100 w-20 rbt-shadow-box d-flex flex-column justify-content-between ${styles.sidebar}`}
      style={{ fontFamily: "'Montserrat', sans-serif", minHeight: "100vh" }}
    >
      <div>
        {/* Logo */}
        <div className="logo-container text-center mb-5">
          <Image src={ramalo} alt="Logo" width={120} height={60} priority />
        </div>

        {/* Profile Picture */}
        <div
          className="profile-picture-container d-flex justify-content-center align-items-center text-center mb-4"
          style={{
            width: "120px",
            height: "120px",
            margin: "0 auto",
          }}
        >
          <Image
            src={profilePicture}
            alt="Profile Picture"
            className="rounded-circle"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* Username */}
        <div className="section-title mb-5 text-center">
          <h6 className={` text-capitalize ${styles.username} fw-bold fs-1`}>
            {username ? `${username}`.toUpperCase() : "Nicole".toUpperCase()}
          </h6>
          <p className="role-text fs-4">Front-End Designer</p>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-grow-1">
          <ul className="d-flex flex-column justify-content-start h-100">
            {SidebarData &&
              SidebarData.map((data, index) => (
                <li className="mb-4" key={index} role="presentation">
                  <Link
                    href={data.link}
                    className={`d-flex align-items-center fs-3 ${
                      styles.sidebarLink
                    } ${
                      basePath === data.link.split("?")[0]
                        ? `fw-bold ${styles.activeLink}`
                        : ""
                    }`}
                  >
                    <i className={data.icon + " pe-4"}></i>
                    <span className="ms-2">{data.text}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className={` ms-4  `}>
        <button
          onClick={handleLogOut}
          className="nav-link d-flex align-items-center fs-3 ms-3 "
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <div className=" feather-log-out me-2 " />
          <span>Logout</span>
        </button>
      </div>

      <div className="progress-loader mt-5">
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static Background Shape */}
          <path
            d="M20.6522 18.5868C19.2386 18.5868 17.8068 17.4148 16.8338 15.4371C16.5768 14.9244 16.3014 14.4482 15.9894 13.9904C18.9816 13.2763 21.2396 10.676 21.4232 7.54459C21.4232 7.39809 21.4232 7.25159 21.4232 7.1051C21.4232 3.18631 18.229 0 14.3005 0H0.0917874V4.33997H14.3372C15.8609 4.33997 17.1092 5.58519 17.1092 7.1051C17.1092 8.625 15.8609 9.87022 14.3372 9.87022H8.3343H7.1227C3.1942 9.87022 0 13.0565 0 16.9753V22.9634H4.35072V16.9753C4.35072 15.4554 5.59903 14.2102 7.1227 14.2102H9.12367C10.5372 14.2102 11.9691 15.3822 12.942 17.3599C14.6676 20.8575 17.5498 22.9451 20.6522 22.9451H21.4783V18.6051H20.6522V18.5868Z"
            fill="#C4C4C4" // Static background fill
          />

          {/* Dynamic Fill Path with Mask */}
          <mask id="progressMask">
            {/* Mask rectangle that grows based on progress */}
            <rect
              x="0"
              y="0"
              width={calculateProgressWidth(40)} // Width grows with progress
              height="100%"
              fill="white"
            />
          </mask>

          {/* The same shape is filled dynamically */}
          <path
            d="M20.6522 18.5868C19.2386 18.5868 17.8068 17.4148 16.8338 15.4371C16.5768 14.9244 16.3014 14.4482 15.9894 13.9904C18.9816 13.2763 21.2396 10.676 21.4232 7.54459C21.4232 7.39809 21.4232 7.25159 21.4232 7.1051C21.4232 3.18631 18.229 0 14.3005 0H0.0917874V4.33997H14.3372C15.8609 4.33997 17.1092 5.58519 17.1092 7.1051C17.1092 8.625 15.8609 9.87022 14.3372 9.87022H8.3343H7.1227C3.1942 9.87022 0 13.0565 0 16.9753V22.9634H4.35072V16.9753C4.35072 15.4554 5.59903 14.2102 7.1227 14.2102H9.12367C10.5372 14.2102 11.9691 15.3822 12.942 17.3599C14.6676 20.8575 17.5498 22.9451 20.6522 22.9451H21.4783V18.6051H20.6522V18.5868Z"
            fill="#FF69B4" // Dynamic fill color
            mask="url(#progressMask)" // Apply mask to create progress effect
          />
        </svg>
      </div>
    </div>
  );
};

export default StudentDashboardSidebar;
