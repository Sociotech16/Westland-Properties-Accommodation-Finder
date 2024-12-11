import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Navbar({ 
  ButtonText1, ButtonText2, 
  ButtonPath1, ButtonPath2,
  text1, text2, text3, text4,
  textPath1, textPath2, textPath3, textPath4,
  showText1 = true,
  showText2 = true,
  showText3 = true,
  showText4 = true,
  showButton1 = true,
  showButton2 = true
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {showText1 && (
        <TouchableOpacity onPress={() => navigation.navigate(textPath1)}>
          <Text style={styles.navText}>{text1}</Text>
        </TouchableOpacity>
      )}
      {showText2 && (
        <TouchableOpacity onPress={() => navigation.navigate(textPath2)}>
          <Text style={styles.navText}>{text2}</Text>
        </TouchableOpacity>
      )}
      {showText3 && (
        <TouchableOpacity onPress={() => navigation.navigate(textPath3)}>
          <Text style={styles.navText}>{text3}</Text>
        </TouchableOpacity>
      )}
      {showText4 && (
        <TouchableOpacity onPress={() => navigation.navigate(textPath4)}>
          <Text style={styles.navText}>{text4}</Text>
        </TouchableOpacity>
      )}
      {showButton1 && (
        <TouchableOpacity onPress={() => {
          localStorage.removeItem('token');
          navigation.navigate(ButtonPath1);
        }}>
          <Text style={styles.navButton}>{ButtonText1}</Text>
        </TouchableOpacity>
      )}
      {showButton2 && (
        <TouchableOpacity onPress={() => {
          localStorage.removeItem('token');
          navigation.navigate(ButtonPath2);
        }}>
          <Text style={styles.navButton}>{ButtonText2}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#333',
  },
  navText: {
    color: 'white',
    padding: 10,
  },
  navButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default Navbar;
