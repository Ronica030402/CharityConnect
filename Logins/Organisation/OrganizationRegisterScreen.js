import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';


const auth = getAuth();
const OrganizationRegisterScreen = () => {

  const navigation = useNavigation();
  
  const [orgName, setOrgName] = useState('');
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

       
        const uid = userCredential.user.uid;
  
       
        const usersCollection = collection(db, 'Organisations');
        const newUser = {
          name: orgName,
          email: email,
        };
  
        await addDoc(usersCollection, newUser);

        alert("Successful", "Account created successfully")
        navigation.navigate("TabNav",{
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
          <Icon name="building" size={40} color="purple" /> Create an Organization Account
        </Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.body}>
        <Animatable.View
         
          style={styles.inputContainer}
        >
          <Icon name="building" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Organization Name"
            onChangeText={(text) => setOrgName(text)}
            onFocus={() => setOrgName('')}
          />
        </Animatable.View>
        <Animatable.View
         
          style={styles.inputContainer}
        >
          <Icon name="envelope" size={20} color="purple" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
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

        <TouchableOpacity onPress={() => navigation.navigate('OrganizationLogin')}>
          <Text style={styles.loginText}>Back to Login</Text>
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
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
  },
  body: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    paddingBottom: 5,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'purple',
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'purple',
    textDecorationLine: 'underline',
  },
});

export default OrganizationRegisterScreen;
