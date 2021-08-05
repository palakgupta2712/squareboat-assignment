import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./JobDetails.module.css";
import { IoLocationOutline } from "react-icons/io5";
function JobDetails({ jobData }) {
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Body>
        <Card.Title>{jobData.title}</Card.Title>
        <Card.Text>{jobData.description}</Card.Text>
        <div className={styles.actions}>
          <div className={styles.actions_location}>
            <IoLocationOutline style={{ color: "#43afff" }} />
            {jobData.location}
          </div>
          <button className={styles.button}>View Applications</button>
        </div>
      </Card.Body>
    </Card>
    // <div className={styles.container}>
    //   <h4>{jobData.title}</h4>
    //   <p>{jobData.description}</p>
    //   <div>
    //     <p>{jobData.location}</p>
    //     <button></button>
    //   </div>
    // </div>
  );
}

export default JobDetails;
