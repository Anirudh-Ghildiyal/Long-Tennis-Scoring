import React from "react";
import NavBar from "./NavBar";
import WelcomeText from "./WelcomeText";
import Footer from "./Footer";

export default function HomePage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
      }}
      className="background"
    >
      <NavBar />
      <WelcomeText />
      <Footer />
    </div>
  );
}
