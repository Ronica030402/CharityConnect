import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserProfileContext } from './UserProfileContext';

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(UserProfileContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [validationError, setValidationError] = useState('');
  const navigation = useNavigation();

  const opacityValue = new Animated.Value(0); // Initialize opacity value

  useEffect(() => {
    // Create a fade-in animation
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000, // Duration of the animation in milliseconds
      easing: Easing.ease, // Easing function for smooth animation
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, []);

  const handleUpdateProfile = () => {
    if (!name || !email || !phone || !address) {
      setValidationError('Please fill in all fields.');
    } else {
      const updatedProfile = {
        name,
        email,
        phone,
        address,
      };
      updateUserProfile(updatedProfile);
      setProfileUpdated(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Animated.View style={[styles.container, { opacity: opacityValue }]}>
      {profileUpdated ? (
        <View style={styles.successContainer}>
          <Text style={styles.successMessage}>Your profile has been updated.</Text>
          <Button title="Go Back" onPress={handleGoBack} color="purple" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Update Profile Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />

          {validationError ? <Text style={styles.errorText}>{validationError}</Text> : null}

          <Button title="Update Profile" onPress={handleUpdateProfile} color="purple" />
        </>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  input: {
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpdateProfile;
