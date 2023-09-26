import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigating from './navigating';

const slideDuration = 5000; // Duration of slide animation in milliseconds

const HomeSlide = () => {
  const navigation = useNavigation();

  const [activeSlide, setActiveSlide] = useState(0);
  const slideX = useMemo(() => new Animated.Value(0), []);
  const slideTo = useCallback((slideIndex) => {
    Animated.timing(slideX, {
      toValue: -slideIndex * 100,
      duration: slideDuration,
      useNativeDriver: false,
    }).start();
  }, [slideX]);

  const navigateToSlide = useCallback((slideName) => {
    navigation.navigate(slideName);
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % 3;
      setActiveSlide(nextSlide);
      slideTo(nextSlide);

      if (nextSlide === 0) {
        // Only navigate to 'HomeSlide' if it's not already the active slide
        if (activeSlide !== 0) {
          navigateToSlide('HomeSlide');
        }
      } else if (nextSlide === 1) {
        navigateToSlide('Slide1');
      } else if (nextSlide === 2) {
        navigateToSlide('Slide2');
      }
    }, slideDuration);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, navigateToSlide, slideTo]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled>
        <Animated.View style={[styles.slideContainer, { transform: [{ translateX: slideX }] }]}>
          <Image source={require('./Images/charityHome.jpg')} style={styles.picImage} />
        </Animated.View>
        <Animated.View style={[styles.slideContainer, { transform: [{ translateX: slideX }] }]}>
          {/* Content for Slide 1 */}
        </Animated.View>
        <Animated.View style={[styles.slideContainer, { transform: [{ translateX: slideX }] }]}>
          {/* Content for Slide 2 */}
        </Animated.View>
      </ScrollView>

      <View style={styles.dotsContainer}>
        <Navigating active={activeSlide === 0} onPress={() => setActiveSlide(0)} />
        <Navigating active={activeSlide === 1} onPress={() => setActiveSlide(1)} />
        <Navigating active={activeSlide === 2} onPress={() => setActiveSlide(2)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  slideContainer: {
    width: '100%',
    height: '100%',
  },
  picImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HomeSlide;
