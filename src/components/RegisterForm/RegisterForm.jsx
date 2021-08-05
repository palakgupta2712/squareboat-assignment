import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./RegisterForm.module.css";
function RegisterForm() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState(0);
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://jobs-api.squareboat.info/api/v1/auth/register", {
        email: email,
        userRole: userRole,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        skills: skills,
      })
      .then((res) => {
        history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
        setMessage(error);
      });
  }
  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className={styles.container}>
          <h3 style={{ color: "black" }}>SignUp</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.userRole}>
              <label>I'm a*</label>
              <br />
              <input
                type="radio"
                id="recruiter"
                name="fav_language"
                value="0"
                // checked={userRole === 0}
                onChange={(e) => setUserRole(parseInt(e.target.value))}
              />
                <label htmlFor="recruiter">Recruiter</label>
              <input
                type="radio"
                id="candidate"
                name="fav_language"
                value="1"
                // checked={userRole === 1}
                onChange={(e) => setUserRole(parseInt(e.target.value))}
              />
               <label htmlFor="candidate">Candidate</label>
              <br />
            </div>

            <div className={styles.name}>
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className={styles.email}>
              <label htmlFor="email">Email Address*</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className={styles.password}>
              <div>
                <div className={styles.password__label}>
                  <label htmlFor="password">Create Password</label>
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
                />{" "}
              </div>
              <div>
                <div className={styles.password__label}>
                  <label htmlFor="confirmPassword"> Confirm Password</label>
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.email}>
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                placeholder="Enter comma separated skills"
                value={skills}
                required
                onChange={(e) => {
                  setSkills(e.target.value);
                }}
              />
            </div>

            <input
              type="submit"
              value="Signup"
              className={styles.signup__btn}
            ></input>
            <p className={styles.login__link}>
              Have an account?{" "}
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default RegisterForm;
