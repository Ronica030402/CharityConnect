import React from 'react';
import { View, StyleSheet } from 'react-native';
import FundraisingProgressBar from './fundraise'; 

const Campaigns = () => {
  const currentAmount = 9000; 
  const goalAmount = 10000; 
  return (
    <View style={styles.container}>
      <FundraisingProgressBar currentAmount={currentAmount} goalAmount={goalAmount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default Campaigns;
