import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Settings({ navigation }) {
  const handleDeleteAccount = () => {
    // Navigate to the DeleteAccount screen
    navigation.navigate('DeleteAccount');
  };

  const handleManageStorage = () => {
    // Navigate to the ManageStorageAndData screen
    navigation.navigate('ManageStorageAndData');
  };

  const handleHelp = () => {
    // Navigate to the Help screen
    navigation.navigate('Help');
  };

  const handleInviteFriend = () => {
    // Navigate to the InviteAFriend screen
    navigation.navigate('InviteAFriend');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.optionContainer}>
        <Button title="Delete Account" onPress={handleDeleteAccount} color="purple" />
      </View>
      <View style={styles.optionContainer}>
        <Button title="Manage Storage and Data" onPress={handleManageStorage} color="#E0B0FF" />
      </View>
      <View style={styles.optionContainer}>
        <Button title="Help" onPress={handleHelp} color="#E0B0FF" />
      </View>
      <View style={styles.optionContainer}>
        <Button title="Invite a Friend" onPress={handleInviteFriend} color="#E0B0FF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#E0B0FF',
    marginBottom: 20,
  },
  optionContainer: {
    width: '80%',
    marginBottom: 10,
  },
});

export default Settings;
