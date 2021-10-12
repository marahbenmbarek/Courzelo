/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import ajouterCategorie from "./views/ajouterCategorie";
import Dashboard from "./views/Dashboard.js";
import Maps from "./views/Maps.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import UserProfile from "./views/UserProfile.js";

const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Courses",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  
  {
    path: "/",
    name: "ajouter categorie",
    icon: "nc-icon nc-bell-55",
    component: ajouterCategorie,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
