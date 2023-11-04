import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; 
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const auth = getAuth();



const NPORegisterScreen = ({ navigation }) => {
  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  let validateAndSet = (value, valueToCompare, setValue) =>{
    if (value !== valueToCompare) {
      setError("Passwords do not match")
    } else {
      setError("")
    }
    setValue(value)
  }

    async function createAccount(){
      email === "" || password === ""
      ? setError('required filled missing') : ""

      try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Get the UID of the registered user
        const uid = userCredential.user.uid;
  
        // Store the user's name in Firestore
        const usersCollection = collection(db, 'NonProfitOrganisations');
        const newUser = {
          name: organizationName,
          email: email,
        };
  
        await addDoc(usersCollection, newUser);
        alert("Successful", "Account created successfully")
        navigation.navigate("CampaignFinal",{
          userName: organizationName,
          email: email,})
      } catch (error) {
            setError(error.message)
      }
    }

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
            onFocus={() => setOrganizationName('')}
          />
        </Animatable.View>
        <Animatable.View
         
          style={styles.inputContainer}
        >
          <Icon name="envelope" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder=" NPO Email"
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setEmail('')}
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
            onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
           
            onFocus={() => setPassword('')}
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
            onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
            onFocus={() => setConfirmPassword('')}
          />
        </Animatable.View>
        <TouchableOpacity style={styles.button} onPress={createAccount}>
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
});

export default NPORegisterScreen;
