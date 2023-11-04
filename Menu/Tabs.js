import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FinalDonation from '../Donation/FinalDonation';
import { MaterialIcons } from '@expo/vector-icons'; 
import FinalProfileUser from './FinalProfileUser';
import UserEventStack from './UserEventStack';
import MenuPage from './Menu'
import StoreNavigation from '../Store2/StoreNav';
import TopTab from '../Donation/Topbab/Toptab';
import { useRoute } from '@react-navigation/native';
import {View,Text} from 'react-native'
import BlogView from '../Store2/components/blogView';
import BlogsPage from '../Store2/ViewBlogs';
import CreateBlog from '../Store2/components/blogs';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const route = useRoute();
  const { userName } = route.params;
  const { userEmail } = route.params;
  return (
  
    <Tab.Navigator initialRouteName="Donations" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Donations"
        component={TopTab}
        initialParams={{ userName ,userEmail}}
        options={{
          tabBarLabel: 'Donation',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyStore"
  
        component={StoreNavigation}
        initialParams={{ userName ,userEmail}}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="store" size={size} color={color} />

          ),
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogsPage}
        initialParams={{ userName ,userEmail}}
        options={{
          tabBarLabel: 'Blogs',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="app-blocking" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        initialParams={{ userName ,userEmail}}
        component={CreateBlog}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FinalProfileUser}
        initialParams={{ userName ,userEmail}}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
};

export default TabNav;