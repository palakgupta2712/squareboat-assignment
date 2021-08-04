import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <div className={styles.container}>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.email}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.password}>
          <div className={styles.password__label}>
            <label htmlFor="password">Password</label>
            <Link to="/forgotpassword" className={styles.link}>
              Forgot your password?
            </Link>
          </div>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className={styles.login__btn}
        ></input>
      </form>
      <p className={styles.register_link}>
        New to MyJobs?{" "}
        <Link to="/register" className={styles.link}>
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
