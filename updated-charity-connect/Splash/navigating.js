import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const Navigating = ({ active, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.dot,
          { backgroundColor: active ? 'blue' : 'gray' },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Navigating;
