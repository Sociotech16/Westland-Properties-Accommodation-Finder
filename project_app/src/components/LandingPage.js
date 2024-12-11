import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Navbar from './NavBar';
import AboutPage from './AboutPage';
import Contact from './Contact';

function LandingPage() {
  return (
    <ImageBackground
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Navbar
          ButtonText1="Sign Up" 
          ButtonText2="Login" 
          ButtonPath1="Signup" 
          ButtonPath2="Login" 
          text1="Home" 
          text2="About" 
          text3="Listings" 
          text4="Contact" 
          textPath1="Home" 
          textPath2="About" 
          textPath3="Listings" 
          textPath4="Contact" 
          showText1={true} 
          showText2={false} 
          showText3={false} 
          showText4={false} 
          showButton1={true} 
          showButton2={true}
        />
        <Text style={styles.title}>Welcome to Westland Accommodations</Text>
        <Text style={styles.subtitle}>Home away from home</Text>
        <AboutPage />
        <Contact />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darker overlay for better contrast
    padding: 20,
    borderRadius: 10, // Rounded corners
    margin: 20, // Add margin for spacing
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, // Elevation for Android shadow
  },
  title: {
    fontSize: 36, // Larger font size
    color: '#f8f8f8', // Slightly off-white color
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold', // Bold font
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for depth
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 28, // Larger font size
    color: '#e0e0e0', // Slightly off-white color
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic', // Italic font
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for depth
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default LandingPage;
