import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from './UserProfile';
import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile'; 
import { UserProfileProvider } from './UserProfileContext'; 
const Stack = createStackNavigator();

function FinalProfile() {
  return (
    <UserProfileProvider>
        <Stack.Navigator initialRouteName="UserProfile" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      
        </Stack.Navigator>
    </UserProfileProvider>
  );
}

export default FinalProfile;
