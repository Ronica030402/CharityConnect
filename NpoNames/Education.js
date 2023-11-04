import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Education = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/educationLogo.jpg')} style={styles.logo} />
          <Text style={styles.title}>Education Africa</Text>
          
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/education1.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
          Providing quality education
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>About Us </Text>
        <Text style={styles.aboutTitle}>Education Africa is a non-profit organisation with a proud track record of successful delivery on its thriving projects. </Text>
        
        <Text style={styles.aboutUsText}>
      Established in 1992, Education Africa strives to reach and uplift the poorest of the poor. We aim to assist disadvantaged South Africans in their quest to obtain a quality, relevant education in order to ensure that they are in a position to become global citizens and a competitive, productive element in the local job market.
        </Text>
        <Image source={require('./Images/education2.jpg')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

Education Africa’s head office is based in Johannesburg, South Africa. The team is headed by James Urdang, who is both the Chief Executive Officer and founder of Education Africa. Our Financial Director is Wendy Saner. Known for their ability to “make things happen” and for their tireless commitment to the task at hand, they are an inspiration to those who work with them and know them.

Education Africa has registered self-sustainable offices in the USA, the UK, Austria and in Germany. Their purpose is to assist Education Africa South Africa in achieving its mission. </Text>
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
    marginVertical:30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:50,
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
    color:'#FFA500'
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

export default Education ;