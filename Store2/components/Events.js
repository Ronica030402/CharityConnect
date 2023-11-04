import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet ,ScrollView,TextInput} from "react-native";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigation } from "@react-navigation/native";
import { TextRotateUp } from "@mui/icons-material";

export default function Eventsee({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (text) => {
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      setNewTitle(text);
    }
  };

  const SeeProduct =()=>{
        navigation.navigate('product',{image:todo.pickedImage,name:todo.Name,price:todo.Price,description:todo.description,available:todo.quantity,reviews:todo.reviews})
  }
const navigation =useNavigation();
  return (
    <View style= {{paddingVertical:5,borderWidth:1,borderColor:'grey', marginVertical:20}}>
             <View style={styles.Tchimag}>
            <TouchableOpacity 
           >
            <Image
              style={styles.scrllimgs}
              source={{ uri: todo.pickedImage }}
              
              />
            </TouchableOpacity>     
        <Text style={{fontSize:'15',fontWeight:'bold'}}>
         {todo.title}
        </Text>
        <Text>
          Hosted By :{todo.host}
        </Text>
        <Text>
         {todo.description}
        </Text>
        <Text>
          Available Tickets :{todo.tickets}
        </Text>
        <Text>
          Ticket Cost :{todo.ticketsCost}
        </Text>
        <Text>
          venue :{todo.venue}
        </Text>
        <Text>
          Date :{todo.date}
        </Text>
        <Text>
          Time :{todo.time}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Pay")} style={{backgroundColor:'purple',height:50,width:200,alignItems:"center",justifyContent:'center',borderRadius:10}}>
          <Text style={{color:'white'}}>Buy Ticket</Text>
        </TouchableOpacity>
              </View>  
        
         
    
    
   
      
     
    </View>
  );
}


const styles = StyleSheet.create({
  Tchimag:{
    backgroundColor:'#ddd',
    alignItems:'center',
    width:'100%',
    paddingHorizontal:20,
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
    borderRadius:'50%',
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
