import React, { useState,useEffect,useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView,FlatList,Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import ProductsScreen from './testdonate';
import { db } from ".././config/firebase";
import { useRoute } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore";
const DonationPage = ({ navigation }) => {

  const route = useRoute();
  const { userName } = route.params;

  const { userEmail } = route.params;
  
  const { NpoName } = route.params;

  const [selectedFrequency, setSelectedFrequency] = useState('once-off');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [customAmount, setCustomAmount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const [products, setProducts] = React.useState([]);
  const [quantity, setquantity] = React.useState('');
  const [description, setdescription] = React.useState('');
  const [reviews, setreviews] = React.useState("");
  const [donateerror, seterror] = React.useState("");


  const imageInput = useRef();
  const [itemName, setItemName] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [pickedImage, setImage] = useState(null);

const donor = userName
const email = userEmail

  const handleSubmit = async () => {
    setSelectedOrganization(NpoName)
    if (customAmount !== 0) {
      await addDoc(collection(db, "data"), {
        donor,
        email,
        contact,
        customAmount,
        file,
        selectedCampaign,
        selectedFrequency,
        selectedOrganization,

     
      });
      setCustomAmount(0)
      Alert.alert('Donation Unsuccessfull enter an amount you want to donate');
    
    }
    else{
      Alert.alert('Donation Unsuccessfull enter an amount you want to donate');
    }
  };

    const user = "lindelanixaba@gmail.com"
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [contact, setContact] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [donationCause, setDonationCause] = useState('');
    const [amount, setAmount] = useState(0);
    const [totalAmount, settotalAmount] = useState(null); // Initialize the amount to 0
    const [donationFrequency, setDonationFrequency] = useState('one-time');
  

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permission to upload images.');
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setFile(result.uri);
        setError(null);
      }
    }
  };

  const goToUserInfoPage = () => {
    navigation.navigate('UserInfo');
  };

  const handleNextButton = () => {
    // Handle the logic for the "Next" button here, e.g., navigate to the next screen.
    goToUserInfoPage(); // You can replace this with your logic.
  };

  const campaignOptions = ['Campaign 1', 'Campaign 2', 'Campaign 3'];
  const organizationOptions = ['Organization 1', 'Organization 2', 'Organization 3'];

  const handleAmountButtonClick = (amount) => {
    setCustomAmount(amount);
  };

  return (
    <ScrollView style={styles.container}>

      <View>
        <Text style={styles.heading}>Make A Donation to: {NpoName} </Text>
  
      </View>
      <TextInput style={{borderColor:'purple',borderWidth:1,paddingLeft:8,marginTop:5}}
        placeholder="Your Name"
        value={userName}
        onChangeText={(text) => setDonor(text)}
      />
      <TextInput
      style={{borderColor:'purple',borderWidth:1,paddingLeft:8,marginTop:5}}
        placeholder="Your Email"
        value={userEmail}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
      style={{borderColor:'purple',borderWidth:1,paddingLeft:8,marginTop:5,marginBottom:10}}
        placeholder="Contact"
        value={contact}
        onChangeText={(text) => setContact(text)}
      />
      <View style={styles.squareContainer}>
        <TouchableOpacity style={styles.square} onPress={() => setCustomAmount('50')}>
          <Text style={styles.squareText}>R50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => setCustomAmount('100')}>
          <Text style={styles.squareText}>R100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square} onPress={() => setCustomAmount('150')}>
          <Text style={styles.squareText}>R150</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.customAmount}
        placeholder="Enter custom amount"
        onChangeText={(text) => setCustomAmount(text)}
        value={customAmount}
      />

      <View style={styles.categoryContainer}>
        <Text>Donation Frequency:</Text>
        <Picker
          selectedValue={selectedFrequency}
          onValueChange={(itemValue) => setSelectedFrequency(itemValue)}
        >
          <Picker.Item label="Once Off" value="once-off" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker>

        <Text>Direct Donation Toward:</Text>
        <Picker
          selectedValue={selectedCampaign}
          onValueChange={(itemValue) => setSelectedCampaign(itemValue)}
        >
          {campaignOptions.map((option, index) => (
            <Picker.Item label={option} value={option} key={index} />
          ))}
        </Picker>
      
        <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
       
      </View>
    

      <Text style={styles.wantToDonateText}>Want to donate an item</Text>
      <View style={styles.container}>
        <Text style={styles.header}>Add Image:</Text>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Choose Image</Text>
        </TouchableOpacity>
        {file ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: file }} style={styles.image} />
          </View>
        ) : (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>
     
      <View style={styles.container}>
      <TextInput
        style={styles.customAmount}
        placeholder="Enter item name"
        onChangeText={(text) => setCustomAmount(text)}
        value={customAmount}
      />

<TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
  <Text style={styles.addButtonText}>Donate</Text>
</TouchableOpacity>
</View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUpload: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pickImageBtn: {
    backgroundColor: '#ba68c8',
    padding: 10,
    borderRadius: 5,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  noImageText: {
    color: '#8a2be2',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#8a2be2', // Dark purple button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  squareContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  square: {
    flex: 1,
    height: 80,
    backgroundColor: '#E0B0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  squareText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  customAmount: {
    height: 40,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#E0B0FF',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#E0B0FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
  wantToDonateText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#E0B0FF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    height: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 16,
  },
});

export default DonationPage;

