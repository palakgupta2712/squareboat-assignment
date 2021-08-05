import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./JobDetails.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { Modal } from "react-bootstrap";
function JobDetails({ jobData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

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
          <button className={styles.button} onClick={handleShow}>
            View Applications
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Applications for this job</Modal.Title>
            </Modal.Header>
            <Modal.Body>{jobData.id}</Modal.Body>
          </Modal>
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
