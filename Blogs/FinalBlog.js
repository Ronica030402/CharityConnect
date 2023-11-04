import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BlogScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="black" />
      </TouchableOpacity>
      <View style={[styles.box, { backgroundColor:'#7F00FF',height: 200 }]}>
        <Ionicons name="leaf" size={40} color="white" style={styles.icon} />
        <Text style={styles.heading}>Basic Crop Production</Text>
        <TouchableOpacity
          style={styles.readButton}
          onPress={() => navigation.navigate('CropProductionBlog')}>
          <Text style={styles.buttonText}>READ NOW</Text>
        </TouchableOpacity>

      </View>

      <View style={[styles.box, { backgroundColor: '#50C878', height: 200 }]}>
        <Ionicons name="fast-food" size={40} color="white" style={styles.icon} />
        <Text style={styles.heading}>Food Wastage Management</Text>
        <TouchableOpacity
          style={styles.readButton}
          onPress={() => navigation.navigate('FoodWastageBlog')}>
          <Text style={styles.buttonText}>READ NOW</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.box, { backgroundColor: '#B768A2', height: 200 }]}>
        <Ionicons name="heart" size={40} color="white" style={styles.icon} />
        <Text style={styles.heading}>Education</Text>
        <TouchableOpacity
          style={styles.readButton}
          onPress={() => navigation.navigate('EducationBlog')}>
          <Text style={styles.buttonText}>READ NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'flex-end', 
    flexDirection: 'row', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight:5, 
  },
  heading: {
    fontSize: 20,
    flex: 1,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white', 
  },
  readButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  buttonText: {
    color: '#E0B0FF',
  },
};
export default BlogScreen;