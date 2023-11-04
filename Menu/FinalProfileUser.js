import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from './UserProfile';
import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile'; 
import UpdateCardDetails from './UpdtateCardDetails';
import { useRoute } from '@react-navigation/native';
import { UserProfileProvider } from './UserProfileContext'; 
const Stack = createStackNavigator();

function FinalProfileUser() {
  const route = useRoute();
  const { userName } = route.params;
  const { userEmail } = route.params;
  return (
    <UserProfileProvider>
        <Stack.Navigator initialRouteName="UserProfile">
          <Stack.Screen name="UserProfile" initialParams={{userEmail,userName}} component={UserProfile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="UpdateCardDetails" component={UpdateCardDetails} />
        </Stack.Navigator>
    </UserProfileProvider>
  );
}

export default FinalProfileUser;
