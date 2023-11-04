import React,{useRef,useState} from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'

import { db } from "../../config/firebase";


import { collection, addDoc } from "firebase/firestore";

const CreateBlog = () => {

  
const navigation =useNavigation();
const [title, settitle] = React.useState("");
const [author, setAuthor] = React.useState("");
const [title1, settitle1] = React.useState("");
    const [BlogInfo, setBlogInfo] = React.useState("");
 
    const [title2, settitle2] = React.useState("");
    const [BlogInfo2, setBlogInfo2] = React.useState("");
    const [title3, settitle3] = React.useState("");
    const [BlogInfo3, setBlogInfo3] = React.useState("");


 const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [pickedImage, setPickedImage] = useState("");
  const imageInput = useRef();

  const [fileName2, setFileName2] = useState("");
  const [fileSize2, setFileSize2] = useState("");
  const [pickedImage2, setPickedImage2] = useState("");
  const imageInput2 = useRef();


  const [fileName3, setFileName3] = useState("");
  const [fileSize3, setFileSize3] = useState("");
  const [pickedImage3, setPickedImage3] = useState("");
  const imageInput3 = useRef();

  const [category,setCategory] = React.useState("");

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
        setPickedImage2(file.uri);
        setFileSize2((file.fileSize / 1000000).toFixed(1) + "Mb");
        setFileName2(file.fileName);
      }
    });
  };

  const handleClick3 = () => {
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
        setPickedImage3(file.uri);
        setFileSize3((file.fileSize / 1000000).toFixed(1) + "Mb");
        setFileName3(file.fileName);
      }
    });
  };


  const handleClick2 = () => {
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
    <View style={{width:400}}>
      <Button onPress={()=>navigation.navigate('blogspage')} title="blogs" />
      
   
   <form onSubmit={handleSubmit}>
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
        
          

          <View style={styles.imageUpload}>
      <TouchableOpacity
        style={styles.pickImageBtn}
        onPress={handleClick}
      >
        <Text>Choose Image</Text>
      </TouchableOpacity>
      
      <View
        style={[styles.imagePreview, { borderColor: pickedImage2 ? "black" : "grey" }]}
      >
        {pickedImage2 ? (
          <Image source={{ uri: pickedImage2 }} style={styles.previewImage} />
        ) : (
          <Text>No Image Selected</Text>
        )}
        
      </View>
      {fileName2 && (
        <Text style={styles.imageMeta}>
          {fileName2} ({fileSize2})
        </Text>
      )}
       
       <Image source={{ uri: pickedImage2 }}/>
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


<View style={styles.imageUpload}>
      <TouchableOpacity
        style={styles.pickImageBtn}
        onPress={handleClick2}
      >
        <Text>Choose Image</Text>
      </TouchableOpacity>
      
      <View
        style={[styles.imagePreview, { borderColor: pickedImage ? "black" : "grey" }]}
      >
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.previewImage} />
        ) : (
          <Text>No Image Selected</Text>
        )}
        
      </View>
      {fileName && (
        <Text style={styles.imageMeta}>
          {fileName} ({fileSize})
        </Text>
      )}
       
       <Image source={{ uri: pickedImage }}/>
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
 
          <View style={styles.imageUpload}>
      <TouchableOpacity
        style={styles.pickImageBtn}
        onPress={handleClick3}
      >
        <Text>Choose Image</Text>
      </TouchableOpacity>
      
      <View
        style={[styles.imagePreview, { borderColor: pickedImage3 ? "black" : "grey" }]}
      >
        {pickedImage3 ? (
          <Image source={{ uri: pickedImage3 }} style={styles.previewImage} />
        ) : (
          <Text>No Image Selected</Text>
        )}
        
      </View>
      {fileName3 && (
        <Text style={styles.imageMeta}>
          {fileName3} ({fileSize3})
        </Text>
      )}
       
       <Image source={{ uri: pickedImage3 }}/>
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
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
      
    </View>
  );
};

const styles = {
  imageUpload: {
    alignItems: "left",
    marginVertical: 20,

  },
  pickImageBtn: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  imageMeta: {
    marginTop: 10,
  },
};


export default CreateBlog;