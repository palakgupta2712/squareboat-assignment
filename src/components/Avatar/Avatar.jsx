import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./Avatar.module.css";
function Avatar({ user }) {
  let history = useHistory();
  function handleClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    history.push("/");
  }

  return (
    <>
      <div className={styles.avatar} onClick={() => alert("Hello")}>
        {user && user.charAt(1)}{" "}
      </div>
      <DropdownButton id="dropdown-basic-button" variant="secondary">
        <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Avatar;
