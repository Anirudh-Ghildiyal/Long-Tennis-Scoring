import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LifetimeScoreData from "./LifetimeScoreData"
import "../CSS/LifetimeScore.css";

export default function LifetimeScore() {
  return (
    <div className="profileBackground">
      <NavBar />
      <LifetimeScoreData />
      <Footer />
    </div>
  );
}
