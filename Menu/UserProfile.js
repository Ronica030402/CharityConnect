import React, { useState, useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, ScrollView,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import { UserProfileContext } from './UserProfileContext';
import DonationHistory from './userdonationhistory';
import { useRoute } from '@react-navigation/native';


const UserProfile = () => {
  const  email =userEmail
  const [password, setPassword] = useState('');
  const deleteUser = async () => {
    if (!email) {
      setError('Email is required to delete the user.');
      return;
    }

    try {
      const usersCollection = collection(db, 'Individuals');
      const q = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 1) {
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
          setEmail(''); // Clear the email field after deletion
          setError('User deleted successfully!');
        });
        navigation.navigate("HomeScreen")
      } else {
        setError('User not found.');
      }
    } catch (error) {
      setError('Error deleting user: ' + error.message);
    }
  };

  const route = useRoute();
  const { userName } = route.params;
  const { userEmail } = route.params;
  
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

  const handleUpdateCardDetailsPress = () => {
    navigation.navigate('UpdateCardDetails');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePictureClick}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.profilePicture} />
        ) : (
          <Image source={require('./ler.jpg')} style={styles.profilePicture} />
        )}
      </TouchableOpacity>

      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.contactInfo}>
        Email: {userEmail}
        {"\n"}
        Phone: {userProfile.phone}
        {"\n"}
        Address: {userProfile.address}
      </Text>

      {/* Donation History */}
      <Text style={styles.sectionTitle}>Donation History</Text>
    <DonationHistory user={userName}/>
      {/* Security Settings */}
      <Text style={styles.sectionTitle}>Security Settings</Text>
      <TouchableOpacity style={styles.securityOption} onPress={handleChangePasswordPress}>
        <Text style={styles.securityOptionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.securityOption} onPress={handleUpdateProfilePress}>
        <Text style={styles.securityOptionText}>Update Profile Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.securityOption} onPress={handleUpdateCardDetailsPress}>
        <Text style={styles.securityOptionText}>Update Card Details</Text>
      </TouchableOpacity>
     
      <Button title="sign out" color="red" onPress={handleSignOut}/>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
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
    alignSelf: 'center',
    color: 'purple', 
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 10,
    color:' black', 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'purple', 
  },
  infoContainer: {
    fontSize: 16,
    marginTop: 10,
  },
  securityOption: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'purple', 
    borderRadius: 5,
  },
  securityOptionText: {
    color: 'white',
  },
});

export default UserProfile;
