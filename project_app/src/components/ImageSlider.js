import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000); 

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <View style={styles.container}>
      <View style={styles.imageSlider}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: images[currentIndex] }} style={styles.image} />
        </View>
      </View>
      <TouchableOpacity style={styles.sliderBtn} onPress={handlePrev}>
        <Text style={styles.sliderBtnText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sliderBtn} onPress={handleNext}>
        <Text style={styles.sliderBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSlider: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  sliderBtn: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  sliderBtnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageSlider;
