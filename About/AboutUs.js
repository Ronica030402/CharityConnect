import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AboutUsPage = () => {
 
  const images = [
    require('./assets/pexels-photo-8613319.jpeg'),
    require('./assets/pexels-phoTo-1125850.jpeg'),
    require('./assets/pexels-photo-8613319.jpeg'),
    require('./assets/pexelss-photo-1739842.jpeg'),
    require('./assets/pexels-photo-600740MV.jpeg'),


  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Charity.png')} 
        style={styles.logo}
      />
      <ScrollView>
        <View style={styles.slideshowContainer}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.imageContainer,
                {
                  display: index === currentImageIndex ? 'flex' : 'none',
                },
              ]}
            >
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </View>
        <View style={styles.txtInfor}>
          <Text style={styles.aboutUsHeading}>About Us</Text>
          <Text style={styles.aboutUsDescription}>
           Welcome to our charity donation app. We are dedicated to making a
           positive impact on the world by connecting donors with non-profit
           organizations in need. Our platform allows you to discover and support
            various causes and make a difference in the lives of those in need.
         </Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
   
  },
  aboutUsHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  aboutUsDescription: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  slideshowContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  txtInfor:{
    marginVertical:20
  }
});

export default AboutUsPage;
