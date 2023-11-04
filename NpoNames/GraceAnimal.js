import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const GraceAnimal = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/graceLogo.jpg')} style={styles.logo} />
          <Text style={styles.title}>GRACE ANIMAL SANCTUARY</Text>
          
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/grace1.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
            Grace Animal Sanctuary
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>ABOUT GRACE ANIMAL SANCTUARY </Text>
        <Text style={styles.aboutTitle}>Our Story</Text>
        
        <Text style={styles.aboutUsText}>
        With a deep love for animals, a desire to make a difference and having been involved in various rescue organisations for roughly 19 years, Grace Animal Sanctuary founder Caron Burger had the dream of starting an animal rescue organisation for many years.
        </Text>
        <Image source={require('./Images/grace2.jpg')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

After meeting co-founder Marlize Stander and discussing her dreams to start an animal rescue organisation, Grace Animal Sanctuary was born.

4 years later, Grace Animal Sanctuary is going strong and growing fast. On course to reach their objectives, Grace Animal Sanctuary will leave a legacy of being a leading animal rescue organisation that saves helpless animals and transforms the person to pet relationship. </Text>
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

export default GraceAnimal;