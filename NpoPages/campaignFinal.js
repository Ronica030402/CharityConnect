import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Store from '../Store2/view';
import EventsPage from '../Donation/Topbab/screens/UpcomingEvents';
import NPOstore from './TopTab/StoreNpo';
import NPOEvents from './TopTab/EventsNpo';
import { MaterialIcons } from '@expo/vector-icons';
import FinalProfile from './FinalProfile';
import TableComponent from './donationHistory';

const Tab = createBottomTabNavigator();

const CampaignFinal = () => {
  return (
      <Tab.Navigator
        initialRouteName="Store" screenOptions={{ headerShown: false }}
        tabBarOptions={{
          activeTintColor: '#9867C5',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
          },
        }}
      >
        <Tab.Screen name="Store"
        component={NPOstore}
          options={{
            tabBarLabel: 'Store',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="store" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Event"
          component={NPOEvents}
          options={{
            tabBarLabel: 'Event',
            tabBarIcon: ({ color, size }) => (
             <MaterialIcons name="event" size={24} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="Donations"
          component={TableComponent}
          options={{
            tabBarLabel: 'Donations',
            tabBarIcon: ({ color, size }) => (
             <MaterialIcons name="list-alt" size={24} color={color} />
            ),
          }}
        />
           <Tab.Screen
          name="Profile"
          component={FinalProfile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
             <MaterialIcons name="person" size={24} color={color} />
            ),
          }}
        />
       
       
      </Tab.Navigator>
  );
};

export default CampaignFinal;
