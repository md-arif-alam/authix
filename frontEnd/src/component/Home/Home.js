import React, { Fragment } from "react";

import "./Home.css";

import MetaData from "../layout/MetaData";

import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
const Home = () => {
  return (
    <Fragment>
      {/* <Loader /> */}
      <Fragment>
        <MetaData title="Authix" />
        <div className="container">
          <header>
            <h1>Welcome to Authix</h1>
          </header>
          <main>
            <p className="intro">
              Your premier destination for user management!
            </p>
            <p>
              Whether you're here to sign up, log in, or explore our admin
              dashboard, we're thrilled to have you on board.
            </p>
            <p>
              Built with the powerful MERN stack, Authix ensures seamless
              authentication and management of user accounts.
            </p>
            <p>
              Feel free to navigate through our secure and user-friendly
              interface.
            </p>
            <p>
              Should you have any questions or feedback, our team is here to
              assist you.
            </p>
            <p>Enjoy your journey with Authix!</p>
          </main>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Home;
