import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigating from './navigating';

const slideDuration = 3000; 

const Slide2 = () => {
  const navigation = useNavigation();

  const navigateToSlide = useCallback((slideName) => {
    navigation.navigate(slideName);
  }, [navigation]);

  const navigateToHomeScreen = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }], 
    });
  }, [navigation])

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToSlide('Slide3');
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [navigateToSlide]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.picContainer}>
          <Image source={require('./Images/slide2.jpg')} style={styles.picImage} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Let Us Help Together</Text>
          <Text style={styles.txt}>
            Together, we can make a meaningful difference in the lives of others. Join us in our mission to bring hope, support, and positive change to those who need it most. Your contribution, no matter how small, can be a beacon of light in someone's life. Together, we can create a brighter future for all.
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
        <Navigating active={true} onPress={() => navigateToSlide('Slide2')} />
        <Navigating active={false} onPress={() => navigateToSlide('Slide3')} />
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
     marginVertical:20
  },
});

export default Slide2;
