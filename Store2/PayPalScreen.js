import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for icons
import Image1 from './Images/Charity.png';
import { useRoute } from '@react-navigation/native';

const PayPalScreen = () => {
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
      {/* PayPal Logo */}
      <Image
        source={Image1}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* PayPal Information */}
      <Text style={styles.paymentInfo}>If you don't have a PayPal account, you can also pay via PayPal with your credit card or bank debit card. Payment can be submitted in any currency!</Text>

      {/* Donation Button */}
      <TouchableOpacity style={styles.donateButton}>
        <FontAwesome5 name="donate" size={20} color="white" />
        <Text style={styles.buttonText}>Donate with PayPal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center', // Center content horizontally
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  paymentInfo: {
    marginBottom: 20,
    textAlign: 'center', // Center text horizontally
  },
  donateButton: {
    backgroundColor: '#E0B0FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default PayPalScreen;
