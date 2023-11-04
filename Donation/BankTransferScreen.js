import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Image1 from './Images/Charity.png';

const BankTransferScreen = ({ navigation }) => {
  const [bankName, setBankName] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [reference, setReference] = useState('');

  const goToPaymentConfirmationPage = () => {
    
    navigation.navigate('ThankYouPage'); 
  };

  return (
    <View style={styles.container}>
   
      <Image
        source={Image1}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Bank Name"
        value={bankName}
        onChangeText={(text) => setBankName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Holder Name"
        value={accountHolderName}
        onChangeText={(text) => setAccountHolderName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Branch Code"
        value={branchCode}
        onChangeText={(text) => setBranchCode(text)}
      />
      

      {/* Donate Button */}
       <TouchableOpacity
        style={styles.donateButton}
        onPress={goToPaymentConfirmationPage}
      >
        <Text style={styles.donateButtonText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  donateButton: {
    backgroundColor: '#E0B0FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  donateButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default BankTransferScreen;
