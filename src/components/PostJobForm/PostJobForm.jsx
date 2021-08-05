import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./PostJobForm.module.css";

function PostJobForm() {
  let history = useHistory();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "https://jobs-api.squareboat.info/api/v1/jobs/",
        {
          title: jobTitle,
          description: jobDescription,
          location: jobLocation,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setJobTitle("");
        setJobDescription("");
        setJobLocation("  ");
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Post a Job</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.title}>
          <label htmlFor="jobTitle">Job title*</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Enter job title"
            value={jobTitle}
            required
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
        </div>
        <div className={styles.description}>
          <label htmlFor="jobDescription">Description*</label>
          <textarea
            type="text"
            id="jobDescription"
            name="jobDescription"
            placeholder="Enter job description"
            value={jobDescription}
            required
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
          />
        </div>
        <div className={styles.location}>
          <label htmlFor="jobLocation">Location*</label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            placeholder="Enter location"
            value={jobLocation}
            required
            onChange={(e) => {
              setJobLocation(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Post" className={styles.login__btn}></input>
      </form>
    </div>
  );
}

export default PostJobForm;
