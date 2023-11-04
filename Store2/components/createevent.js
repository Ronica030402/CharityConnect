import React, { useRef, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { db } from "../../config/firebase"
import { collection, addDoc } from "firebase/firestore";
import { Picker } from '@react-native-picker/picker';

const CreateEvent = () => {
  const navigation = useNavigation();

  const [products, setProducts] = React.useState([]);
  const [quantity, setquantity] = React.useState('');
  
  const [reviews, setreviews] = React.useState("");


  const [date, setDate] = useState(null);
  const [time, setTime] = useState(''); // Initialize with a default time


const [title, settitle] = React.useState("");
const [host, setHost] = React.useState("");
const [venue, setVenue] = React.useState("");
const [tickets, setTickets] = React.useState("");
const [ticketsCost, setTicketsCost] = React.useState(null);
const [description, setDescription] = React.useState("");
 





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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" || tickets !== "" || pickedImage !== ""  || description !== "") {

      await addDoc(collection(db, "events"), {
        pickedImage,
        host,
        venue,
        description,
        date,
        tickets,
        ticketsCost,
        title,
        time,
        completed: false,
      });
      settitle("")
      setTickets("")
      setTicketsCost("")
      setVenue("")
      setHost("")
      setDescription("")
      setFileName("")
      setFileSize("")
      setSelectedDate("")
      setTickets("")
      setTicketsCost("")
      setTime("")
      setVenue("")
      setSelectedDate("")
      
    

    }
    else{
      Alert.alert("Unable to Create event")
    }
  };

 

  return (
    <ScrollView style={{ marginTop:"5%", backgroundColor: '#f3e5f5',}} >
<View style={styles.container}>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {pickedImage && <Image source={{ uri: pickedImage }} style={{ width: 200, height: 200 }} />}
    </View>
    <Image
    style={{width:100,height:100}}
    source={{uri:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Flogin-a3ece85e-fac0-4f6e-8042-8a6e7146f809/ImagePicker/f92b9486-c0b1-4114-a02b-b199852a6e33.jpeg"}}
    />
      

    
    <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Event Name"
            value={title}
            onChangeText={text => settitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Hosted by:"
            value={host}
            onChangeText={text => setHost(text)}
          
          />
          
  
          <TextInput
            style={styles.input}
            placeholder="Tickets Available"
            value={tickets}
            onChangeText={text => setTickets(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={text => setDescription(text)}
          />
           <TextInput
            style={styles.input}
            placeholder="Venue"
            value={venue}
            onChangeText={text => setVenue(text)}
          />
           <TextInput
            style={styles.input}
            placeholder="Ticket Price"
            value={ticketsCost}
            onChangeText={text => setTicketsCost(text)}
            keyboardType='numeric'
          />
           <TextInput
            style={styles.input}
            placeholder="Date e.g 20/11/2023"
            value={date}
            onChangeText={text => setDate(text)}
          
          />
           <TextInput
            style={styles.input}
            placeholder="Time"
            value={time}
            onChangeText={text => setTime(text)}
           
          />
        </View>
        
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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

export default CreateEvent;
