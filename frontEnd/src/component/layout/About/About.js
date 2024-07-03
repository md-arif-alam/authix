import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/md-arif-alam";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dgmljtcbq/image/upload/v1716566633/avatars/nasy92qmsguogttnjp1p.jpg"
              alt="Founder"
            />
            <Typography>Md Arif Alam</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit GitHub
            </Button>
            <span>
              User management CRUD operations with login/signup functionality
              using the MERN stack involve creating, reading, updating, and
              deleting user data stored in MongoDB. Authentication is handled
              with JWT, made by @MdArifAlam.You can vist my github for
              sourcecode..!
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2"></Typography>
            <a
              href="https://www.linkedin.com/in/md-arif-alam0316"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/md-arif-alam" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
