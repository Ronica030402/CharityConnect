import React, { useState, useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button,ScrollView,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import { UserProfileContext } from './UserProfileContext';

const UserProfile = () => {
  const handleSignOut = () => {
    Alert.alert(
      'Confirm Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Sign out canceled'),
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          onPress: () => {
            // Perform the sign-out action here
          navigation.navigate("HomeScreen")
            // You can add the sign-out logic here (e.g., Firebase sign out)
          },
        },
      ],
      { cancelable: false }
    );
  };


  const { userProfile } = useContext(UserProfileContext);
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleProfilePictureClick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    }
  };

  const handleChangePasswordPress = () => {
    navigation.navigate('ChangePassword');
  };

  const handleUpdateProfilePress = () => {
    navigation.navigate('UpdateProfile');
  };

  return (
    <ScrollView style={{marginVertical:50,marginHorizontal:10}}>
      
      <TouchableOpacity onPress={handleProfilePictureClick}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.profilePicture} />
        ) : (
          <Image source={require('./ler.jpg')} style={styles.profilePicture} />
        )}
      </TouchableOpacity>
     
      
      <Text style={styles.name}>{userProfile.name}</Text>
      <Text style={styles.organizationName}>{userProfile.organizationName}</Text>
      <Text style={styles.mission}>{userProfile.mission}</Text>
      
      <Text style={styles.sectionTitle}>NPO Information</Text>
      <Text style={styles.contactInfo}>
        Email: {userProfile.email}
        {"\n"}
        Phone: {userProfile.phone}
        {"\n"}
        Address: {userProfile.address}
      </Text>

      <Text style={styles.sectionTitle}>Mission and Vision</Text>
      <Text style={styles.mission}>
        Mission: {userProfile.npoMission}
        {"\n"}
        Vision: {userProfile.npoVision}
      </Text>

      <Text style={styles.sectionTitle}>History</Text>
      <Text style={styles.mission}>
        Founded: {userProfile.npoFounded}
        {"\n"}
        Why Founded: {userProfile.npoWhyFounded}
        {"\n"}
        Achievements: {userProfile.npoAchievements}
      </Text>

      <Text style={styles.sectionTitle}>Social Media and Web Links</Text>
      <Text style={styles.mission}>
        Website: {userProfile.npoWebsite}
        {"\n"}
        Facebook: {userProfile.npoFacebook}
        {"\n"}
        Twitter: {userProfile.npoTwitter}
        {"\n"}
        Instagram: {userProfile.npoInstagram}
        {"\n"}
        LinkedIn: {userProfile.npoLinkedIn}
      </Text>

     
      <Text style={styles.sectionTitle}>Security Settings</Text>
      <TouchableOpacity style={styles.securityOption} onPress={handleChangePasswordPress}>
        <Text style={styles.securityOptionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.securityOption} onPress={handleUpdateProfilePress}>
        <Text style={styles.securityOptionText}>Update Profile Details</Text>
        
      
      </TouchableOpacity>
      <Button title='Sign Out' color="red" onPress={handleSignOut}/>
  
  
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // White background color
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple', // Purple text color
  },
  organizationName: {
    fontSize: 18,
    textAlign: 'center',
    color: 'purple', // Purple text color
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'LEFT',
   
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'LEFT',
    color: 'purple', // Purple text color
  },
  securityOption: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'purple', // Purple background color
    borderRadius: 5,
  },
  securityOptionText: {
    color: 'white', // White text color
    textAlign: 'center',
  },
  mission: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    textAlign: 'LEFT',
  },
});

export default UserProfile;
