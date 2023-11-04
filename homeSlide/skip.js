import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Skipping = ({ showSkip }) => {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate('HomeScreen'); 
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {showSkip && (
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  skipText: {
    fontSize: 15,
    color: 'black', 
    marginLeft: 250,
    marginVertical:100
  },
});

export default Skipping;
