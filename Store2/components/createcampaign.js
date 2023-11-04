import React,{useRef,useState} from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'

import DatePicker from 'react-datepicker';
import { db } from "../firebase2";
//import 'react-datepicker/dist/react-datepicker.css';
//import TimePicker from 'react-time-picker';
//import './time.css'; // Import your custom CSS file
import { collection, addDoc } from "firebase/firestore";

const CreateCampaign = () => {


//   const [selectedDate, setSelectedDate] = useState(null);
//   const [time, setTime] = useState('12:00'); // Initialize with a default time

//   const handleTimeChange = (newTime) => {
//     setTime(newTime);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };
  

const [title, settitle] = React.useState("");
const [createdBy, setCreatedBy] = React.useState("");
const [description, setDescription] = React.useState("");
 


const navigation =useNavigation();


 const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [pickedImage, setPickedImage] = useState("");
  const imageInput = useRef();



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {

      await addDoc(collection(db, "campaign"), {
        pickedImage,
        createdBy,
        description,
        //selectedDate,
        title,
        //time,
        completed: false,
      });
      settitle("")
      setPickedImage("")
      setCreatedBy("")
      setDescription("")
      setFileName("")
      setFileSize("")
      //setSelectedDate("")
      //setTime("")
      //setSelectedDate("")
      
    

    }
  };

  const handleClick = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 800,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        // User canceled the image selection
      } else if (response.error) {
        // Handle errors here
      } else {
        const file = response.assets[0];
        setPickedImage(file.uri);
        setFileSize((file.fileSize / 1000000).toFixed(1) + "Mb");
        setFileName(file.fileName);
      }
    });
  };




  return (
    <View style={styles.container}>
      <Button onPress={()=>navigation.navigate('events')} title="campaigns" />
      
   
   <form onSubmit={handleSubmit} style ={styles.formContainer}>
      <View className="input_container">
      <TextInput
          style ={styles.input}
          placeholder="Name of Campaign"
          value={title}
          onChangeText={(text) => settitle(text)}
        />
        <TextInput
          style ={styles.input}
          placeholder="Created By/On Behalf Of "
          value={createdBy}
          onChangeText={(text) => setHost(text)}
        />
  
         <TextInput
          style ={styles.input}
          placeholder="Campaign Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
          

          <View style={styles.imageUpload}>
      <TouchableOpacity
        style={styles.pickImageBtn}
        onPress={handleClick}
      >
        <Text style={styles.pickImageText}>Choose Image</Text>
      </TouchableOpacity>
      
      <View
        style={[styles.imagePreview, { borderColor: pickedImage ? "#8a2be2" : "grey" }]}
      >
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.previewImage} />
        ) : (
          <Text style={styles.pickImageText} >No Image Selected</Text>
        )}
        
      </View>

      {fileName && (
        <Text style={styles.imageMeta}>
          {fileName} ({fileSize})
        </Text>
      )}
       
       <Image source={{ uri: pickedImage }} style={styles.previewImage}/>
    </View>


 
  
 
 
</View>
{/* <View>
      <DatePicker
      value={selectedDate != null?selectedDate:"select date"}
        style={styles.dateContainer}
        selected={selectedDate}
        onChange={handleDateChange}
        isClearable
        showYearDropdown
        dateFormat="yyyy-MM-dd"
      />
    </View>

    <View className="time-picker-container">
      <h1>Selected Time: {time}</h1>
      <TimePicker
        style={styles.timeContainer}
        onChange={handleTimeChange}
        value={time}
        disableClock={false}
        className="custom-time-picker" // Apply your custom class
      />
    </View> */}

    <TouchableOpacity style={styles.addButton}>Donate</TouchableOpacity>

        {/*<button style={styles.addButton}>Add</button>*/}
      
    </form>
      
    </View>
  );
};

const styles = {
  container: {
    width: 400,
    alignItems: 'center',
    backgroundColor: '#f3e5f5', // Light purple background
    padding: 20,
  },
  formContainer: {
    width: '90%',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    borderColor: '#8a2be2', // Dark purple border
    borderWidth: 1,
  },
  imageUpload: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pickImageBtn: {
    backgroundColor: '#ba68c8', // Light purple button
    padding: 12,
    borderRadius: 8,
  },
  pickImageText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#8a2be2', // Dark purple border
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  imageMeta: {
    marginTop: 10,
    color: '#8a2be2', // Dark purple text color
  },
  dateContainer: {
    marginVertical: 20,
  },
  timeContainer: {
    marginVertical: 20,
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
};


export default CreateCampaign;