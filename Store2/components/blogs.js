import React, { useRef, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { db } from "../../config/firebase"
import { collection, addDoc } from "firebase/firestore";
import { Picker } from '@react-native-picker/picker';

const CreateBlog = () => {
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
  const [pickedImage2, setImage2] = useState(null);
  const [pickedImage3, setImage3] = useState(null);
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

  
  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage2(result.assets[0].uri);
    }
  };

  const pickImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage3(result.assets[0].uri);
    }
  };



 
  const [author, setAuthor] = React.useState("");
  const [title1, settitle1] = React.useState("");
      const [BlogInfo, setBlogInfo] = React.useState("");
   
      const [title2, settitle2] = React.useState("");
      const [BlogInfo2, setBlogInfo2] = React.useState("");
      const [title3, settitle3] = React.useState("");
      const [BlogInfo3, setBlogInfo3] = React.useState("");
  
  
   const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState("");
 
  
    const [fileName2, setFileName2] = useState("");
    const [fileSize2, setFileSize2] = useState("");
  
    const imageInput2 = useRef();
  
  
    const [fileName3, setFileName3] = useState("");
    const [fileSize3, setFileSize3] = useState("");

    const imageInput3 = useRef();
  

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title !== "") {
  
          // Create a new Date object to get the current date and time
          const currentDate = new Date();
        
          // Extract the date, month, and year
          const day = currentDate.getDate();
          const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
          const year = currentDate.getFullYear();
        
          // Extract the hours, minutes, and seconds
          const hours = currentDate.getHours();
          const minutes = currentDate.getMinutes();
          const seconds = currentDate.getSeconds();
        
          // Format the date and time as a string
          const date = `${day}/${month}/${year}`;
          const formattedTime = `${hours}:${minutes}:${seconds}`;
         
  
        await addDoc(collection(db, "blogs"), {
          pickedImage,
          pickedImage2,
          pickedImage3,
          author,
          title,
          date,
          title1,
          title2,
          title3,
          BlogInfo,
          BlogInfo2,
          BlogInfo3,
          completed: false,
        });
        settitle("")
        setBlogInfo("")
        setPickedImage("")
        setPickedImage2("")
        setPickedImage3("")
        setAuthor("")
        settitle1("")
        settitle2("")
        settitle3("")
        setBlogInfo2("")
        setBlogInfo3("")
  
      }
    };

  return (
    <ScrollView style={{ marginVertical:"20%",height:900}} >
<View style={styles.container}>
<Text style={{fontSize:20}}>Create Blog</Text>
      
    <View className="input_container">
        <TextInput
          placeholder="Enter Blog Title"
          value={title}
          onChangeText={(text) => settitle(text)}
        />
        <TextInput
          placeholder="Blog Author"
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
        
          
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {pickedImage && <Image source={{ uri: pickedImage }} style={{ width: 200, height: 200 }} />}
    </View>
      
            
<TextInput
          placeholder="Enter Blog SubTitle"
          value={title1}
          onChangeText={(text) => settitle1(text)}
        />
        
<TextInput
style={{width:400,borderColor:'black',borderWidth:1}}
editable
multiline
numberOfLines={10}
 maxLength={1000}
        placeholder="Write blog"
        value={BlogInfo}
        onChangeText={(text) => setBlogInfo(text)}
       
/> 

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage2} />
      {pickedImage2 && <Image source={{ uri: pickedImage2 }} style={{ width: 200, height: 200 }} />}
    </View>
      
            
<TextInput
          placeholder="Enter Blog SubTitle"
          value={title2}
          onChangeText={(text) => settitle2(text)}
        />
        
<TextInput
style={{width:400,borderColor:'black',borderWidth:1}}
editable
multiline
numberOfLines={10}
 maxLength={1000}
        placeholder="Write blog"
        value={BlogInfo2}
        onChangeText={(text) => setBlogInfo2(text)}
       
/> 
 
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage3} />
      {pickedImage3 && <Image source={{ uri: pickedImage3 }} style={{ width: 200, height: 200 }} />}
    </View>
      
            
<TextInput
          placeholder="Enter Blog SubTitle3"
          value={title3}
          onChangeText={(text) => settitle3(text)}
        />
        
<TextInput
style={{width:400,borderColor:'black',borderWidth:1}}
 editable
 multiline
 numberOfLines={10}
 maxLength={1000}
        placeholder="Write blog"
        value={BlogInfo3}
        onChangeText={(text) => setBlogInfo3(text)}
       
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
    paddingLeft:30,
    marginVertical:"20%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUpload: {
    alignItems: 'center',
    paddingVertical: 20,
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
    width: '100%',
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

export default CreateBlog;
