import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Image1 from './Images/Charity.png'; 
import { useRoute } from '@react-navigation/native';
const ThankYouPage = () => {
  const route =useRoute();
  const {donor} = route.params
  const {email} = route.params
  const {selectedFrequency} = route.params
  const {contact} = route.params
  const {customAmount} = route.params
  const {selectedCampaign} = route.params
  
  const {NpoName} = route.params
  return (
    <View style={styles.container}>
     
      <Image source={Image1} style={styles.logo} resizeMode="contain" />

     
      <View style={styles.imageContainer}>
       
        <Image
          source={Image1}
          style={styles.centeredImage}
          resizeMode="contain" 
        />
      </View>

      <Text style={styles.thankYouText}>Thank you for your generous donation of R500!</Text>
      <Text style={styles.thankYouText}>Transaction ID: 1234567890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  logo: {
    width: 50, 
    height: 50, 
    marginBottom: 10, 
  },
  imageContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 20,
  },
  centeredImage: {
    width: 200, 
    height: 200, 
  },
  thankYouText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ThankYouPage;