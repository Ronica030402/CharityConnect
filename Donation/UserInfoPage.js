import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Image1 from './Images/Charity.png';

const UserInfoPage = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [volunteer, setVolunteer] = useState(false);

  const goToPaymentPage = () => {
    navigation.navigate('Payment'); // Navigate to the 'PaymentPage' screen
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={Image1}
        style={styles.logo}
        resizeMode="contain" // Adjust the resizeMode as needed
      />
      {/* User Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.inputA}
        placeholder="Address" // Corrected "Adress" to "Address"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      {/* Checkboxes */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setVolunteer(!volunteer)}
        >
          {volunteer && <Icon name="check" size={20} color="black" />}
        </TouchableOpacity>
        <Text>Would you like to volunteer?</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setSubscribeToNewsletter(!subscribeToNewsletter)}
        >
          {subscribeToNewsletter && <Icon name="check" size={20} color="black" />}
        </TouchableOpacity>
        <Text>Subscribe to our monthly newsletter</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={goToPaymentPage} // Use the goToPaymentPage function for navigation
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#E0B0FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    right: 20,
  },
  nextButtonText: {
    color: 'black',
    fontSize: 16,
  },
  inputA: {
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
});

export default UserInfoPage;
