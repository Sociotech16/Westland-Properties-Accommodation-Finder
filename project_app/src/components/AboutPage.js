import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Westland Properties</Text>
      <Text style={styles.paragraph}>
      Westland Accommodations is a premier provider of off-campus housing dedicated to offering exceptional service and unparalleled support. Our team is committed to helping University of Zimbabwe students find comfortable, convenient, and affordable living spaces that feel like home.      </Text>
      <Text style={styles.subheading}>Our Mission</Text>
      <Text style={styles.paragraph}>
      At Westland Accommodations, our mission is to provide a personalized and professional approach to off-campus living. We strive to build long-term relationships with our students and provide them with the highest level of comfort, convenience, and support.      </Text>
      <Text style={styles.subheading}>Our Team</Text>
      <View style={styles.team}>
        <View style={styles.teamMember}>
          <Image source={{ uri: 'team-member-1.jpg' }} style={styles.image} />
          <Text>Tawanda Gonyora, Broker</Text>
        </View>
        <View style={styles.teamMember}>
          <Image source={{ uri: 'team-member-2.jpg' }} style={styles.image} />
          <Text>Danielias, Agent</Text>
        </View>
        <View style={styles.teamMember}>
          <Image source={{ uri: 'team-member-3.jpg' }} style={styles.image} />
          <Text>Anna Charakupa, Agent</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  team: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  teamMember: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});

export default AboutPage;
