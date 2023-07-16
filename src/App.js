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
import Bg1 from "./Images/Background1.png";
import Bg2 from "./Images/DataBackground.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp img={Bg1} />} />
        <Route path="/login" element={<Login img={Bg1} />} />
        <Route path="/creatematch" element={<CreateMatch img={Bg1} />} />
        <Route path="/profile" element={<ProfilePage img={Bg2} />} />
        <Route path="/editprofile" element={<EditProfile img={Bg2} />} />
        <Route path="/lifetimescore" element={<LifetimeScore img={Bg2} />} />
        <Route path="/" element={<HomePage img={Bg1} />} />
      </Routes>
    </Router>
  );
}

export default App;
