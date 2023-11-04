
import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FinalDonation from '../FinalDonation';
import Screen2 from './screens/UpcomingEvents';
import Screen3 from './screens/Screen3.js';
import EventsPage from './screens/UpcomingEvents';
import { useRoute } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  const route = useRoute();
  const { userName } = route.params;
  
  const { userEmail } = route.params;

  return (
 
      <Tab.Navigator style={{marginTop:"10%"}}>
        <Tab.Screen name="Donation" component={FinalDonation} initialParams={{ userName,userEmail }}/>              
        <Tab.Screen name="Events" component={EventsPage} />
        <Tab.Screen name="Campaigns" component={Screen3} />
      </Tab.Navigator>
  
  );
}
