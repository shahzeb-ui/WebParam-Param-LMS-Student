"use client";

import { usePathname, useRouter } from "next/navigation";
import SidebarData from "@/data/dashboard/student/siderbar.json";
import StudentMobileProps from "@/interfaces/side-bar";
import styles from "@/styles/side-bar/side-bar.module.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Link from "next/link";

const StudentMobileSideBar = ({isOpen,toggleSidebar}: StudentMobileProps): JSX.Element => {
  const [username, setUsername] = useState<string | null>(null);
  const path = usePathname();
  const router = useRouter();
  const cookies = new Cookies();

  const handleLinkClick = (link: string) => {
    router.push(link);
    toggleSidebar();
  };

  useEffect(() => {
    const storedUsername = cookies.get("username");
    setUsername(storedUsername);
  }, []);


  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`} style={{ width:'100%', position:'fixed', bottom:'0 !important', left:'0 !important', right:'0 !important', marginTop:'75px !important',zIndex:'1000'}}>
      <div className={styles.overlay} onClick={toggleSidebar}></div>
      <div className={styles["sidebar-content"]}>
        <div className="rbt-shadow-box" style={{borderRadius:'0', border:'1px solid #e0e0e0'}}>
          <div className="inner">
            <div className="content-item-content">
              <div className="rbt-default-sidebar-wrapper">
                <div className="section-title mb--20">
                  <h6 className="rbt-title-style-2">{username ? `Welcome ${username}` : "name surname"}</h6>
                </div>
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    {SidebarData &&
                      SidebarData.siderbar.slice(0, 8).map((data, index) => (
                        <li
                          className="nav-item"
                          key={index}
                          role="presentation"
                        >
                          <Link
                            className={`${path === data.link ? "active" : ""}`}
                            href={data.link}
                          >
                            <i className={data.icon} />
                            <span>{data.text}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </nav>

                <div className="section-title mt--40 mb--20">
                  <h6 className="rbt-title-style-2">User</h6>
                </div>

                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    {SidebarData &&
                      SidebarData.siderbar.slice(8, 11).map((data, index) => (
                        <li key={index}>
                          <a
                            className={`${path === data.link ? "active" : ""}`}
                            onClick={() => handleLinkClick(data.link)}
                            style={{ cursor: "pointer" }}
                          >
                            <i className={data.icon} />
                            <span>{data.text}</span>
                          </a>
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMobileSideBar;
