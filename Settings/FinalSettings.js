import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './settings';
import Help from './help';
import DeleteAccount from './DeleteAccount';
import ManageStorageAndData from './storage';
import InviteAFriend from './invite';

const Stack = createStackNavigator();

function FinalSettings() {
  return (
 
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
        <Stack.Screen name="Help" component={Help} options={{ title: 'Help' }} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{ title: 'Delete Account' }} />
        <Stack.Screen name="ManageStorageAndData" component={ManageStorageAndData} options={{ title: 'Manage Storage and Data' }} />
        <Stack.Screen name="InviteAFriend" component={InviteAFriend} options={{ title: 'Invite a Friend' }} />
      </Stack.Navigator>
  
  );
}

export default FinalSettings;