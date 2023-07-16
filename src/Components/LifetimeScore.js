import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LifetimeScoreData from "./LifetimeScoreData";
import "../CSS/LifetimeScore.css";

export default function LifetimeScore(props) {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <NavBar />
      <LifetimeScoreData />
      <Footer />
    </div>
  );
}
