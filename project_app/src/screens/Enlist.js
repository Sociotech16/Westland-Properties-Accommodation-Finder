import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
import Navbar from '../components/NavBar'; 
import { useNavigation } from '@react-navigation/native';

function Enlist() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    listingName: '',
    address: '',
    description: '',
    distance: '',
    price: '',
    availableRooms: '',
    contact: '',
    servicesProvided: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/accommodation', formData);
      console.log('Accommodation added:', response.data);
    } catch (error) {
      console.error('Sign-up error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={{ uri: `${process.env.PUBLIC_URL}/R.jpeg` }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Navbar
          text1="Home" 
          textPath1="LandingPage"
          showText1={true}
          text2="Listings"
          showText2={true}
          textPath2="Listings"
          showText3={false}
          showText4={false}
          ButtonText1="LogOut"
          showButton2={false} 
          ButtonPath1="Login" 
          showButtonText2={false}
         />
        <View style={styles.container}>
          <Text style={styles.heading}>Westland Accommodation</Text>
          <Text style={styles.subheading}>Sign up</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Listing Name"
            value={formData.listingName}
            onChangeText={(value) => handleChange('listingName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(value) => handleChange('address', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={formData.description}
            onChangeText={(value) => handleChange('description', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Distance"
            value={formData.distance}
            onChangeText={(value) => handleChange('distance', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={formData.price}
            onChangeText={(value) => handleChange('price', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Available Rooms"
            value={formData.availableRooms}
            onChangeText={(value) => handleChange('availableRooms', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact"
            value={formData.contact}
            onChangeText={(value) => handleChange('contact', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Services Provided"
            value={formData.servicesProvided}
            onChangeText={(value) => handleChange('servicesProvided', value)}
          />

          {error && <Text style={styles.error}>{error}</Text>}
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Enlist</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
  },
  loginLink: {
    color: '#007bff',
  },
});

export default Enlist;
