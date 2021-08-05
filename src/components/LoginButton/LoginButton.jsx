import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginButton.module.css";
function LoginButton() {
  return (
    <button className={styles.btn}>
      <Link className={styles.btn__links} to="/login">
        Login
      </Link>
      /
      <Link className={styles.btn__links} to="/register">
        Signup
      </Link>
    </button>
  );
}

export default LoginButton;
