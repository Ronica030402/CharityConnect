import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Image1 from './Images/clasped.jpeg';
import Image2 from './Images/giving.jpeg';
import Image3 from './Images/embrace.webp';
import Image4 from './Images/skill.webp';

const EducationBlog = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('BlogScreen');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Ionicons name="ios-arrow-back" size={32} color="black" />
      <Text style={styles.title}>ways individuals can better serve NPOs</Text>
      <Text style={styles.author}>By Ronica Kuntes</Text>
      <Text style={styles.para}>1Volunteer your time and skills</Text>
      <Image
        source={Image1} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        NPOs often rely heavily on volunteers to carry out their missions. Identify your 
        skills and interests and find an organization that aligns with them. Whether
        it's offering your expertise in marketing, web design, event planning, or 
        simply donating your time to help with day-to-day operations, your skills can be invaluable to NPOs.   
      </Text>
      <Text style={styles.para}>2.Financial support</Text>
      <Image
        source={Image2} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Donating money to NPOs is a direct and essential way to support their work.
         Regular donations, one-time gifts, or becoming a monthly donor can help sustain
          their operations and fund important projects. Consider setting up automatic donations 
          to make it easier to give consistently.
      </Text>
      <Text style={styles.para}>3.Advocacy and awareness</Text>
      <Image
        source={Image3} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        Use your voice and social influence to raise awareness about the causes and issues
         that matter to the NPO you support. Share their messages on social media, attend 
         their events, and encourage others to get involved. Advocacy can help NPOs reach
          a broader audience and gain support.
      </Text>
      <Text style={styles.para}>4.Board or committee membership</Text>
      <Image
        source={Image4} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.paragraph}>
        If you have relevant skills and experience, consider joining the board 
        of directors or a committee of an NPO. These positions often involve 
        strategic decision-making, governance, and oversight. Your expertise 
        can help the organization make better-informed decisions.
      </Text>
      <Text >10 DAYS AGO |8 MIN READ </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#FFBF00"
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  para:{
    fontWeight:"bold"
  }
});
export default EducationBlog;
