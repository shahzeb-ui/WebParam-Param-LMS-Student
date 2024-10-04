import styles from './login.module.scss';
import LoginNav from '../../../ui/login/login-nav'; // Adjust this import path as necessary

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <LoginNav />
      <div className={styles.loginContainer}>
      <div className={styles.loginFormWrapper}>
          <h1 className={styles.title}>Hello <span className={styles.titleUnderline}>Again</span></h1>
          <p className={styles.subtitle}>Welcome back! Please fill in your details.</p>
          <form>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Email Address"
                className={`${styles.input} ${styles.requiredField}`}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                placeholder="Password"
                className={`${styles.input} ${styles.requiredField}`}
              />
            </div>
            {/* Add error message if needed */}
            <div className={styles.errorMessage}>
              *Incorrect email or password. Try again
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.signUpButton}>
                Sign Up
              </button>
              <div className={styles.recoverPassword}>
                <a href="/recover-password">Recover Password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;