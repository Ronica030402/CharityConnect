import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import IndividualLogin from '../Logins/Individual/IndividualLoginScreen';
import IndividualRegister from '../Logins/Individual/IndividualRegisterScreen'

import  PasswordResetScreen from '../Logins/PasswordResetScreen'
import HomeScreen from '../Homescreen/Final';
import OrganizationLoginScreen from '../Logins/Organisation/OrganizationLoginScreen';
import OrganizationRegisterScreen from '../Logins/Organisation/OrganizationRegisterScreen';
import NPOLoginScreen from '../Logins/NPO/NPOLoginScreen';
import NPORegisterScreen from '../Logins/NPO/NPORegisterScreen';
import AdminLogin from '../Logins/AdminLogin/adminLogin';
import MenuPage from '../Menu/FinalMenu'
import NPOPage from '../NpoPages/npos';

import HomeSlide from '../homeSlide/splash'
import Slide1 from '../homeSlide/slide1';
import Slide2 from '../homeSlide/slide2';
import Slide3 from '../homeSlide/slide3';
import TabNav from '../Menu/Tabs';
import CampaignFinal from '../NpoPages/campaignFinal';
import MapScreen from '../Maps/Maps';
import Fullblog from '../Store2/components/fullblog';
import AdminCampaign from '../Admin/campaignFinal';
import SiyabongaAfrica from '../NpoNames/SiyabongaAfrica';
import ChildWwelfare from '../NpoNames/ChildWelfare';
import Education from '../NpoNames/Education';
import Endangered from '../NpoNames/EndangeredWildlifeTrust';
import Sustainableagriculture from '../NpoNames/SustainableAgriculture';
import Viva from '../NpoNames/VivaFoundation';
import Phambano from '../NpoNames/Phambano';
import SAME from '../NpoNames/SAME';
import GraceAnimal from '../NpoNames/GraceAnimal';
import Arts from '../NpoNames/Arts';
import PaymentPage2 from '../Store2/components/paying';

const Stack = createStackNavigator();

const AuthStack = () => {
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="HomeSlide" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="IndividualLogin" component={IndividualLogin} />
    <Stack.Screen name="IndividualRegister" component={IndividualRegister} />
    <Stack.Screen name="ForgotPassword" component={PasswordResetScreen} />
    <Stack.Screen name="OrganizationLogin" component={OrganizationLoginScreen}/>
    <Stack.Screen name="OrganizationRegister" component={OrganizationRegisterScreen}/>
    <Stack.Screen name="NPOLogin" component={NPOLoginScreen}/>
    <Stack.Screen name="AdminLogin" component={AdminLogin}/>
    <Stack.Screen name="NPORegister" component={NPORegisterScreen}/>
    <Stack.Screen name="MenuPage" component={MenuPage} />
    <Stack.Screen name="HomeSlide" component={HomeSlide} />
      <Stack.Screen name="Slide1" component={Slide1} />
      <Stack.Screen name="Slide2" component={Slide2} />
   
      <Stack.Screen name="Slide3" component={Slide3} />
      <Stack.Screen name="NPOPage" component={NPOPage} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="CampaignFinal" component={CampaignFinal} />
      <Stack.Screen name="MapScreen" component={MapScreen} />

      <Stack.Screen name="fullblog" component={Fullblog} />
      <Stack.Screen name="AdminCampaign" component={AdminCampaign} />


      <Stack.Screen name="Siyabonga Africa" component={SiyabongaAfrica} />
      <Stack.Screen name="Child Welfare South Africa" component={ChildWwelfare} />
      <Stack.Screen name="Education Africa" component={Education} />
      <Stack.Screen name="Endangered Wildlife Trust" component={Endangered} />
      <Stack.Screen name="Sustainable Agriculture" component={Sustainableagriculture} />
      <Stack.Screen name="The Viva Foundation of South Africa" component={Viva} />
      <Stack.Screen name="Phambano Technology Development Centre" component={Phambano} />
      <Stack.Screen name="SAME Foundation" component={SAME} />
      <Stack.Screen name="Grace Animal Sanctuary" component={GraceAnimal} />
      <Stack.Screen name="Arts & Culture Trust" component={Arts} />
      <Stack.Screen name="Pay" component={PaymentPage2} />
  </Stack.Navigator>

  </NavigationContainer>
  )
}


export default AuthStack