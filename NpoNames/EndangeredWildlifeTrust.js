import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Endangered = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/Endangered.png')} style={styles.logo} />
          <Text style={styles.title}>Endangered Wildlife Trust</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('./Images/WEnd.jpg')} style={styles.squareImage} />
          <View style={styles.textColumn}>
            <Text style={styles.squareImageText}>
              Environmental conservation
            </Text>
          </View>
        </View>
        
        <Text style={styles.aboutUsTitle}>Who we are </Text>
        <Text style={styles.aboutUsText}>
          The Endangered Wildlife Trust (EWT) is a registered Non-profit, Non-governmental, and Public Benefit Organisation. Since its  establishment in 1973, the EWT has become a leading, well-known, and trusted conservation roleplayer. 
        </Text>
        <Image source={require('./Images/conservation.webp')} style={styles.secondImage} />
        <Text style={styles.aboutUsText}>We are committed to conserving threatened species and ecosystems in southern Africa to the benefit of all. To achieve this, we focus on three main strategic imperatives: Saving Species, Conserving Habitats, and Benefitting People.

Our team is spread across southern and East Africa. We work with businesses, communities, and government and are leaders in conservation research, community conservation, livelihood support, and training. We are innovative and skilled in reducing human-wildlife conflict, monitoring threatened species, and protecting safe spaces for animals and people. </Text>
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
});

export default Endangered;