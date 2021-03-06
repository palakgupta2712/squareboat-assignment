import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob";
import Register from "./pages/Register";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <ProtectedRoutes path="/postjob" component={PostJob} />
          <ProtectedRoutes path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
