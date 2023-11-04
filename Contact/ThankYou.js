import React from 'react';
import {Image,View,StyleSheet} from 'react-native';

const ThankYou =()=>{
  return(
    <View>
      <Image source={require('../Splash/Images/thankyou.png')} style={styles.img}/>
    </View>
  )
};
const styles=StyleSheet.create({
  img:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  }
})
export default ThankYou;