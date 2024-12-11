
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AboutPage from "./AboutPage.js"
import Contact from './ContactPage.js';

function LandingPage() {

  return (
    
    <div className="landing-page" style={{
      // backgroundImage: `url(${process.env.PUBLIC_URL}/R.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
    }}>
      <div>
      <Navbar
        ButtonText1="Sign Up" 
        ButtonText2="Login" 
        ButtonPath1="/signup" 
        ButtonPath2="/login" 
        text1="Home" 
        text2="About" 
        text3="Listings" 
        text4="Contact" 
        textPath1="/" 
        textPath2="/" 
        textPath3="/listing" 
        textPath4="/" 
        showText1={false} 
        showText2={false} 
        showText3={false} 
        showText4={false} 
        showButton1={true} 
        showButton2={true}
      />
        <h1>Welcome to <br />Westland Accommodations</h1>
        <h2>Home away from home</h2>
      <AboutPage/>  
      <Contact/>  
      </div>
     </div>
  );
}
export default LandingPage;
