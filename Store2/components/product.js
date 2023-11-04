import React,{useRef,useState} from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';



import { collection, addDoc } from "firebase/firestore";

const Product = () => {
const navigation=useNavigation();
    const route = useRoute();
    const { image } = route.params;
    const { name } = route.params;
    const { price } = route.params;
    const { description } = route.params;
    const { reviews } = route.params;
    const { available } = route.params;
 
  return (
    <View style={styles.container}>
        <Image style={styles.image}  source={{uri:image}}/>
        <Text style={styles.info}>
            Name : {name}
        </Text>
        <Text style={styles.info}>
           Price : {price}
        </Text>
        <Text style={styles.info}>
           Description : {description}
        </Text>
        <Text style={styles.info}>
          Available :  {available}
        </Text>
        <Button onPress={()=>navigation.navigate("Pay")} title="Check Out" color='#8a2be2'/>
        <Text style={styles.reviews}>
            Reviews :{reviews}
        </Text>
      
    </View>
  );
};


const styles = {
  container: {
      width: 400,
      height: '100%',
      marginHorizontal:5,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",//'#f3e5f5', // Light purple background
      borderRadius: 10,
      padding: 20,
  },
  image: {
      width: 300,
      height: 300,
      borderRadius: 10,
      marginBottom: 10,
  },
  info: {
      fontSize: 18,
      color: 'black',//'#8a2be2', // Dark purple text color
      marginBottom: 10,
  },
  reviews: {
      fontSize: 16,
      color: '#8a2be2', 
      fontStyle: 'italic',
      marginTop: 10,
  },
};


export default Product;