
import React,{useState} from "react";

import { View, Text, Button, TextInput,StyleSheet,Image ,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db} from ".././config/firebase"
import Eventsee from "./Eventsss";
import Donations from "../Donate/Donations";


function DonationHistory() {
    const user= "this"
  const [todos, setTodos] = React.useState([]);
  const navigation =useNavigation();
  const [data, setData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [donor, setDonor] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState('');
const [organisation, setOrganisation] = useState('');
const [donationCause, setDonationCause] = useState('');
const [amount, setAmount] = useState('');
const [totalAmount, setTotalAmount] = useState(null);
const [donationFrequency, setDonationFrequency] = useState('one-time');

  React.useEffect(() => {
    const q = query(collection(db, "data"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "data", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "data", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id));
  };
  
  
  const filteredData = todos
 

  

return (
  <ScrollView >
    <Text></Text>
 
    <ScrollView>
     

      <View>
        
        {filteredData.map((item, indx) => {
            if(item.itemName !==""){
              return(
                <View key={item.id} style={{marginVertical:20,marginHorizontal:20,borderWidth:2,borderColor:'red', padding:10}}>
                <Text>ID: {indx + 1}</Text>
                <Text>Donor: {item.donor || ''}</Text>
                <Text>Email: {item.email || ''}</Text>
                <Text>Contact: {item.contact || ''}</Text>
                <Text>Amount: {item.amount || ''}</Text>
                <Text>Donation Frequency: {item.donationFrequency || ''}</Text>
              
              </View>
            )
            }
              

            
       
        
        }
        )}
      </View>
 
      <View>
        
        {filteredData.map((item, indx) => {
            if(item.itemName !==""){
              return(
                <View key={item.id} style={{marginVertical:20,marginHorizontal:20,borderWidth:2,borderColor:'red', padding:10}}>
                <Text>ID: {indx + 1}</Text>
                <Text>Donor: {item.donor || ''}</Text>
                <Text>Email: {item.email || ''}</Text>
                <Text>Contact: {item.contact || ''}</Text>
            
                <Text>Item name: {item.itemName || ''}</Text>
                <Image
                style={{width:100,height:100}}
                source={{uri:item.file}}
                />
              
              
              </View>
            )
            }
              

            
       
        
        }
        )}
      </View>
        
       

      </ScrollView>
     
      
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  Tchimag:{
    alignItems:'center'
  },
   imgContainer:{
      marginTop:20,
      marginLeft:15,
  },
  mainContainer:{
    width:400,
    height:'100%',
    alignItems:"center",
    flex:1,
      backgroundColor:'#ddd'
  },

});

export default DonationHistory;