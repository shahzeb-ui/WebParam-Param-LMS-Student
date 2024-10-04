import React from 'react';
import Link from 'next/link';
import styles from './login-nav.module.css';

const LoginNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <button className={styles.menuButton}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={styles.navLinks}>
          <li><Link href="#platform">Platform</Link></li>
          <li><Link href="#programmes">Programmes</Link></li>
          <li>
            <Link href="/">
              <span className={`${styles.logo} ${styles.logoWrapper}`}>
                <span className={styles.logoText}>R</span>
              </span>
            </Link>
          </li>
          <li><Link href="#contact-us">Contact Us</Link></li>
        </ul>
        <div className={styles.authLinks}>
          <Link href="/login">Login</Link>
          <span> | </span>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;