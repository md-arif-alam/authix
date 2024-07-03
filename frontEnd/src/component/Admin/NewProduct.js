import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, addUsers } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import MailOutline from "@material-ui/icons/MailOutline";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import { MdOutlinePassword } from "react-icons/md";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SideBar from "./Sidebar";
import { NEW_USER_RESET } from "../../constants/userConstants";

const NewProduct = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, success } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("./Profile.png");

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(addUsers(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/admin/users";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("User Added Successfully !");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_USER_RESET });
    }

    // if (isAuthenticated) {
    //   history.push(redirect);
    // }
  }, [dispatch, error, alert, history, redirect]);

  return (
    <Fragment>
      <MetaData title="Add New Users" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <h1>Add New Users</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="User's Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div>
              <MailOutline />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>

            <div id="reateProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>

            <div id="createProductFormImage">
              <img src={avatarPreview} alt="preview" />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
              value="Register"
            >
              Add User
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useRef, useState, useEffect } from "react";
// import "./newProduct.css";
// import Loader from "../layout/Loader/Loader";
// import { Link } from "react-router-dom";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import FaceIcon from "@material-ui/icons/Face";
// import { useDispatch, useSelector } from "react-redux";
// // import { clearErrors, login, register } from "../../actions/userAction";
// import { useAlert } from "react-alert";

// const LoginSignUp = ({ history, location }) => {
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   // const { error, loading, isAuthenticated } = useSelector(
//   //   (state) => state.user
//   // );

//   // const loginTab = useRef(null);
//   const registerTab = useRef(null);
//   // const switcherTab = useRef(null);

//   // const [loginEmail, setLoginEmail] = useState("");
//   // const [loginPassword, setLoginPassword] = useState("");

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const { name, email, password } = user;

//   const [avatar, setAvatar] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState(
//     "../../images/Profile.png"
//   );

//   // const loginSubmit = (e) => {
//   //   e.preventDefault();
//   //   dispatch(login(loginEmail, loginPassword));
//   // };

//   const registerSubmit = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("email", email);
//     myForm.set("password", password);
//     myForm.set("avatar", avatar);
//     dispatch(register(myForm));
//   };

//   const registerDataChange = (e) => {
//     if (e.target.name === "avatar") {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setAvatarPreview(reader.result);
//           setAvatar(reader.result);
//         }
//       };

//       reader.readAsDataURL(e.target.files[0]);
//     } else {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     }
//   };

// const redirect = location.search
//   ? location.search.split("=")[1]
//   : "/dashboard";

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     if (success) {
//       alert.success("New User Added Successfully");
//       history.push("/admin/dashboard");
//     }
//   }, [dispatch, error, alert, history, isAuthenticated, success, redirect]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <div className="LoginSignUpContainer">
//             <div className="LoginSignUpBox">
//               <div>
//                 <div className="login_signUp_toggle">
//                   {/* <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p> */}
//                   <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
//                 </div>
//                 {/* <button ref={switcherTab}></button> */}
//               </div>
//               {/* <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
//                 <div className="loginEmail">
//                   <MailOutlineIcon />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="loginPassword">
//                   <LockOpenIcon />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                   />
//                 </div>
//                 <Link to="/password/forgot">Forget Password ?</Link>
//                 <input type="submit" value="Login" className="loginBtn" />
//               </form> */}
//               <form
//                 className="signUpForm"
//                 ref={registerTab}
//                 encType="multipart/form-data"
//                 onSubmit={registerSubmit}
//               >
//                 <div className="signUpName">
//                   <FaceIcon />
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     required
//                     name="name"
//                     value={name}
//                     onChange={registerDataChange}
//                   />
//                 </div>
//                 <div className="signUpEmail">
//                   <MailOutlineIcon />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     name="email"
//                     value={email}
//                     onChange={registerDataChange}
//                   />
//                 </div>
//                 <div className="signUpPassword">
//                   <LockOpenIcon />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     name="password"
//                     value={password}
//                     onChange={registerDataChange}
//                   />
//                 </div>

//                 <div id="registerImage">
//                   <img src={avatarPreview} alt="preview" />
//                   <input
//                     type="file"
//                     name="avatar"
//                     accept="image/*"
//                     onChange={registerDataChange}
//                   />
//                 </div>
//                 <input type="submit" value="Register" className="signUpBtn" />
//               </form>
//             </div>
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default LoginSignUp;
