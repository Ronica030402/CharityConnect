import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const NPORegisterScreen = ({ navigation }) => {
  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (inputText) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputText);
  };

  const validatePassword = (inputText) => {
    return inputText.length >= 6;
  };

  const handleRegister = () => {
    if (!organizationName) {
      setError('Please enter the organization name');
    } else if (!validateEmail(email)) {
      setError('Invalid email address');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Proceed with registration logic
      // For now, let's just log a message
      console.log('Registered successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" style={styles.header}>
        <Text style={styles.title}>
          <Icon name="university" size={40} color="purple" /> Create an NPO Account
        </Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.body}>
        <Animatable.View
          style={styles.inputContainer}
        >
          <Icon name="building" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="NPO Name"
            onChangeText={(text) => setOrganizationName(text)}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.inputContainer}
        >
          <Icon name="envelope" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="NPO Email"
            onChangeText={(text) => setEmail(text)}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.inputContainer}
        >
          <Icon name="lock" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.inputContainer}
        >
          <Icon name="lock" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </Animatable.View>
        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        {/* Back to login link */}
        <TouchableOpacity onPress={() => navigation.navigate('NPOLogin')}>
          <Text style={styles.loginText}>Back to Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 20,
  },
  body: {
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'purple',
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'purple',
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'purple',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default NPORegisterScreen;
