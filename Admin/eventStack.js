import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventCreationForm from './EventCreationForm';
import NPOEventList from './NPOEventList';

const Stack = createStackNavigator();

const EventStack=() =>{
  return (
      <Stack.Navigator initialRouteName="EventCreationForm" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EventCreationForm" component={EventCreationForm} />
        <Stack.Screen name="NPOEventList" component={NPOEventList} />
      </Stack.Navigator>
  
  );
}
export default EventStack;

