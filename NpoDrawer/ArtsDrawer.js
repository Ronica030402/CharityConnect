import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import FinalAbout from '../About/FinalAbout';
import TabNav from '../Menu/Tabs';
import BlogScreen from '../Blogs/FinalBlog';
import Arts from '../NpoNames/Arts'
import FinalSettings from '../Settings/FinalSettings'

const Drawer = createDrawerNavigator();

const ArtsDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Arts"
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
        name="Arts"
        component={Arts}
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

export default ArtsDrawer;