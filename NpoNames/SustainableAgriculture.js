import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Sustainableagriculture = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/wwf.jpg')} style={styles.logo} />
          <Text style={styles.title}>SUSTAINABLE AGRICULTURE</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/wwf1.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
             Promoting eco-friendly practices 
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>How Did we Start </Text>
        <Text style={styles.aboutTitle}>About Sustainable agriculture</Text>
        <Text style={styles.aboutUsText}>
        In 1961, a broad call for support was signed by 16 of the world’s leading conservationists. It was called the Morges Manifesto. This manifesto stated that while the expertise to protect the world environment existed, the financial support to achieve this protection did not.
        </Text>
        <Image source={require('./Images/wwf2.jpg')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

From this, the decision was made to establish the World Wildlife Fund as an international fundraising organisation. The intention was to work in collaboration with existing conservation groups and bring financial support to the worldwide conservation movement.

As the World Wildlife Fund grew in the 70s and 80s, it began to expand its work to conserve the environment as a whole. This reflected the interdependence of all living things, rather than focusing on select species in isolation. </Text>
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
    color:'grey'
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
    color:'#9370db',
    fontSize: 16,
    
  }
});

export default Sustainableagriculture;