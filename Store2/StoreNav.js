import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Store from './view';
import Product from './components/product';

const Stack = createStackNavigator();

export default function StoreNavigation() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="store" component={Store} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
