import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./Avatar.module.css";
function Avatar({ user }) {
  return (
    // <div className={styles.avatar} onClick={() => alert("Hello")}>
    //   {user && user.charAt(1)}
    // </div>
    <>
      <div className={styles.avatar} onClick={() => alert("Hello")}>
        {user && user.charAt(1)}{" "}
      </div>
      <DropdownButton id="dropdown-basic-button" variant="secondary">
        <Dropdown.Item href="#">Logout</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Avatar;
