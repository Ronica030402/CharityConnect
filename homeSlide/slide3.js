import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigating from './navigating';

const slideDuration = 3000;

const Slide3 = () => {
  const navigation = useNavigation();

  const navigateToSlide = useCallback((slideName) => {
    navigation.navigate(slideName);
  }, [navigation]);

  const navigateToHomeSlide = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Slide1' }],
    });
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToHomeSlide(); // Navigate to HomeSlide after the specified duration
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [navigateToHomeSlide]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.picContainer}>
          <Image source={require('./Images/slide3.jpg')} style={styles.picImage} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Make A Donation</Text>
          <Text style={styles.txt}>
            Your generous donation can transform lives and create a better world. By giving today,
            you're contributing to positive change, supporting those in need, and making a lasting
            impact. Join us in making a donation that matters and helps those less fortunate.
            Together, we can bring hope and brighter tomorrows.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.topBar}>
        <TouchableOpacity onPress={navigateToHomeSlide}>
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
    height: '50%',
    alignItems: 'center',
  },
  picImage: {
    width: '100%',
    height: '100%',
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
     marginVertical:20
  },
});

export default Slide3;
