import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./isLoggedin";

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  // Show the component only when the user is logged in and token is generated
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ProtectedRoutes;
