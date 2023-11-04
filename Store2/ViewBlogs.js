
import React from "react";
import BlogView from "./components/blogView";
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
import { db } from ".././config/firebase";

function BlogsPage() {
  const [todos, setTodos] = React.useState([]);
  const navigation =useNavigation();
  
  React.useEffect(() => {
    const q = query(collection(db, "blogs"));
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
    await updateDoc(doc(db, "blogs", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "blogs", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
  };
  
  
  

return (
  <ScrollView style={styles.mainContainer} >
     <View style={{flexDirection:'column'}}>
   
            
            
            {todos.map((todo)=>{
         
                return(
                  <BlogView
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
    flex:1,
      backgroundColor:'#FFCCFA'
  },

});

export default BlogsPage;