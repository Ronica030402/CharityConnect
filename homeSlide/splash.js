import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeSlide = ({ navigation }) => {
  const handleButton = () => {
    navigation.navigate('Slide1');
  };


   setTimeout(() => {
     navigation.navigate('Slide1'); 
    }, 3000);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButton}>
        <Image source={require('./Images/charityHome.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  image: {
    width: 500, 
    height: 500, 
    resizeMode: 'cover',
  },
});

export default HomeSlide;

