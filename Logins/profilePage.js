import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';

const ProfilePage = () => {
  const auth = getAuth();
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const updateEmailHandler = () => {
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        // Email updated successfully
      })
      .catch((error) => {
        console.error('Error updating email:', error);
      });
  };

  const updatePasswordHandler = () => {
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        // Password updated successfully
      })
      .catch((error) => {
        console.error('Error updating password:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser.email}</Text>
      <Text>UID: {auth.currentUser.uid}</Text>
      <TextInput
        placeholder="New Email"
        value={newEmail}
        onChangeText={(text) => setNewEmail(text)}
        style={styles.input}
      />
      <Button title="Update Email" onPress={updateEmailHandler} />
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        style={styles.input}
      />
      <Button title="Update Password" onPress={updatePasswordHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default ProfilePage;
