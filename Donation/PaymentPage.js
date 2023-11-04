import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import CardDetailsScreen from './CardDetailsScreen';
import PayPalScreen from './PayPalScreen';
import BankTransferScreen from './BankTransferScreen';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const PaymentPages = () => {
  const route = useRoute();
  const { donor, email, selectedFrequency, contact, customAmount, selectedCampaign, NpoName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}></View>
      <View style={styles.content}>
        <Tab.Navigator
          initialRouteName="CardDetails"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'CardDetails') {
                iconName = 'credit-card'; 
              } else if (route.name === 'PayPal') {
                iconName = 'paypal'; 
              } else if (route.name === 'BankTransfer') {
                iconName = 'university'; 
              }

              return <FontAwesome5 name={iconName} size={22} color={color} />; // Adjust icon size (22 here)
            },
          })}
          tabBarOptions={{
            activeTintColor: '#E0B0FF', 
            inactiveTintColor: 'gray',
            showLabel: false, // Hide labels
          }}
        >
          <Tab.Screen name="CardDetails" initialParams={{ donor, email, contact, selectedCampaign, selectedFrequency, NpoName, customAmount }} component={CardDetailsScreen} />
          <Tab.Screen name="BankTransfer" initialParams={{ donor, email, contact, selectedCampaign, selectedFrequency, NpoName, customAmount }} component={BankTransferScreen} />
          <Tab.Screen name="PayPal" initialParams={{ donor, email, contact, selectedCampaign, selectedFrequency, NpoName, customAmount }} component={PayPalScreen} />
        </Tab.Navigator>
      </View>
      <View style={styles.bottomNavigation}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topNavigation: {},
  content: {
    flex: 1,
  },
  bottomNavigation: {},
});

export default PaymentPages;
