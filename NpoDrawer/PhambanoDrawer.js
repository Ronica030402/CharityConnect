import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import FinalAbout from '../About/FinalAbout';
import TabNav from '../Menu/Tabs';
import BlogScreen from '../Blogs/FinalBlog';
import Phambano from '../NpoNames/Phambano';
import FinalSettings from '../Settings/FinalSettings'

const Drawer = createDrawerNavigator();

const PhambanoDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="hambano"
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
        name="Phambano"
        component={Phambano}
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

export default PhambanoDrawer;