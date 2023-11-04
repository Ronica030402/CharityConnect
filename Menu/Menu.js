import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuPage = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const handleProfile=()=>{
    navigation.navigate('UserProfile')
  };
  const handleDonation=()=>{
    navigation.navigate('FinalDonation')
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        <TouchableOpacity onPress={() => navigateToScreen('NotificationPage')} style={styles.menuItem}>
          <Ionicons name="ios-notifications" size={40} style={styles.icon} />
          <Text style={styles.label}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('About us')} style={styles.menuItem}>
          <Ionicons name="ios-settings" size={40} style={styles.icon} />
          <Text style={styles.label}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        <TouchableOpacity onPress={() => navigateToScreen('Resources')} style={styles.menuItem}>
          <Ionicons name="ios-book" size={40} style={styles.icon} />
          <Text style={styles.label}>Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('ContactUs')} style={styles.menuItem}>
          <Ionicons name="ios-mail" size={40} style={styles.icon} />
          <Text style={styles.label}>Support Request</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        <TouchableOpacity onPress={() => navigateToScreen('UserPortal')} style={styles.menuItem}>
          <Ionicons name="ios-person" size={40} style={styles.icon} />
          <Text style={styles.label}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleDonation} style={styles.menuItem}>
          <Ionicons name="ios-heart" size={40} style={styles.icon} />
          <Text style={styles.label}>Donation</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.navItem}>
          <Ionicons name="home" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDonation} style={styles.navItem}>
          <Ionicons name="heart" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('UserPortal')} style={styles.navItem}>
          <Ionicons name="book" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfile} style={styles.navItem}>
          <Ionicons name="person" size={24} style={styles.navIcon} />
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
    backgroundColor: 'white',
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
    backgroundColor: '#E0B0FF',
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
    paddingHorizontal: 70,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    backgroundColor: '#E0B0FF',
    position: 'absolute',
    bottom: 0, 
    width: '100%', 
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 20,
  },
  navIcon: {
    color: 'black',
  },
  navLabel: {
    fontSize: 12,
  },
});

export default MenuPage;
