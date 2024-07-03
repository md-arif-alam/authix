import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
// import { TreeItem } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/"></Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      {/* 
      <Link to="/admin/NewProduct">
        <TreeItem nodeId="3" label="Add Users" icon={<AddIcon />} />
      </Link> */}
      <Link to="/admin/addUser">
        <p>
          <AddIcon />
          Add Users
        </p>
      </Link>

      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
