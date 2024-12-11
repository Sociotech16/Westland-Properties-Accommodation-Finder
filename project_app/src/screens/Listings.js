import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import Navbar from '../components/NavBar'; 
import Slide from '../components/Slide'; 
// import SearchBar from './SearchBar'; 

const Listings = () => {
  const [listing, setListing] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const load_data = async () => {
    await axios.get('http://localhost:3000/accommodation')
      .then(res => {
        console.log(res.data);
        setListing([...res.data]);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    load_data();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listing.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listing.length) % listing.length);
  };

  return (
    <ImageBackground
      source={{ uri: 'background.jpeg' }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Navbar 
          text1="Home" 
          textPath1="LandingPage"
          showText1={true}
          text2="Enlist"
          showText2={true}
          textPath2="Enlist"
          showText3={false}
          showText4={false}
          ButtonText1="LogOut"
          showButton2={false} 
          ButtonPath1="Login" 
          showButtonText2={false}
        />
        <View>
          <Slide />
        </View>

        {listing.length > 0 && (
          <View>
          <View style={styles.table}>
            <View style={styles.column}>
              <Text style={styles.tableHeader}>Listing Name:</Text>
              <Text style={styles.tableHeader}>Available Rooms:</Text>
              <Text style={styles.tableHeader}>Price:</Text>
              <Text style={styles.tableHeader}>Distance:</Text>
              <Text style={styles.tableHeader}>Address:</Text>
              <Text style={styles.tableHeader}>Contact Details:</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.tableRow}>{listing[currentIndex].listingName}</Text>
              <Text style={styles.tableRow}>{listing[currentIndex].availableRooms}</Text>
              <Text style={styles.tableRow}>{listing[currentIndex].price}</Text>
              <Text style={styles.tableRow}>{listing[currentIndex].distance}</Text>
              <Text style={styles.tableRow}>{listing[currentIndex].address}</Text>
              <Text style={styles.tableRow}>{listing[currentIndex].contact}</Text>
            </View>
          </View>

            <Text style={styles.descriptionHeader}>Description:</Text>
            <Text style={styles.description}>{listing[currentIndex].desciption}</Text>
            <Text style={styles.descriptionHeader}>Services Provided:</Text>
            <Text style={styles.description}>{listing[currentIndex].servicesProvided}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handlePrev}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {/* <SearchBar /> */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    padding: 20,
    borderRadius: 10, 
    margin: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, 
  },
  table: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 250, 0.1)', 
    borderRadius: 10, 
    padding: 10, 
    flexDirection: 'row', 
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  tableRow: {
    marginBottom: 10,
    color: '#e0e0e0',
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#f8f8f8', 
    fontSize: 16, 
    marginBottom: 10,
  },
  descriptionHeader: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    color: '#e0e0e0', 
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Listings;
