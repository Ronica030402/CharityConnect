import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const OrganizationLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (inputText) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputText);
  };

  const validatePassword = (inputText) => {
    return inputText.length >= 6;
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
    } else {
      setError('');
      navigation.navigate('MenuPage');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" style={styles.header}>
        <Icon name="building" size={40} color="purple" />
        <Text style={styles.title}>Sign in as Organization</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.body}>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.checkboxContainer}>
          {/* Remember Me checkbox */}
          <TouchableOpacity
            onPress={() => {}} // Placeholder for remember me functionality
            style={styles.checkbox}
          >
            <Icon name="square-o" size={18} color="purple" />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember Me</Text>
        </View>
        {/* Forgot Password link */}
        <TouchableOpacity
          onPress={() => navigation.navigate('PasswordReset')} // Navigate to the password reset screen
          style={styles.forgotPasswordLink}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('OrganizationRegister')}
        >
          <Text style={styles.createAccountText}>
            Don’t have an account? Create an account.
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: 'purple',
  },
  body: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  inputIcon: {
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'purple',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    color: 'purple',
  },
  forgotPasswordLink: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'purple',
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  createAccountText: {
    textAlign: 'center',
    color: 'purple',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default OrganizationLoginScreen;
