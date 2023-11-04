import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
const ChildWwelfare = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }
const route = useRoute();
const {userName} = route.params
const {userEmail} = route.params

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/childlogo.jpg')} style={styles.logo} />
          <Text style={styles.title}>Child Welfare South Africa</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/child.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
             Child welfare and education 
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>Who we are </Text>
        <Text style={styles.aboutTitle}>About Child Welfare South Africa</Text>
        <Text style={styles.aboutUsText}>
          CWSA (Child Welfare South Africa) is an umbrella body representing 164 child welfare affiliates, 30 developing organisations, 25 outreach projects and 206 communities. Collectively we reach about 2 million children, their families and caregivers. Consisting of 1200 staff members and 3500
        </Text>
        <Image source={require('./Images/childwelfare.webp')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>

Our Objectives:
Protecting the children in our country from all kinds of abuse.
Making a difference in the lives of children.
Establishing networks and partnerships to ensure the safeguarding of our children.
Being a credible, professional body for child protection.
Providing support and guidance to our Member Organisations.ur team is spread across southern and East Africa. We work with businesses, communities, and government and are leaders in conservation research, community conservation, livelihood support, and training. We are innovative and skilled in reducing human-wildlife conflict, monitoring threatened species, and protecting safe spaces for animals and people. </Text>
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
    marginVertical:40
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
    fontSize: 16,
    
  }
});

export default ChildWwelfare;