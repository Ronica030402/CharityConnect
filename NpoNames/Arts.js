import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Arts = ({ navigation }) => {
  const handlebtn = () => {
    navigation.navigate('TabNav');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/artsLogo.jpg')} style={styles.logo} />
          <Text style={styles.title}>Arts & Culture Trust</Text>
          
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/arts1.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
           Supporting arts and culture
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>WHAT WE DO? </Text>
        <Text style={styles.aboutTitle}>What we offer: </Text>
        
        <Text style={styles.aboutUsText}>
       The securing of investment funding to capacitate arts practitioners
Professional development and training to supplement artistic talent with sound business acumen
Thought leadership for continued growth and innovation in the sector
Mentorship (drawing on our vast network of seasoned professionals)
        </Text>
        <Image source={require('./Images/art2.jpg')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

Advocacy for the sector, its role within communities, and the potential for active contributors to the economy
Knowledge Creation
Centre of excellence
Resource creation and sharing – through access to our programmes, platforms and resources
Advisory services
The pursuit of professional standards (both internally and externally) </Text>
        <TouchableOpacity style={styles.donateButton} onPress={handlebtn}>
          <Text style={styles.donateButtonText}>Donate</Text>
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
    color:'green'
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

export default Arts ;