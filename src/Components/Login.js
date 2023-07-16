import React from "react";
import "../CSS/Login.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LoginForm from "../Forms/LoginForm";

export default function SignUp(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
      }}
      className="background"
    >
      <NavBar />
      <LoginForm />
      <Footer />
    </div>
  );
}
