import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Image1 from './Images/crop.jpg';
import Image2 from './Images/pro.jpeg';
import Image3 from './Images/tomato.jpeg';

const CropProductionBlog = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('BlogScreen');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Ionicons name="ios-arrow-back" size={32} color="black" />
      <Text style={styles.title}>3 Simple ways to Grow Crops at Home </Text>
      <Text style={styles.author}>By Ronica Kuntes</Text>
      <Text style={styles.para}>1.Container gardening</Text>
      <Image
        source={Image1} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
           Container gardening is an excellent option for growing crops at home, especially
           if you have limited space. You can use containers like pots, buckets, or even 
           old tires to plant crops.Choose the right containers and fill them with 
           nutrient-rich potting soil.Select crops that are suitable for container 
           gardening, such as tomatoes, peppers, herbs, and salad greens.Place your 
           containers in a location that receives adequate sunlight.Water your crops 
           regularly and provide appropriate nutrients through organic fertilizers.
      </Text>
      <Text style={styles.para}>2.Vertical gardening</Text>
      <Image
        source={Image2} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Vertical gardening is ideal for homes with limited horizontal space. It involves
        growing crops vertically on walls, trellises, or hanging structures.Use vertical 
        planters, wall-mounted shelves, or trellises to create a vertical garden.Plant 
       crops like cucumbers, beans, or even small fruit trees that can climb or hang.Ensure 
       proper support for the plants to prevent them from falling.Regularly water and prune
       your vertical garden to maintain healthy growth.
      </Text>
      <Text style={styles.para}>3.Indoor gardening </Text>
      <Image
        source={Image3} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Indoor gardening allows you to grow crops inside your home year-round. It's great 
        for controlling environmental conditions.Select crops that thrive indoors, such as 
        herbs (e.g., basil, mint), microgreens, and dwarf fruit trees.
        Provide adequate light by placing plants near windows or using artificial grow
        lights.Use suitable indoor plant containers and high-quality potting mix.Maintain
        proper humidity levels, temperature, and ventilation for your indoor garden.
        Regularly water and fertilize your indoor crops.
      </Text>
      <Text >3 DAYS AGO |5 MIN READ </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"green"
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  para:{
    fontWeight:"bold"
  }
});
export default CropProductionBlog;
