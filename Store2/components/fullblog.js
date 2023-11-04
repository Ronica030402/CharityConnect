import React,{useRef,useState} from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image ,TouchableOpacity,ScrollView} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';

import { db } from "../../config/firebase";


import { collection, addDoc } from "firebase/firestore";

const Fullblog = () => {

    const route = useRoute();
    const { image1 } = route.params;
    const { image2 } = route.params;
    const { image3 } = route.params;
    const { title } = route.params;
    const { title1 } = route.params;
    const { title2 } = route.params;
    const { title3 } = route.params;
    const { author } = route.params;
    const { Blog } = route.params;
    const { Blog2 } = route.params;
    const { Blog3 } = route.params;
 
  return (
    <ScrollView style={{width:400,height:'100%',marginHorizontal:20,marginVertical:40,}}>
       
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>By :{author}</Text>
      <Text style={styles.para}>{title1}</Text>
      <Image style={{width:300,height:300}} source={{uri:image1}}/>
      <Text style={styles.paragraph}>
        {Blog}
      </Text>
      <Text style={styles.para}>{title2}</Text>
      <Image style={{width:300,height:300}} source={{uri:image2}}/>
      <Text style={styles.paragraph}>
       {Blog2}
      </Text>
      <Text style={styles.para}>{title3} </Text>
      <Image style={{width:300,height:300}} source={{uri:image3}}/>
      <Text style={styles.paragraph}>
        {Blog3}
      </Text>
   
      
    </ScrollView>
  );
};

const styles = {
    container: {
        padding: 16,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"green"
      },
      author: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
      },
      paragraph: {
        fontSize: 16,
        marginBottom: 10,
        
      },
      para:{
        fontWeight:"bold"
      },
  imageUpload: {
    alignItems: "center",
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


export default Fullblog;