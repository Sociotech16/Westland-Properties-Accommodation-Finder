import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function SignupForm() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    userName: '',
    _id: '',
    email: '',
    contact: '',
    level: '',
    password: '',
    confirmPassword: '',
    accountType: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const { firstName, surname, userName, _id, email, contact, level, password, confirmPassword, accountType } = formData;

      if (accountType === '') {
        setError('Please select an account type');
        setIsLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:3000/users', {
        firstName,
        surname,
        userName,
        _id,
        email,
        contact,
        level,
        accountType,
        password,
      });

      console.log('Account created:', response.data);
      navigation.navigate('Login'); // Redirect to login page after successful signup
      
    } catch (error) {
      console.error('Sign-up error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Westland Accommodation</Text>
      <Text style={styles.subheading}>Sign up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={formData.surname}
        onChangeText={(value) => handleChange('surname', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.userName}
        onChangeText={(value) => handleChange('userName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={formData._id}
        onChangeText={(value) => handleChange('_id', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={formData.contact}
        onChangeText={(value) => handleChange('contact', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Level"
        value={formData.level}
        onChangeText={(value) => handleChange('level', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChangeText={(value) => handleChange('confirmPassword', value)}
        secureTextEntry
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Account Type:</Text>
        <Picker
          selectedValue={formData.accountType}
          style={styles.picker}
          onValueChange={(value) => handleChange('accountType', value)}
        >
          <Picker.Item label="Select an account type" value="" />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Student" value="student" />
        </Picker>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
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

export default SignupForm;
