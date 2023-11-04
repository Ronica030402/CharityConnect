import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NPOPage from './npo'; 
import MapScreen from './maps'; 
import SelectedNPO from './selectedNPO'

const Stack = createNativeStackNavigator();

export default function MapNav() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="selectedNPO" component={SelectedNPO}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}


