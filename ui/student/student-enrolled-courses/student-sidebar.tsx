"use client";
import Cookies from "universal-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SidebarData from "@/data/dashboard/student/siderbar.json";
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useFlags } from "flagsmith/react";
import { AnyARecord } from "dns";

const StudentDashboardSidebar = () => {
  const cookies = new Cookies();
  const user = cookies.get("loggedInUser");
  const pathName = usePathname();
  const flags = useFlags(["next_public_is_freemium"]);
  const router = useRouter();
  const [isFreemium, setIsFreemium] = useState<boolean>(
    JSON.parse(localStorage.getItem("isFreemium")!) ?? false
  );
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const path = usePathname();
  const [username, setUsername] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleFreemiumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsFreemium(isChecked);
    localStorage.setItem("isFreemium", JSON.stringify(isChecked));
    const date = new Date().toString();
    if (isFreemium) {
      router.replace(`/student/enrolled-courses?tab=enrolled`);
    } else {
      router.replace(`/student/projects?tab=enrolled`);
    }
  };

  useEffect(() => {
    localStorage.setItem("isFreemium", JSON.stringify(isFreemium));
  }, [isFreemium]);

  const flagsData = JSON.parse(localStorage.getItem('flagsData') || '{}');

  return (
    <>
      <div
        className="rbt-default-sidebar sticky-top rbt-shadow-box"
        style={{ border: "4px solid #f1f2f3", boxShadow: "0 0 10px #f1f2f3" }}
      >
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">
                  {username ? `Welcome ${username}` : "name surname"}
                </h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData &&
                    SidebarData?.siderbar
                      ?.slice(0, 7)
                      .map((data: any, index: any) => {
                        if (
                          flagsData.next_public_is_freemium &&
                          data.link == "/student/enrolled-courses"
                        ) {
                          return (
                            <li
                              className="nav-item"
                              key={index}
                              role="presentation"
                            >
                              <a
                                href={"/student/projects?tab=enrolled"}
                                className={`${
                                  path == "/student/projects" ? "active" : ""
                                }`}
                                style={{
                                  color:
                                    path == "/student/projects"
                                      ? "#2f57ef"
                                      : "",
                                }}
                              >
                                <i className={data.icon} />
                                <span>My Projects</span>
                              </a>
                            </li>
                          );
                        }
                        return (
                          <li
                            className="nav-item"
                            key={index}
                            role="presentation"
                          >
                            <a
                              className={`${
                                path === data.link ? "active" : ""
                              }`}
                              href={data.link}
                            >
                              <i className={data.icon} />
                              <span>{data.text}</span>
                            </a>
                          </li>
                        );
                      })}
                </ul>
              </nav>

              {SidebarData?.siderbar.length > 7 && (
              {SidebarData?.siderbar.length > 7 && (
                <div className="section-title mt--40 mb--20">
                  <h6 className="rbt-title-style-2">User</h6>
                </div>
              )}
              )}
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData &&
                    SidebarData?.siderbar
                      .slice(7)
                      .map((data: any, index: any) => (
                        <li key={index}>
                          {data.text === "FlagSmith Settings" ? (
                            <div>
                              <a
                                href="#"
                                className={`${
                                  path.startsWith(data.link) ? "active" : ""
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsSettingsOpen(!isSettingsOpen);
                                }}
                              >
                                <i className={data.icon} />
                                <span>{data.text}</span>
                              </a>
                              {isSettingsOpen && (
                                <ul className="submenu">
                                  <li>
                                    <label htmlFor="toggleSwitch" className="switch">
                                      Freemium
                                      <Switch
                                        {...label}
                                        id="toggleSwitch"
                                        checked={isFreemium}
                                        onChange={handleFreemiumChange}
                                        aria-label="Toggle Freemium"
                                      />
                                    </label>
                                  </li>
                                  <li>
                                    <label htmlFor="toggleBanner" className="switch">
                                      Show Top Banner
                                      <Switch
                                        id="toggleBanner"
                                        disabled
                                        checked={flagsData.show_top_banner}
                                        aria-label="Toggle Show Top Banner"
                                      />
                                    </label>
                                  </li>
                                  <li>
                                    <label htmlFor="toggleDemo" className="switch">
                                      Demo Mode
                                      <Switch
                                        disabled
                                        id="toggleDemo"
                                        checked={flagsData.next_public_demo}
                                        aria-label="Toggle Demo Mode"
                                      />
                                    </label>
                                  </li>
                                  {[
                                    { label: "Site Name", key: "next_public_sitename" },
                                    { label: "Measurement ID", key: "next_public_measurement_id" },
                                    { label: "Client Key", key: "next_public_clientkey" },
                                    { label: "User Type", key: "next_public_user" },
                                    { label: "API Environment", key: "next_public_api_env" },
                                    { label: "Primary Color", key: "next_public_primary_color" },
                                    { label: "Document Background Color", key: "next_public_document_bg_color" },
                                    { label: "Document Border Color", key: "next_public_document_border_color" },
                                    { label: "Login Image URL", key: "next_public_login_image" },
                                    { label: "Logo URL", key: "next_public_logo_url" },
                                    { label: "Banner URL", key: "next_public_banner_url" },
                                    { label: "Favicon URL", key: "next_public_favicon_url" }
                                  ].map((item) => (
                                    <li key={item.key}>
                                      <span style={{fontSize:"small"}}>{item.label}: </span>
                                      <span style={{fontSize:"small"}}>{flagsData[item.key] ? flagsData[item.key].toString().slice(0, 10) + '...' : 'N/A'}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <a
                              href={data.link}
                              className={`${
                                path === data.link ? "active" : ""
                              }`}
                            >
                              <i className={data.icon} />
                              <span>{data.text}</span>
                            </a>
                          )}
                        </li>
                      ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboardSidebar;
