import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <h3 className={styles.logo}>
          My<span className={styles.logo__text}>Jobs</span>
        </h3>
        <button className={styles.btn}>
          <Link className={styles.btn__links} to="/login">
            Login
          </Link>
          /
          <Link className={styles.btn__links} to="/register">
            Signup
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
