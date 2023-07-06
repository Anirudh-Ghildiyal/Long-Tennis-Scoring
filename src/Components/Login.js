import React from 'react'
import "../CSS/Login.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LoginForm from '../Forms/LoginForm';

export default function SignUp() {
  return (
    <div className='background'>
        <NavBar/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}
