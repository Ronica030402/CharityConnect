import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const SAME = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/SameLogo.jpg')} style={styles.logo} />
          <Text style={styles.title}>SAME Foundation</Text>
          
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/same1.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
            Improving healthcare access
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>WHO WE ARE, WHAT WE DO </Text>
        <Text style={styles.aboutTitle}>  About SAME Foundation </Text>
        
        <Text style={styles.aboutUsText}>
        The SA Medical and Education Foundation is a (Sect) 18a public benefit organization, focusing on education and healthcare. Our mission is to create an environment where quality health care and education is available to everyone. We use high impact projects in order to supply medical and education services in South Africa with the resources they vitally need to enhance the services they already offer to the community.
        </Text>
        <Image source={require('./Images/same2.jpg')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

We work with facilities whose sole income source is the Government / state budget, and who are responsible for the health and education of over 85% of South Africa’s population. We are committed to helping the citizens of South Africa to equal healthcare and education no matter what their situation in life. Our track record of completing over 60 projects in the last 16 years shows our dedication to uplift communities through strategic projects. </Text>
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

export default SAME;