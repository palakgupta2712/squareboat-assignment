import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";
import styles from "./PostedJobs.module.css";
import { CgNotes } from "react-icons/cg";

function PostedJobs() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [jobsData, setJobsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jobs-api.squareboat.info/api/v1/recruiters/jobs", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setJobsData(res.data.data.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.root}>
      <h3>Jobs posted by you</h3>
      <div className={styles.container}>
        {jobsData.length === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "100px auto",
              flexDirection: "column",
            }}
          >
            <CgNotes style={{ fontSize: "50px" }} />
            <div> Your posted jobs will show here!</div>
            <Link to="/postjob">
              <button className={styles.post__btn}>Post a Job</button>
            </Link>
          </div>
        ) : (
          <>
            {jobsData &&
              jobsData.map((jobData, index) => (
                <JobDetails key={index} jobData={jobData} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PostedJobs;
