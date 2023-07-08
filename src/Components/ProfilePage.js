import React from 'react'
import ProfileData from './ProfileData'
import NavBar from './NavBar';
import Footer from './Footer';
import "../CSS/ProfilePage.css"

export default function ProfilePage() {
  return (
    <div className='profileBackground'>
    <NavBar/>
    <ProfileData/>
    <Footer/>
</div>
  )
}
