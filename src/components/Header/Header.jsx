import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.root}>
      <h4>
        My<span className={styles.jobs}>Jobs</span>
      </h4>
      <button>Login/Signup</button>
    </div>
  );
}

export default Header;
