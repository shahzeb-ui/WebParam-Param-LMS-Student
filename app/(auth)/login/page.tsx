"use client";
import "./login.scss";
import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { LoginUser } from "@/app/api/auth/auth";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import { useFlags } from "flagsmith/react";
import { isBoolean } from "util";

export default function LoginPage() {
  const flags = useFlags([
    "next_public_user",
    "freemium",
    "next_public_api_env",
    "next_public_sitetagline",
    "next_public_sitename",
    "next_public_clientkey",
    "next_public_access",
    "next_public_demo",
    "next_public_freemium",
    "next_public_course_id",
    "show_top_banner",
    "next_public_document_border_color",
    "next_public_document_bg_color",
    "next_public_primary_color",
    "next_public_favicon_url",
    "next_public_banner_url",
    "next_public_logo_url",
    "next_public_login_image"
  ]);
  const imageCover = flags.next_public_login_image.value;
  const topBanner = flags.show_top_banner.value;
  const isFreemium = flags.next_public_freemium.value;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<any>({
    email: false,
    password: false,
  });

  const cookies = new Cookies();
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const newHasError = {
      email: email === "",
      password: password === "",
    };

    setHasError(newHasError);

    if (newHasError.email || newHasError.password) {
      setIsLoading(false);
      return;
    }

    const payload = {
      email,
      password,
    };

    try {
      const res = await LoginUser(payload);
      setIsLoading(false);

      if (res == undefined) {
        setErrorMessage("Incorrect User details");
        return;
      }

      if (res) {
        cookies.set("loggedInUser", res.data);
        debugger;
        const redirectPath =
        isFreemium 
            ? "/student/projects?tab=enrolled"
            : "/student/student-profile";
        router.push(redirectPath);
      }
    } catch (error: any) {
      setErrorMessage("Network Error please try again");
      setIsLoading(false);
    }

    console.log("Form submitted successfully");
    setIsLoading(false);
  }

  useEffect(() => {
    const flagsData = {
      next_public_user: flags.next_public_user.value,
      freemium: flags.freemium.value,
      next_public_api_env: flags.next_public_api_env.value,
      next_public_sitetagline: flags.next_public_sitetagline.value,
      next_public_sitename: flags.next_public_sitename.value,
      next_public_clientkey: flags.next_public_clientkey.value,
      next_public_access: flags.next_public_access.value,
      next_public_demo: flags.next_public_demo.value,
      next_public_freemium: flags.next_public_freemium.value,
      next_public_course_id: flags.next_public_course_id.value,
      show_top_banner: flags.show_top_banner.value,
      next_public_document_border_color: flags.next_public_document_border_color.value,
      next_public_document_bg_color: flags.next_public_document_bg_color.value,
      next_public_primary_color: flags.next_public_primary_color.value,
      next_public_favicon_url: flags.next_public_favicon_url.value,
      next_public_banner_url: flags.next_public_banner_url.value,
      next_public_logo_url: flags.next_public_logo_url.value,
      next_public_login_image: flags.next_public_login_image.value
    };
    localStorage.setItem('flagsData', JSON.stringify(flagsData));
    
  }, [flags]);

  useEffect(() => {
    if (email !== "" || password !== "") {
      setHasError({ email: false, password: false });
      setErrorMessage("");
    }
    localStorage.setItem("show_top_banner",JSON.stringify(topBanner))
  }, [email, password]);

  return (
    <div className="login-container">
      <div
        className="left-container d-md-block d-none"
        data-aos="zoom-out-right"
        style={{
          backgroundImage: !isMobile ? `url(${imageCover})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)",
        }}
      ></div>
      <div className="login-inner" data-aos="zoom-out-left">
        <h1>Sign in</h1>
        <p>Welcome back! Please enter your details</p>
        <form className="col-12" onSubmit={handleSubmit}>
          <div>
            <div className="rbt-form-group mb-5">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
                className={hasError.email ? "error" : ""}
              />
            </div>
          </div>
          <div>
            <div className="rbt-form-group mb-5">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                id="password"
                // required
                className={hasError.password ? "error" : ""}
              />
            </div>
          </div>
          <div className="mb--30 remember-me">
            <div>
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formSwitch1"
                  checked={true}
                />
                <label className="form-check-label" htmlFor="formSwitch1">
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <div className="">
                <Link className="rbt-btn-link" href="/forgot-password">
                  Lost your password?
                </Link>
              </div>
            </div>
          </div>
          {errorMessage && (
            <span className="errorMessage">Incorrect User details</span>
          )}
          <div className="form-submit-group">
            <button
              type="submit"
              className="btn w-100 text-light"
              style={{
                height: "50px",
                fontSize: "18px",
                backgroundColor: "#24345C",
              }}
            >
              {isLoading ? (
                <div className="spinner-grow text-light" role="status" />
              ) : (
                "Sign in"
              )}
            </button>
          </div>
          <div className="auth-footer">
            <p>Don&apos;t have an account? </p>
            <Link style={{ color: "#2597ac" }} href="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
