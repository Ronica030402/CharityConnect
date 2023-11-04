import React, { useState } from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleImagePick = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // User canceled the image picker
      } else if (response.error) {
        // Error during image picking
        console.error('ImagePicker Error:', response.error);
      } else {
        // Image picked successfully, set it as the profile picture
        setProfilePicture({ uri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePick}>
        {profilePicture ? (
          <Image source={profilePicture} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Text>Select a Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>

  
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.contactInfo}>
        Email: johndoe@email.com
        {"\n"}
        Phone: (555) 555-5555
        {"\n"}
        Address: 123 Main Street, City, State, Zip Code
      </Text>

      {/* Donation History */}
      <Text style={styles.sectionTitle}>Donation History</Text>
      <View style={styles.infoContainer}>
        <Text>Total Donations: $5,000</Text>
        <Text>Last Donation: $500 on September 15, 2023</Text>
        <Text>Donation Frequency: Monthly</Text>
      </View>

      <Text style={styles.sectionTitle}>Payment Methods</Text>
      <View style={styles.infoContainer}>
        <Text>Credit Card: **** **** **** 1234 (Expires 12/25)</Text>
        <Text>PayPal: johndoe@email.com</Text>
        <Text>Bank Transfer: Account Number: 12345678</Text>
      </View>

      <Text style={styles.sectionTitle}>Security Settings</Text>
      <TouchableOpacity style={styles.securityOption}>
        <Text>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.securityOption}>
        <Text>Enable/Disable Two-Factor Authentication</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.securityOption}>
        <Text>Manage Account Security</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  profilePicturePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  infoContainer: {
    fontSize: 16,
    marginTop: 10,
  },
  securityOption: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default UserProfile;
