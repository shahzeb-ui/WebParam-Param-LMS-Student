"use client";

import { useState } from "react";
import Link from "next/link";

const LogbookLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="logbook-container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="logbook-card p-4 shadow rounded bg-white">
        <h3 className="mb-4">Log in to your Logbook</h3>
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
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Link href="#" className="text-decoration-none">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="btn btn-logbook w-100">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogbookLogin;
