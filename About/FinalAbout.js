import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AboutUsPage from './AboutUs'

 const Stack=createNativeStackNavigator()
 
const FinalAbout=()=>{
  return(

    <Stack.Navigator  options={{ headerShown: false}}>
      <Stack.Screen  name="AboutUs" component={AboutUsPage}/>
    </Stack.Navigator>

  )
}
export default FinalAbout;