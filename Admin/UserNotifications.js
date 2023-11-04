
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserNotifications = ({ notifications }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0B0FF',
    borderRadius: 5,
  },
});

export default UserNotifications;
