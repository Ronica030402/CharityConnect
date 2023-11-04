import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

function InviteAFriend() {
  const navigation = useNavigation();

  const handleShare = (platform) => {
    let link = '';

    switch (platform) {
      case 'whatsapp':
        link = 'whatsapp://send?text=Check out this app! https://example.com';
        break;
      case 'facebook':
        link = 'https://www.facebook.com/sharer/sharer.php?u=https://example.com';
        break;
      case 'instagram':
        link = 'https://www.instagram.com/';
        break;
      case 'twitter':
        link = 'https://twitter.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20app!';
        break;
      case 'email':
        link = 'mailto:?subject=Check%20out%20this%20app&body=Check%20out%20this%20awesome%20app:%20https://example.com';
        break;
      default:
        break;
    }

    if (link) {
      Linking.openURL(link)
        .then(() => {
          console.log(`Opened ${platform}`);
        })
        .catch((error) => {
          console.error(`Error opening ${platform}:`, error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Invite a Friend</Text>
      </View>
      <TouchableOpacity onPress={() => handleShare('whatsapp')}>
        <View style={styles.option}>
          <Ionicons name="logo-whatsapp" size={32} color="green" />
          <Text style={styles.optionText}>Invite with WhatsApp</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleShare('facebook')}>
        <View style={styles.option}>
          <Ionicons name="logo-facebook" size={32} color="blue" />
          <Text style={styles.optionText}>Invite with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleShare('instagram')}>
        <View style={styles.option}>
          <Ionicons name="logo-instagram" size={32} color="purple" />
          <Text style={styles.optionText}>Invite with Instagram</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleShare('twitter')}>
        <View style={styles.option}>
          <Ionicons name="logo-twitter" size={32} color="blue" />
          <Text style={styles.optionText}>Invite with Twitter</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleShare('email')}>
        <View style={styles.option}>
          <Ionicons name="mail" size={32} color="red" />
          <Text style={styles.optionText}>Invite via Email</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0B0FF', // Background color set to '#E0B0FF'
    padding: 20, // Add padding for spacing
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the title
    padding: 10,
    marginTop: 20, // Add top margin to the header
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1, // Add a bottom border to separate options
    borderColor: '#DDD', // Border color
  },
  optionText: {
    fontSize: 18,
    color: 'purple',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
});

export default InviteAFriend;
