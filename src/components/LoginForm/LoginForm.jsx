import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styles from "./LoginForm.module.css";
import axios from "axios";

function LoginForm() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://jobs-api.squareboat.info/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(res.data.data.email)
        );
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <React.Fragment>
      {token ? (
        <Redirect to="/" />
      ) : (
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
          {token}
        </div>
      )}
    </React.Fragment>
  );
}

export default LoginForm;
