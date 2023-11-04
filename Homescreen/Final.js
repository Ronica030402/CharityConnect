import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';



const HomeScreen=({ navigation })=> {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    
    <View style={styles.container}>
      {/* Logo */}
      <Animatable.Image
        source={require('./CHARITYCONNECT.jpeg')}
        style={styles.logo}
        animation="bounceIn"
        duration={1500}
        
      />

      {/* Login Options */}
      <Text style={styles.headerText}>Log in as:</Text>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('OrganizationLogin')}
      >
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.iconText}>
          <Icon name="building" size={20} color="white" />
          <Text style={styles.optionText}>An Organization</Text>
        </Animatable.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('NPOLogin')}
      >
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.iconText}>
          <Icon name="university" size={20} color="white" />
          <Text style={styles.optionText}>NPO</Text>
        </Animatable.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('IndividualLogin')}
      >
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.iconText}>
          <Icon name="user" size={20} color="white" />
          <Text style={styles.optionText}>Individual</Text>
        </Animatable.View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('AdminLogin')}
      >
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.iconText}>
          <Icon name="user" size={20} color="white" />
          <Text style={styles.optionText}>Admin</Text>
        </Animatable.View>
      </TouchableOpacity>
      {/* Learn More Link */}
      <Animatable.View animation="fadeInUp" delay={500}>
        <TouchableOpacity
          style={styles.learnMoreButton}
          onPress={() => console.log('Learn More')}
        >
          <Text style={{ textDecorationLine: 'underline', color: 'purple' }}>Learn More</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white'
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 20,
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: 'purple', 
    padding:  15,
    marginBottom: 15,
    width: 280,
    alignItems: 'center',
    borderRadius: 10,
  },
  optionText: {
    color: 'white', 
  },
  learnMoreButton: {

    bottom: 0,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default HomeScreen;
