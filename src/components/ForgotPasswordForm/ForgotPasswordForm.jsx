import axios from "axios";
import React, { useState } from "react";
import styles from "./ForgotPasswordForm.module.css";
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`
      )
      .then((res) => console.log(res));
  }
  return (
    <div className={styles.container}>
      <h5>Forgot your password?</h5>
      <p className={styles.primary__text}>
        Enter the email associated with your account and we'll send you
        instructions to reset your password .
      </p>
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
        <input
          type="submit"
          value="Submit"
          className={styles.submit__btn}
        ></input>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
