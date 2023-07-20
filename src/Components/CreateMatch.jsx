import React from "react";
import "../CSS/CreateMatch.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CreateMatchForm from "../Forms/CreateMatchForm";

export default function CreateMatch(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.img})`,
      }}
      className="background"
    >
      <NavBar />
      <CreateMatchForm />
      <Footer />
    </div>
  );
}
