import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FinalAbout from '../About/FinalAbout';
import TabNav from '../Menu/Tabs';
import BlogScreen from '../Blogs/FinalBlog';
import SAME from '../NpoNames/SAME';
import FinalSettings from '../Settings/FinalSettings';

const Drawer = createDrawerNavigator();

const SameDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SAME"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="AboutUs"
        component={FinalAbout}
        options={{ drawerLabel: 'About Us' }}
      />
      <Drawer.Screen
        name="TabNav"
        component={TabNav}
        options={{ drawerLabel: 'Donations' }}
      />
      <Drawer.Screen
        name="SAME"
        component={SAME}
        options={{ drawerLabel: 'About NPO' }}
      />
      <Drawer.Screen
        name="Blogs"
        component={BlogScreen}
        options={{ drawerLabel: 'Blogs' }}
      />
      <Drawer.Screen
        name="Settings"
        component={FinalSettings}
        options={{ drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};

export default SameDrawer;

