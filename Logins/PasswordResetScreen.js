import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const PasswordResetScreen = () => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);

  const sendResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        setIsResetEmailSent(true);
      })
      .catch((error) => {
        console.error('Error sending reset email:', error);
      });
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Reset</Text>
      <Text style={styles.instructions}>
        Enter your email address to reset your password.
      </Text>
      {isResetEmailSent ? (
        <Text style={styles.successMessage}>
          Password reset instructions sent to your email.
        </Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={sendResetEmail}
          >
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </>
      )}
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
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  instructions: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
  },
});

export default PasswordResetScreen;
