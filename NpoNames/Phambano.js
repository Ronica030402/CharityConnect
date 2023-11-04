import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Phambano = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/phambanoLogo.jpg')} style={styles.logo} />
          <Text style={styles.title}>Phambano Technology Development Centre</Text>
          
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/phambano1.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
           Using technology for social impact 
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>WHAT WE DO? </Text>
        <Text style={styles.aboutTitle}>What we offer: </Text>
        
        <Text style={styles.aboutUsText}>
       We are a purpose-driven organisation that provides sustainable technology- related solutions to civil society organisations across Southern Africa.
        </Text>
        <Image source={require('./Images/phambano2.jpg')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

To make Phambano Technology Development Centre NPC the preferred provider of technology capacity building solutions to other civil society organisations across Southern Africa. </Text>
        <TouchableOpacity style={styles.donateButton} onPress={handlebtn}>
          <Text style={styles.donateButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 50,
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  squareImage: {
    width: 150,
    height: 150, 
    borderRadius: 10,
  },
  textColumn: {
    flex: 1,
    marginLeft: 20,
  },
  squareImageText: {
    fontSize: 15, 
    fontFamily: 'Playfair Display',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  secondImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginVertical: 20,
  },
  aboutUsTitle: {
    fontSize: 25,
  fontWeight: 'bold',
    marginVertical: 10,
    color:'#9370db'
  },
  aboutUsText: {
    fontSize: 16,
    marginVertical: 10,
  },
  donateButton: {
    backgroundColor: '#9370db',
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  donateButtonText: {
    fontSize: 18,
    color: 'white',
  },
  aboutTitle:{
    color:'grey',
  }
  
});

export default Phambano;