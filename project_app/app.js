import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/components/LandingPage';
import LoginForm from './src/screens/LoginScreen';
import SignupForm from './src/screens/SignupScreen'; 
import Listings from './src/screens/Listings'; 
import Enlist from './src/screens/Enlist';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Signup" component={SignupForm} />
        <Stack.Screen name="Listings" component={Listings} />
        <Stack.Screen name="Enlist" component={Enlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
