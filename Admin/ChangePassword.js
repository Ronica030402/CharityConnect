import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon library of your choice

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState(''); // New state to handle validation errors
  const navigation = useNavigation();

  const purpleColor = 'purple';

  // Create animated values
  const fadeInAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  const handleChangePassword = () => {
    if (currentPassword === '' || newPassword === '') {
      setError('Please fill in all fields.');
    } else if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long.');
    } else {
      // Implement password change logic here
      setPasswordChanged(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleShowCurrentPassword = useCallback(() => {
    setShowCurrentPassword(!showCurrentPassword);
  }, [showCurrentPassword]);

  const toggleShowNewPassword = useCallback(() => {
    setShowNewPassword(!showNewPassword);
  }, [showNewPassword]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeInAnim }]}>
      {passwordChanged ? (
        <View>
          <Text style={styles.successMessage}>Your password has been changed.</Text>
          <Button title="Go Back" onPress={handleGoBack} color={purpleColor} />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Change Password</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableWithoutFeedback onPress={toggleShowCurrentPassword}>
            <View style={styles.passwordInput}>
              <TextInput
                style={styles.input}
                placeholder="Current Password"
                secureTextEntry={!showCurrentPassword}
                value={currentPassword}
                onChangeText={setCurrentPassword}
              />
              <Icon
                name={showCurrentPassword ? 'eye-slash' : 'eye'}
                size={20}
                color={showCurrentPassword ? 'gray' : 'purple'}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={toggleShowNewPassword}>
            <View style={styles.passwordInput}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <Icon
                name={showNewPassword ? 'eye-slash' : 'eye'}
                size={20}
                color={showNewPassword ? 'gray' : 'purple'}
              />
            </View>
          </TouchableWithoutFeedback>
          <Button title="Change Password" onPress={handleChangePassword} color={purpleColor} />
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
    backgroundColor: ' purple', // Set to your desired light purple color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  input: {
    height: 40,
    flex: 1,
    color: 'purple',
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  successMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ChangePassword;
