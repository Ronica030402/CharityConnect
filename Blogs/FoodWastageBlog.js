import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Image1 from './Images/mprep1.jpeg'; 
import Image2 from './Images/fwas.jpeg';
import Image3 from './Images/fpor.jpg';
import Image4 from './Images/fcom.jpg';
import Image5 from './Images/foodDon.jpg';

const FoodWastageBlog= () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Ionicons name="arrow-back" size={32} color="black" />
      <Text style={styles.title}>5 Best Ways to manage Food Wastage</Text>
      <Text style={styles.author}>By Ronica Kuntes</Text>
      <Text style={styles.para}>1.Meal Planning </Text>
      <Image
        source={Image1} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
           Plan your meals in advance, considering the number of servings you need and the 
           ingredients required.Create a shopping list based on your meal plan to avoid
           buying unnecessary items. Use perishable ingredients first to prevent them from
           going bad.
      </Text>
      <Text style={styles.para}>2.Proper Storage</Text>
      <Image
        source={Image2} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Store food items correctly to extend their shelf life. Use airtight containers for 
        leftovers and food items like grains, cereals, and dry goods.Keep fruits and 
         fresh by storing them in the refrigerator or using appropriate storage bags.Check 
         the expiration dates on food items and prioritize consuming those with approaching
         dates.
      </Text>
      <Text style={styles.para}>3.Portion control </Text>
      <Image
        source={Image3} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Be mindful of portion sizes when preparing and serving meals to avoid overcooking
        or over-serving.If you have leftovers, consider saving them for later use or 
        freezing them for future meals.
      </Text>
      <Text style={styles.para}>5.Composting </Text>
      <Image
        source={Image4} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
       Establish a composting system for food scraps and organic waste.Composting not only 
       reduces waste but also produces nutrient-rich compost that can be used to enrich 
       your garden soil.
      </Text>
      <Text style={styles.para}>6.Donate Extra Food </Text>
      <Image
        source={Image5} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
       If you have excess food that you won't consume in time, consider donating it to
       local food banks or charities.Many organizations accept non-perishable and even some 
       perishable food items to help those in need.
      </Text>
      <Text>10 MIN|6 DAYS AGO</Text>
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

export default FoodWastageBlog;
