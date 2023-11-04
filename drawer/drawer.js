// DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ScreenOne">
        <Drawer.Screen name="ScreenOne" component={ScreenOne} />
        <Drawer.Screen name="ScreenTwo" component={ScreenTwo} />
        <Drawer.Screen name="ScreenThree" component={ScreenThree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
