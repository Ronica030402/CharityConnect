import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSlide from './homeSlide';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import HomeScreen from '../Logins/Final'
import OrganizationLoginScreen from '../Logins/OrganizationLoginScreen';
import OrganizationRegisterScreen from '../Logins/OrganizationRegisterScreen';
import NPOLoginScreen from '../Logins/NPOLoginScreen';
import NPORegisterScreen from '../Logins/NPORegisterScreen';
import IndividualLoginScreen from '../Logins/IndividualLoginScreen';
import IndividualRegisterScreen from '../Logins/IndividualRegisterScreen';
import MenuPage from '../Menu/FinalMenu';
import BlogScreen from '../Blogs/FinalBlog';
import CropProductionBlog from '../Blogs/cropProductionBlog';
import FoodWastageBlog from '../Blogs/FoodWastageBlog';
import Maps from '../Maps/Maps';

const Stack = createStackNavigator();

const App = () => {
  return (
    //<SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeSlide" screenOptions={{ headerShown: false }}>  
        <Stack.Screen name="HomeSlide" component={HomeSlide} />
        <Stack.Screen name="Slide1" component={Slide1} />
        <Stack.Screen name="Slide2" component={Slide2} />
        <Stack.Screen name="Slide3" component={Slide3} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrganizationLogin" component={OrganizationLoginScreen} />
        <Stack.Screen name="OrganizationRegister" component={OrganizationRegisterScreen} />
        <Stack.Screen name="NPOLogin" component={NPOLoginScreen} />
        <Stack.Screen name="NPORegister" component={NPORegisterScreen} />
        <Stack.Screen name="IndividualLogin" component={IndividualLoginScreen} />
        <Stack.Screen name="IndividualRegister" component={IndividualRegisterScreen} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="BlogScreen" component={BlogScreen}/>
        <Stack.Screen name= "CropProductionBlog" component={CropProductionBlog}/>
        <Stack.Screen name= "FoodWastageBlog" component={FoodWastageBlog}/>
        <Stack.Screen name= "Maps" component={Maps}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    //</SafeAreaView>
  );
};

export default App;