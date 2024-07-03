import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle } from "react-icons/md";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  navColor1: "white",
  link1Text: "Home",
  link2Text: "Contact",
  link3Text: "About",
  link4Text: "",
  link1Url: "/",
  link2Url: "/contact",
  link3Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-start",
  nav2justifyContent: "space-around",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return (
    <ReactNavbar
      profileIcon={true}
      ProfileIconElement={MdAccountCircle}
      {...options}
    />
  );
};

export default Header;
