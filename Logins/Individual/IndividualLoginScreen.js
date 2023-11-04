import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; 
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { useRoute } from '@react-navigation/native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';


const auth = getAuth();
const IndividualLoginScreen = () => {
 

  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (inputText) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputText);
  };

  const validatePassword = (inputText) => {
    return inputText.length >= 6;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleFacebookLogin = () => {
    console.log('Continue with Facebook pressed for Individual');
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google pressed for Individual');
  };

  const handleInstagramLogin = () => {
    console.log('Continue with Instagram pressed for Individual');
  };

  const handleLogin = async () => {
    // Check for empty email and password
    if(!email || !password) {
      setError('All fields are required')
    } else if (!validateEmail(email)) {
      setError('Invalid email address');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return;
    }
    // } else {
    //   setError('');
    //   navigation.navigate('Trends');
     try {
      await signInWithEmailAndPassword(auth, email, password)
      const usersCollection = collection(db, 'Individuals');
      const q = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.size === 1) {
        querySnapshot.forEach((doc) => {
          const userName = doc.data().name;
  
          // Navigate to MenuPage and pass the userName as a parameter
          navigation.navigate('TabNav', {
            userName: userName,
            userEmail:email
          });
      
        });
      }
    } catch (error) {
      setError(error.message)
      
    }
  };



  const signInWithGoogle = async() => {
     
      navigation.navigate('dumbo')
    } 

  return (
  
   
    <View style={styles.container}>

      <View style={styles.header}>
        <Icon name="user" size={40} color="purple" />
        <Text style={styles.title}>Sign in as Individual</Text>
      </View>
      <View style={styles.body}>
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
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="purple" />
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} style={styles.forgotPasswordLink}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={styles.rememberMeContainer}>
          <TouchableOpacity onPress={toggleRememberMe} style={styles.checkbox}>
            {rememberMe ? (
              <Icon name="check-square-o" size={18} color="purple" />
            ) : (
              <Icon name="square-o" size={18} color="purple" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember Me</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('IndividualRegister')}>
          <Text style={styles.createAccountText}>
            Don’t have an account? Create account.
          </Text>
        </TouchableOpacity>
      <Text style={styles.orText}>or continue with:</Text>
        {/* Social media login buttons */}
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookLogin}>
            <Icon name="facebook" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}    onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: email,
          });
        }}>
            <Icon name="google" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.twitterButton} onPress={handleInstagramLogin}>
            <Icon name="twitter" size={24} color="white" />
          </TouchableOpacity>

        
        </View>
        
      </View>
    
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
    rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    color: 'purple',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
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
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  forgotPasswordLink: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'purple',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  createAccountText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'purple',
  },
     twitterButton: {
       alignItems: 'center',
  backgroundColor: '#1DA1F2',  
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  googleButton: {
      alignItems: 'center',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  facebookButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
   socialButtons: {
    flexDirection: 'row',
    alignSelf:'center',
  },
  orText: {
  textAlign: 'center',
    marginBottom: 10,
     color: 'purple',
  },
});

export default IndividualLoginScreen;