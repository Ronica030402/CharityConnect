import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, deleteUser } from 'firebase/auth';

const DeleteAccountScreen = () => {
  const auth = getAuth();
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  const deleteAccount = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        // Account deleted successfully
        setIsAccountDeleted(true);
      })
      .catch((error) => {
        console.error('Error deleting account:', error);
      });
  };

  return (
    <View style={styles.container}>
      {isAccountDeleted ? (
        <Text style={styles.successMessage}>
          Your account has been deleted.
        </Text>
      ) : (
        <>
          <Text style={styles.title}>Delete Account</Text>
          <Text style={styles.instructions}>
            Are you sure you want to delete your account?
          </Text>
          <Button title="Delete Account" onPress={deleteAccount} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  instructions: {
    marginBottom: 20,
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
  },
});

export default DeleteAccountScreen;
