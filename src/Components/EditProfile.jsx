import React from "react";
import EditProfileForm from "../Forms/EditProfileForm";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../CSS/EditProfile.css";

export default function EditProfile(props) {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <NavBar />
      <EditProfileForm />
      <Footer />
    </div>
  );
}
