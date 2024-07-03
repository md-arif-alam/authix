import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalUser = 0;
  users &&
    users.forEach((item) => {
      totalUser += item.users;
    });

  const lineState = {
    labels: ["Old User", "New User"],
    datasets: [
      {
        label: "TOTAL USER",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalUser],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>
        <div className="admin-message">
          <h2>Explore the Admin Dashboard</h2>
          <p>
            Manage user accounts, view analytics, and configure settings
            effortlessly with our intuitive admin dashboard.
          </p>
          <p>
            Unlock powerful tools designed to streamline your user management
            experience.
          </p>
        </div>

        <div className="dashboardSummary">
          <div>
            <Link to="/admin/users">
              {/* <p>Users</p>
              <p>{users && users.length}</p> */}
            </Link>
          </div>
        </div>

        {/* <div className="lineChart">
          <Line data={lineState} />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
