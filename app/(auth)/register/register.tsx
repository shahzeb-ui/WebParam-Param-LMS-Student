import React from 'react';
import styles from './register.module.scss';
import RegisterForm from './registerform';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.vectorContainer}>
          <Image src="/svg/profile.svg" alt="Vector" width={800} height={600} className={styles.vectorImage} />
        </div>
        <div className={styles.registerContent}>
          <h1 className={styles.title}>
            Profile <span className={styles.highlight}>Information
            <Image src="/svg/blue.svg" alt="Underline" className={styles.underline} width={100} height={10} />
            </span>
          </h1>
          <p className={styles.subtitle}>Please complete all form fields.</p>
          <p className={styles.requiredNote}>All answers are required to complete form.</p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}