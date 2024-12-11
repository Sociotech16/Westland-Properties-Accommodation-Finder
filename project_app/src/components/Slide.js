import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import ImageSlider from './ImageSlider';
import background from './background.jpeg';
import R from './R.jpeg';

const Slide = () => {
  const images = [
    background,
    R,
    background,
    R,
    background,
    R
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Listing Preview</Text>
      <ImageSlider images={images} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Slide;
