import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FinalDonation from '../Donation/FinalDonation'
import Events from './Events';
import Campaigns from './Campaigns';

const Tab = createMaterialTopTabNavigator();

function Donations() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FinalDonation" component={FinalDonation} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Campaigns" component={Campaigns} />
    </Tab.Navigator>
  );
}

export default Donations;

