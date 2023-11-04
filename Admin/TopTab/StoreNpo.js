
import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Store from '../../Store2/view';
import ProductsScreen from '../../Store2/components/store';

const Tab = createMaterialTopTabNavigator();

export default function NPOstore() {
  return (
 
      <Tab.Navigator style={{marginTop:"10%"}}>
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Add To Store" component={ProductsScreen} />

      </Tab.Navigator>
  
  );
}
