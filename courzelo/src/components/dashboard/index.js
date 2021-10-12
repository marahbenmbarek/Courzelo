

import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Edituser from "./views/EditUser";
import Editvalidation from "./views/CourseValidation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "./layouts/Admin";
import HeaderA from './components/Navbars/AdminNavbar'
function Index() {
    return (
      <>
      <HeaderA/>
      <BrowserRouter>
      <Switch>
        
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/edit_user/:id" component={ Edituser } exact />
        <Route path="/update_validation/:id" component={ Editvalidation } exact />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
    </>
    );
 }

 export default Index
