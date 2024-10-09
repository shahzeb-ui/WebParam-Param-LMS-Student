"use client";

import styles from "./login.module.scss";
import LoginNav from "../../../ui/login/login-nav"; // Adjust this import path as necessary
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Added import for Link component

const LoginPage = () => {
  const router = useRouter();

  const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/register');
  };

  return (
    <div className={styles.loginPage}>
      <LoginNav />
      <div className={styles.loginContainer}>
        <div className={styles.loginFormWrapper}>
          <div>
            <h1 className={styles.title}>
              Hello <span className={styles.titleUnderline}>Again</span>
            </h1>
            <p className={styles.subtitle}>
              Welcome back! Please fill in your details.
            </p>
            <form>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`${styles.input} ${styles.requiredField}`}
                />
                <span className={styles.asterisk}>*</span>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="password"
                  placeholder="Password"
                  className={`${styles.input} ${styles.requiredField}`}
                />
                <span className={styles.asterisk}>*</span>
              </div>
              {/* Add error message if needed */}
              <div className={styles.errorMessage}>
                *Incorrect email or password. Try again
              </div>
              <div className={styles.buttonGroup}>
                <button type="button" className={styles.signUpButton} onClick={handleRegisterClick}>
                  Login
                </button>
                <div className={styles.recoverPassword}>
                  <a href="/recover-password">Recover Password</a>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.signUpPrompt} style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', fontWeight: 'bold', fontSize: '16px', padding: '15px', color:'white' }}>
            Don&apos;t have an account yet? <Link href="/~offline/register" style={{ color: '#FE457A', textDecoration: 'underline' }}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
