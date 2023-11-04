import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet ,ScrollView,TextInput} from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";


export default function BlogView({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomColor = getRandomColor();

  const handleChange = (text) => {
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      setNewTitle(text);
    }
  };

  const SeeProduct =()=>{
        navigation.navigate('fullblog',{image1:todo.pickedImage,image2:todo.pickedImage2,image3:todo.pickedImage3,title:todo.title,title2:todo.title2,title3:todo.title3,author:todo.author,title1:todo.title1,Blog:todo.BlogInfo,Blog2:todo.BlogInfo2,Blog3:todo.BlogInfo3})
  }
const navigation =useNavigation();
  return (
    <View style={{width:'100%'}}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="black" />
      </TouchableOpacity>
         <View style={styles.container}>
      <View style={[styles.box, { height: 200 , backgroundColor: randomColor }]}>
        
        <Text style={styles.heading}>{todo.title}</Text>
        <TouchableOpacity
          style={styles.readButton}
          onPress={SeeProduct}>
          <Text style={styles.buttonText}>READ NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
   
      
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  box: {
    backgroundColor:'purple',
    width:350,
    alignItems: 'center',
    justifyContent: 'flex-end', 
    flexDirection: 'row', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, 
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', 
  },
  readButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  buttonText: {
    color: '#E0B0FF',
  },
  Tchimag:{
    width:200,
    alignItems:'center'
  },
   imgContainer:{
      
      marginTop:20,
      marginLeft:15,
  },
  mainContainer:{
      backgroundColor:'#FFCCFA'
  },
  scrllimgs:{
    borderRadius:15,
    marginRight:15,
    borderWidth:1,
    borderColor:'black',
    width:150,
    height:200
    
  },
  srch:{
    margin:10,
    height:30,
     backgroundColor: '#fff',
    paddingLeft:10,
     borderRadius:15,
    borderWidth:1,
    width:200,
    alignItems:'center',
    alignSelf:'center'
  },
  otherbtn:{
    marginRight:7,
    padding:7,
    alignItems:'center',
    borderRadius:15,
    width:100,
    backgroundColor:'grey',
    color:''
  },
  headbtn:{
    marginLeft:-9,
    marginRight:7,
    padding:7,
    alignItems:'center',
    borderRadius:15,
    width:100,
    backgroundColor:'#FB23FF',
    color:''
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F6E0F4',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
  },
});
