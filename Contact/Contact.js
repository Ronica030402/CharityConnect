import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !category || !message) {
    
      Alert.alert('Please Fill All Fields', 'Please fill in all required fields.');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <View style={styles.container}>
      {!submitted ? (
        <>
          <Text style={styles.heading}>Feedback</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email (charityorg@gmail.com)"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Category (e.g., General, Support, Feedback)"
            value={category}
            onChangeText={setCategory}
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message"
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.thankYouContainer}>
          <FontAwesome name="check-circle" size={100} color="white" />
          <Text style={styles.thankYouText}>Thank You</Text>
          <Text style={styles.thankYouMessage}>We will reach you shortly.</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CF9FFF',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    fontWeight:'bold',
  
  },
  messageInput: {
    height: 100,
  },
  button: {
    backgroundColor: '#CF9FFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:25,
  },
  thankYouContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  thankYouMessage: {
    color: 'white',
  },
});

export default Contacts;