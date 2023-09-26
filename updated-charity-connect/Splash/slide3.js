import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigating from './navigating';

const slideDuration = 3000; // Duration between automatic slide transitions in milliseconds

const Slide3 = () => {
   const navigation = useNavigation();

  const navigateToSlide = useCallback((slideName) => {
    navigation.navigate(slideName);
  }, [navigation]);

  const navigateToHomeScreen = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }], 
    });
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToSlide('Slide1');
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [navigateToSlide]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.picContainer}>
         <Image source={require('./Images/slide3.jpg')} style={styles.picImage}/>
        </View>

        <View style={styles.textContainer}>
        <Text style={styles.heading}>Make A Donation</Text>
          <Text style={styles.txt}>Your generous donation can transform lives and create a better world. By giving today, you're contributing to positive change, supporting those in need, and making a lasting impact. Join us in making a donation that matters and helps those less fortunate. Together, we can bring hope and brighter tomorrows.
          </Text>
        </View>
      </ScrollView>

      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={navigateToHomeScreen}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dotsContainer}>
        <Navigating active={false} onPress={() => navigateToSlide('HomeSlide')} />
        <Navigating active={false} onPress={() => navigateToSlide('Slide1')} />
        <Navigating active={false} onPress={() => navigateToSlide('Slide2')} />
        <Navigating active={true} onPress={() => navigateToSlide('Slide3')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  picContainer: {
    width: '100%',
    height: '50%', // Picture takes 50% of the screen
    alignItems: 'center', // Center the picture horizontally
  },
  picImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 20, // Add some horizontal padding for text
    marginTop: 20, // Add some top margin
  },
  heading: {
    fontSize: 25,
    fontFamily: 'ALGERIAN',
    color: 'purple',
    textAlign: 'center',
  },
  txt: {
    fontSize: 17,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  skipText: {
    fontSize: 16,
    color: 'purple',
  },
});

export default Slide3;
