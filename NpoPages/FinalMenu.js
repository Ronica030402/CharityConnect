import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const NPOMenuPage = ({ navigation }) => {
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const handleCampaign=()=>{
    navigation.navigate('CampaignFinal')
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        
        <TouchableOpacity onPress={handleCampaign} style={styles.menuItem}>
          <Ionicons name="ios-rocket" size={40} style={styles.icon} />
          <Text style={styles.label}>Campaigns </Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => navigateToScreen('About us')} style={styles.menuItem}>
          <Ionicons name="ios-settings" size={40} style={styles.icon} />
          <Text style={styles.label}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        
        <TouchableOpacity onPress={() => navigateToScreen('Resources')} style={styles.menuItem}>
          <Ionicons name="ios-analytics" size={40} style={styles.icon} />
          <Text style={styles.label}>Analytics</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => navigateToScreen('ContactUs')} style={styles.menuItem}>
          <Ionicons name="ios-mail" size={40} style={styles.icon} />
          <Text style={styles.label}>Communication</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        
        <TouchableOpacity onPress={() => navigateToScreen('UserPortal')} style={styles.menuItem}>
          <Ionicons name="ios-person" size={40} style={styles.icon} />
          <Text style={styles.label}>Profile Manageme</Text>
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => navigateToScreen('Donate')} style={styles.menuItem}>
          <Ionicons name="ios-heart" size={40} style={styles.icon} />
          <Text style={styles.label}>Donation Tracking</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.navItem}>
          <Ionicons name="home" size={24} style={styles.navIcon} />
          <Text style={styles.navLabel}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('AboutUs')} style={styles.navItem}>
          <Ionicons name="ios-settings" size={24} style={styles.navIcon} />
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
    borderTopColor: '#dcdcdc', 
    backgroundColor: '#CF9FFF', 

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

export default NPOMenuPage;
