import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './register.module.scss';

const RegisterForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          {/* <span className={styles.secondaryLabel}>Email Address</span> */}
          <input type="email" id="email"  placeholder='Email Address'/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobile">Mobile Number</label>
          {/* <span className={styles.secondaryLabel}>Mobile Number</span> */}
          <input type="tel" id="mobile"  placeholder='Mobile Number'/>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          {/* <span className={styles.secondaryLabel}>First Name</span> */}
          <input type="text" id="firstName"  placeholder='First Name'/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          {/* <span className={styles.secondaryLabel}>Last Name</span> */}
          <input type="text" id="lastName"  placeholder='Last Name'/>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender</label>
          <div className={styles.selectWrapper}>
            <select id="gender">
              <option value="">Gender</option>
              {/* Add gender options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="race">Race</label>
          <div className={styles.selectWrapper}>
            <select id="race">
              <option value="">Race</option>
              {/* Add race options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="disability">Disability</label>
          <div className={styles.selectWrapper}>
            <select id="disability">
              <option value="">Disability</option>
              {/* Add disability options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
        <div className={styles.formGroup} >
          <label htmlFor="city">City</label>
          <div className={styles.selectWrapper}>
            <select id="city">
              <option value="">City</option>
              {/* Add city options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="zipCode">Zip/ Postal Code</label>
          <input type="text" id="zipCode" placeholder="Zip/ Postal Code" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="province">Province</label>
          <div className={styles.selectWrapper}>
            <select id="province">
              <option value="">Province</option>
              {/* Add province options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="studies">Currently Enrolled in Studies</label>
          <div className={styles.selectWrapper}>
            <select id="studies">
              <option value="">Currently Enrolled in Studies</option>
              {/* Add study options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
        <div className={styles.formGroup} >
          <label htmlFor="qualification">Highest Qualification</label>
          <div className={styles.selectWrapper}>
            <select id="qualification">
              <option value="">Highest Qualification</option>
              {/* Add qualification options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={styles.formGroup}>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" id="jobTitle" placeholder="Job Title" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dateStarted">Date Started</label>
          <div className={styles.selectWrapper}>
            <select id="dateStarted">
              <option value="">dd/mm/yyyy</option>
              {/* Add date options here */}
            </select>
            {/* <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.leftAligned}`}>
        <div className={`${styles.formGroup} ${styles.additionalInfoWrapper}`}>
          <label htmlFor="additionalInfo">Additional Information*</label>
          <textarea 
            id="additionalInfo" 
            placeholder="Additional Information" 
            rows={1}
          ></textarea>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.buttonRow}`}>
        <div className={styles.submitButtonWrapper} style={{ position: 'relative', top: '-30px', left: '-5px', zIndex: 2 }}>
          <button type="submit" className={styles.submitButton}>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;