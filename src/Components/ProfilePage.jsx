import React from "react";
import ProfileData from "./ProfileData";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../CSS/ProfilePage.css";

export default function ProfilePage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
      }}
      className="background"
    >
      <NavBar />
      <ProfileData />
      <Footer />
    </div>
  );
}
