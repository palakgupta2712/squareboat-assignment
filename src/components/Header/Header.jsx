import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import LoginButton from "../LoginButton/LoginButton";
import styles from "./Header.module.css";
function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(localStorage.getItem("currentUser"));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link className={styles.logo__link} to="/">
            My<span className={styles.logo__text}>Jobs</span>
          </Link>
        </div>

        {user ? (
          <>
            <NavLink
              to="/dashboard"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "2px solid #43AFFF",
              }}
              className={styles.primary_text}
            >
              Dashboard{" "}
            </NavLink>
            <NavLink
              to="/postjob"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "2px solid #43AFFF",
              }}
              className={styles.primary_text}
            >
              Post a Job
            </NavLink>
            <Avatar user={user} />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

export default Header;
