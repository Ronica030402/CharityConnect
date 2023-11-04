// DisplayComponent.js
import React from 'react';
import { Text, View } from 'react-native';
import NPOPage from './NpoPages/npos';

const DisplayComponent = ({ displayValue }) => {
  return (
    <View>
      {displayValue && <Text>{displayValue}</Text>}
   

    </View>
  );
};

export default DisplayComponent;
