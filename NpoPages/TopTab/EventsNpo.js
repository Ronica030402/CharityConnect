
import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventsPage from '../../Donation/Topbab/screens/UpcomingEvents'
import CreateEvent from '../../Store2/components/createevent';

const Tab = createMaterialTopTabNavigator();

export default function NPOEvents() {
  return (
 
      <Tab.Navigator style={{marginTop:"10%"}}>
        <Tab.Screen name="Events" component={EventsPage} />
        <Tab.Screen name="Add EVents" component={CreateEvent} />

      </Tab.Navigator>
  
  );
}
