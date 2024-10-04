import React from 'react';
import Link from 'next/link';
import styles from './login-nav.module.css';

const LoginNav = () => {
  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <button className={styles.menuButton} style={{ float: 'left', marginRight: 'auto', position: 'absolute', left: '20px' }}>
            <i className="fas fa-bars"></i>
        </button>
          <ul className={styles.navLinks} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyleType: 'none', padding: 0, margin: '0 auto', position: 'absolute', left: '52%', transform: 'translateX(-50%)', zIndex: '1000 !important' }}>
            <li style={{ margin: '0 15px' }}><Link href="#platform" style={{ textDecoration: 'none', color: '#333 !important' }}>Platform</Link></li>
            <li style={{ margin: '0 15px' }}><Link href="#programmes" style={{ textDecoration: 'none', color: '#333 !important' }}>Programmes</Link></li>
            <li style={{ margin: '0 15px' }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <span className={`${styles.logo} ${styles.logoWrapper}`} style={{ display: 'inline-block', fontSize: '24px', color: '#333 !important' }}>
                  <span className={styles.logoText}>R</span>
                </span>
              </Link>
            </li>
            <li style={{ margin: '0 15px' }}><Link href="#contact-us" style={{ textDecoration: 'none', color: '#333 !important' }}>Contact Us</Link></li>
          </ul>
          <div className={styles.authLinks}>
            <span className={styles.userIcon}>
              <i className="far fa-user-circle"></i>
            </span>
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
            <span> | </span>
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoginNav;