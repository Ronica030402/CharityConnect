import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import FinalAbout from '../About/FinalAbout';
import TabNav from '../Menu/Tabs';
import BlogScreen from '../Blogs/FinalBlog';
import SiyabongaAfrica from '../NpoNames/SiyabongaAfrica'
import FinalSettings from '../Settings/FinalSettings'

const Drawer = createDrawerNavigator();

const SiyabongaDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SiyabongaAfrica"
      screenOptions={{ headerShown: false }}
     
    >
      <Drawer.Screen
        name="AboutUs"
        component={FinalAbout}
        options={{ drawerLabel: 'About Us' }}
      />
      <Drawer.Screen
        name="TabNav"
        component={TabNav}
        options={{ drawerLabel: 'Donations' }}
      />
      <Drawer.Screen
        name="SiyabongaAfrica"
        component={SiyabongaAfrica}
        options={{ drawerLabel: 'About NPO' }}
      />
      <Drawer.Screen
        name="Blogs"
        component={BlogScreen}
        options={{ drawerLabel: 'Blogs' }}
      />
      <Drawer.Screen
        name="Settings"
        component={FinalSettings}
        options={{ drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};

export default SiyabongaDrawer;