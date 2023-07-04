import React from 'react';
import "../CSS/HomePage.css";
import NavBar from './NavBar';
import WelcomeText from './WelcomeText';
import Footer from './Footer';

export default function Background() {
  return (
    <div className='background'>
        <NavBar/>
        <WelcomeText/>
        <Footer/>
    </div>
  )
}
