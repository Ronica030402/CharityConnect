import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigating from './navigating';

const slideDuration = 3000;

const Slide1 = () => {
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
      navigateToSlide('Slide2');
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [navigateToSlide]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.picContainer}>
          <Image source={require('./Images/slide1.png')} style={styles.picImage} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Donation And Charity</Text>
          <Text style={styles.txt}>
            Make a Difference Today! Join us in the spirit of giving and change lives through your generous donations. Your contributions empower us to make the world a better place. Together, we can create a positive impact and bring hope to those in need.
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
        <Navigating active={true} onPress={() => navigateToSlide('Slide1')} />
        <Navigating active={false} onPress={() => navigateToSlide('Slide2')} />
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
    height: '50%', 
    alignItems: 'center', 
  },
  picImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 20, 
    marginTop: 20, 
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
    marginVertical:20,
  },
});

export default Slide1;
