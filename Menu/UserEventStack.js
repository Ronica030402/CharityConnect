import React from 'react';
import { View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventNotification from './EventNotification';
import UserNotifications from '../NpoPages/UserNotifications';
import { useRoute } from '@react-navigation/native';
const Stack = createStackNavigator();

const UserEventStack=() =>{

    const route = useRoute();
    const { userName } = route.params; // Accessing the userName from route.params
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Username: {userName}</Text>
      
      </View>
  
  
  );
}
export default UserEventStack;