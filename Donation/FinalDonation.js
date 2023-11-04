import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonationPage from './DonationPage';
import UserInfoPage from './UserInfoPage';
import PaymentPage from './PaymentPage'; 
import ThankYouPage from './ThankYouPage';
import { useRoute } from '@react-navigation/native';
import NPOPage from '../NpoPages/npos';
const Stack = createNativeStackNavigator();

function FinalDonation() {

  const route = useRoute();
  const { userName } = route.params;
  
  const { userEmail } = route.params;

  return (

      <Stack.Navigator initialRouteName="Npo" screenOptions={{ headerShown: false }}>
              <Stack.Screen
          name="Npo"
        initialParams={{ userName ,userEmail}}
         component={NPOPage}
          options={{ title: 'Donation Page' }}
        />
        <Stack.Screen
          name="Donation"
        initialParams={{ userName ,userEmail}}
         component={DonationPage}
          options={{ title: 'Donation Page' }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfoPage}
          options={{ title: 'User Information Page' }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentPage}
          options={{ title: 'Payment Page' }}
        />
        
        <Stack.Screen
          name="ThankYou"
          component={ThankYouPage}
          options={{ title: 'Thank You' }}
        />
      </Stack.Navigator>
  
  );
}

export default FinalDonation;
