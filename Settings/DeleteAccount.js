import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

function DeleteAccount({ navigation }) {
  const [isDeleting, setDeleting] = useState(false);

  const handleDeleteAccount = () => {
    setDeleting(true);

    // Replace this with your actual account deletion logic, such as an API request.
    // For this example, we'll simulate a delay to show the loading state.
    setTimeout(() => {
      // Account deletion logic (replace this with your actual implementation)
      // Once the account is deleted, you can log the user out and navigate to the HomeScreen.
      setDeleting(false);
      Alert.alert('Account Deleted', 'Your account has been deleted.', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the HomeScreen
            navigation.navigate('HomeScreen');
          },
        },
      ]);
    }, 2000); // Simulated 2-second delay
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <Text style={styles.description}>
        Are you sure you want to delete your account? This action cannot be undone.
      </Text>
      <Button
        title={isDeleting ? 'Deleting...' : 'Delete Account'}
        onPress={handleDeleteAccount}
        color="purple"
        disabled={isDeleting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0B0FF', // Background color set to '#E0B0FF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DeleteAccount;
