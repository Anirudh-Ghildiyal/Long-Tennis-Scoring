import React from 'react'
import "../CSS/CreateMatch.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CreateMatchForm from '../Forms/CreateMatchForm';

export default function CreateMatch() {
  return (
    <div className='background'>
        <NavBar/>
        <CreateMatchForm/>
        <Footer/>
    </div>
  )
}
