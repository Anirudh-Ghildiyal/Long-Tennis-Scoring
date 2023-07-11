import React from "react";
import EditProfileForm from "../Forms/EditProfileForm";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../CSS/EditProfile.css";

export default function EditProfile() {
  return (
    <div className="profileBackground">
      <NavBar />
      <EditProfileForm />
      <Footer />
    </div>
  );
}
