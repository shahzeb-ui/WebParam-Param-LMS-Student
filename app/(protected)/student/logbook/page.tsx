// components/LogbookLogin.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/logbook/logbook-login.module.css";

const LogbookLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("school");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const renderForm = () => {
    return (
      <>
        <h3 className="mb-4">
          Log in to your {activeTab === "school" ? "School" : "Work"} Logbook
        </h3>
        <p>Welcome back! Please enter your details.</p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handlePasswordToggle}
              >
                {showPassword ? (
                  <i className="bi bi-eye"></i>
                ) : (
                  <i className="bi bi-eye-slash"></i>
                )}
              </button>
            </div>
          </div>
          <div className={`${styles.rememberForgot} mb-3`}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link href="#" className="text-decoration-none">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className={`btn ${styles.btnLogbook} w-100`}>
            <Link href="/student/logbook/student-logbook">
              Log In <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </button>
        </form>
      </>
    );
  };

  return (
    <div className={`${styles.logbookContainer}`}>
      <div className={styles.icon}>
        <i className="bi bi-journal-bookmark"></i>
        <span className="get-4-color style-3-left logText">Logbook</span>
        <div className="section-title">
          <h4 className="get-4-color">
            <span className={`logText ${styles.activeTabLabel}`}>
              {activeTab === "school" ? "Student" : "Work"}
            </span>
          </h4>
        </div>
      </div>

      <div className={styles.navbar}>
        <button
          className={`btn ${styles.navButton} ${
            activeTab === "school" ? styles.navButtonActive : ""
          }`}
          onClick={() => setActiveTab("school")}
        >
          School
        </button>
        <button
          className={`btn ${styles.navButton} ${
            activeTab === "work" ? styles.navButtonActive : ""
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
      </div>
      <div className={`${styles.logbookCard}`}>{renderForm()}</div>
    </div>
  );
};

export default LogbookLogin;
