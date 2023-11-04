import React from 'react';
import { View, Text, Button } from 'react-native';
import UserNotifications from '../NpoPages/UserNotifications';

const EventNotification = ({ navigation }) => {
  const userNotifications = [
    'New event added: Event 1',
    'New event added: Event 2',
  ];

  const handleNotification = () => {

    navigation.navigate('UserNotifications', { notifications: userNotifications });
  };

  return (
    <View>
      <Text>Individuals' Screen</Text>
      <Button
        title="View Notifications"
        onPress={handleNotification} 
      />
      <UserNotifications notifications={userNotifications} />
    </View>
  );
}

export default EventNotification;
