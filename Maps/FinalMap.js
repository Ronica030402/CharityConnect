import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NPOPage from '../NpoPages/npos' 
import MapScreen from './Maps'; 

const Stack = createNativeStackNavigator();

export default function FinalMap() {
  return (
  
      <Stack.Navigator initialRouteName="NPOPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="NPOPage"
          component={NPOPage}
          options={{ title: 'Choose NPO' }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: 'NPO Location' }}
        />
      </Stack.Navigator>
   
  );
}
