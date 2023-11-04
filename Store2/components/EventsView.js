
import React from "react";

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
import { db } from "../firebase2";
import Eventsee from "./Events";

function EventsPage() {
  const [todos, setTodos] = React.useState([]);
  const navigation =useNavigation();
  
  React.useEffect(() => {
    const q = query(collection(db, "events"));
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
    await updateDoc(doc(db, "events", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "events", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "events", id));
  };
  
  
  

return (
  <View style={styles.mainContainer} >
     <View style={{flexDirection:'column',borderWidth:1,borderColor:'black'}}>
   
            <Text style={{fontSize:40, fontWeight: 'Bold', backgroundColor: 'gray', marginTop:20, alignItems:'center', justfiyContent:'center'}}>Events</Text>
            
            {todos.map((todo)=>{
         
                return(
                  <Eventsee 
                  style={{width:'100%',height:200,alignItems:"center",margin:20,backgroundColor:'#ddd',alignItems:"center",}}
                  key={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
                )
              
         })
      }
    </View>
     
      
  </View>
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

export default EventsPage;