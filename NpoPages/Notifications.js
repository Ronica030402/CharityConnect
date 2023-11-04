import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';

const NotificationScreen = () => {

  const notifications = [
    {
      id: 1,
      organization: "ABC Charity",
      amount: "$100",
    },
    {
      id: 2,
      organization: "XYZ Foundation",
      amount: "$50",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.heading}>Notifications: </Text>
          {notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>Donation Received</Text>
              <Text>
                Donation of {notification.amount} received from {notification.organization}.
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical:20
  },
  notificationCard: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  heading:{
    fontSize:20,
  }
});

export default NotificationScreen;
