import React from "react";
import ProfileData from "./ProfileData";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../CSS/ProfilePage.css";

export default function ProfilePage(props) {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <NavBar />
      <ProfileData />
      <Footer />
    </div>
  );
}
