import React from "react";
import "../CSS/SignUp.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SignUpForm from "../Forms/SignUpForm";

export default function SignUp(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
      }}
      className="background"
    >
      <NavBar />
      <SignUpForm />
      <Footer />
    </div>
  );
}
