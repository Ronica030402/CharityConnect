import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPage from './Menu'; 


const Stack = createStackNavigator();

const FinalMenu = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuPage} options={{ headerShown: false}} />
      </Stack.Navigator>
  );
};
export default FinalMenu;