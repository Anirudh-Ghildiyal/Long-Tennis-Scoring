import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import EditProfile from "./Components/EditProfile";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreateMatch from "./Components/CreateMatch";
import ProfilePage from "./Components/ProfilePage";
import LifetimeScore from "./Components/LifetimeScore";
import BackgroundCarousel from "./Components/BackgroundCarousel";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ConditionalBackgroundCarousel from "./Components/ConditionalBackgroundCarousel";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/creatematch" element={<CreateMatch />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/lifetimescore" element={<LifetimeScore />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ConditionalBackgroundCarousel />
      <Footer />
    </Router>
  );
}

export default App;
