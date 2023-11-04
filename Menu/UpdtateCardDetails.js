import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserProfileContext } from './UserProfileContext';

const UpdateCardDetails = () => {
  const { userProfile, updateUserProfile } = useContext(UserProfileContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [validationError, setValidationError] = useState(''); // New state to handle validation errors
  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
      setValidationError('Please fill in all fields.');
    } else {
      const updatedProfile = {
        ...userProfile,
        cardDetails: {
          cardNumber,
          expiryDate,
          cvv,
        },
      };

      updateUserProfile(updatedProfile);
      setProfileUpdated(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {profileUpdated ? (
        <View style={styles.successContainer}>
          <Text style={styles.successMessage}>Your details have been updated.</Text>
          <Button title="Go Back" onPress={handleGoBack} color="purple" />
        </View>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date"
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={(text) => setCvv(text)}
          />

          {validationError ? (
            <Text style={styles.errorText}>{validationError}</Text>
          ) : null}

          <Button title="Update Details" onPress={handleUpdateProfile} color="purple" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  successMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
});

export default UpdateCardDetails;
