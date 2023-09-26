import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MenuPage = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleBlogs = () => {
    navigation.navigate('BlogScreen'); 
  };
  const handleMaps =()=>{
    navigation.navigate('Maps');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        
        <TouchableOpacity onPress={handleMaps} style={styles.menuItem}>
          <Ionicons name="location" size={40} style={styles.icon} />
          <Text style={styles.label}>Location</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => navigateToScreen('About us')} style={styles.menuItem}>
          <Ionicons name="information-circle" size={40} style={styles.icon} />
          <Text style={styles.label}>About Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        
        <TouchableOpacity onPress={handleBlogs} style={styles.menuItem}>
          <Ionicons name="book" size={40} style={styles.icon} />
          <Text style={styles.label}>Blogs</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => navigateToScreen('ContactUs')} style={styles.menuItem}>
          <Ionicons name="mail" size={40} style={styles.icon} />
          <Text style={styles.label}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        
        <TouchableOpacity onPress={() => navigateToScreen('UserPortal')} style={styles.menuItem}>
          <Ionicons name="person" size={40} style={styles.icon} />
          <Text style={styles.label}>User Portal</Text>
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => navigateToScreen('Donate')} style={styles.menuItem}>
          <Ionicons name="heart" size={40} style={styles.icon} />
          <Text style={styles.label}>Donate</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.navItem}>
          <Ionicons name="home" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('AboutUs')} style={styles.navItem}>
          <Ionicons name="information-circle" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('UserPortal')} style={styles.navItem}>
          <Ionicons name="person" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('ContactUs')} style={styles.navItem}>
          <Ionicons name="mail" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%', 
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CF9FFF', 
    paddingVertical: 20,
  },
  icon: {
    color: 'black', 
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  navBar: {
   flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:70,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc', // Change the color as needed
    backgroundColor: '#CF9FFF', // Change the background color as needed

  },
  navItem: {
     alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 20, // Add space between the icons
  },
  navIcon: {
    color: 'black', // Change the icon color as needed
  },
  navLabel: {
    fontSize: 12,
  },
});

export default MenuPage;
