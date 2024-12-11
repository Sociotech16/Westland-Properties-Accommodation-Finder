import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../components/LandingPage';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm'; // Assuming you have a SignupForm component
import Listings from '../components/Listings'; // Assuming you have a Listings component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen 
        name="LandingPage" 
        component={LandingPage} 
        options={{ title: 'Welcome' }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginForm} 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupForm} 
        options={{ title: 'Sign Up' }} 
      />
      <Stack.Screen 
        name="Listings" 
        component={Listings} 
        options={{ title: 'Listings' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
