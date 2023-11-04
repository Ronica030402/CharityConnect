import React, { useRef, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { db } from "../../config/firebase"
import { collection, addDoc } from "firebase/firestore";
import { Picker } from '@react-native-picker/picker';



const ProductsScreen = () => {
  const navigation = useNavigation();

  const [products, setProducts] = React.useState([]);
  const [quantity, setquantity] = React.useState('');
  const [description, setdescription] = React.useState('');
  const [reviews, setreviews] = React.useState("");


  const imageInput = useRef();

  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [pickedImage, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (Name !== "" || Price !== "" || pickedImage !== "" || quantity !== "" || category !== "" || description !== "") {
      await addDoc(collection(db, "products"), {
        Name,
        Price,
        pickedImage,
        category,
        quantity,
        description,
        reviews,
        completed: false,
      });
      Alert.alert("Item Successfully added to the store")
      setName("");
      setPrice("");
      setImage("");
      setCategory("");
      setquantity("");
      setdescription("");
      setreviews("");
    }
    else{
      Alert.alert("Input proper item values")

    }
  };

 

  return (
    <View style={styles.container}>

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {pickedImage && <Image source={{ uri: pickedImage }} style={{ width: 200, height: 200 }} />}
    </View>
      

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Product name"
          value={Name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Product Price"
          value={Price}
          onChangeText={text => setPrice(text)}
          keyboardType="numeric"
        />
         <Text>Donation Frequency:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Traditional attires" value="Traditional attires" />
          <Picker.Item label="Clay work" value="Clay work" />
          <Picker.Item label="Wood work" value="Wood work" />
          <Picker.Item label="Toys" value="Toys" />
          
          <Picker.Item label="Accessories" value="Accessories" />
          <Picker.Item label="Craft work" value="Craft work" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={quantity}
          onChangeText={text => setquantity(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={text => setdescription(text)}
        />
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 20,
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
});

export default ProductsScreen;
