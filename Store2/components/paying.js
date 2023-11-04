import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Image1 from '../../Donation/Images/Charity.png';
import { useNavigation, useRoute } from '@react-navigation/native';


const PaymentPage2 = () => {
  
const navigation =useNavigation();

    const Checkout=()=>{
        Alert.alert("Thank You for your purchase")
        navigation.goBack()
    }
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [processingFee, setProcessingFee] = useState(false);
  
 



  return (
    <View style={styles.container}>
      

      <Image
        source={Image1}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date"
        value={expirationDate}
        onChangeText={(text) => setExpirationDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={(text) => setCVV(text)}
      />

      {/* Checkbox for Processing Fee */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setProcessingFee(!processingFee)}
        >
          {processingFee && <Icon name="check" size={20} color="black" />}
        </TouchableOpacity>
        <Text>Optionally add R17 to cover processing fee</Text>
      </View>

      {/* Donate Button */}
      <TouchableOpacity
        style={styles.donateButton}
        onPress={Checkout}
      >
        <Text style={styles.donateButtonText}>Buy</Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
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
    right: 10,
  },
  donateButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default PaymentPage2;
