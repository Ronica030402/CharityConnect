import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView } from 'react-native';

const SiyabongaAfrica = ({ navigation }) => {
  const handlebtn = () => {
    navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./Images/siyabongaAfrica.png')} style={styles.logo} />
          <TouchableOpacity style={styles.btn} onPress={handlebtn}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.con2}>
          <Text style={styles.heading}>AN END TO POVERTY</Text>
          <View style={styles.rowContainer}>
            <View style={styles.textColumn}>
              <Text style={styles.para1}>Siyabonga Africa is a registered South African Non Profit Organisation (000-394-NPO) and Public Beneficiary Organisation (PBO 930010666), committed to eradicating poverty and bringing about positive change for the people of our country. We are also a certified B-BBEE enterprise.</Text>
              <Text style={styles.para2}>Although we provide food, blankets, clothing and basic necessities to those who are destitute, our ultimate aim is to create environments and opportunities that enable people to find their way out of poverty. Over the past 30 years, we have developed a variety of programmes to uplift a diversity of people – from the most vulnerable to those who have the potential but lack the opportunity to become self-supporting.</Text>
            </View>
            <Image source={require('./Images/SiyabongaAfrica2.jpg')} style={styles.pic} />
          </View>
          <Image source={require('./Images/siyabonga3.jpg')} style={styles.pic2} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#d8bfd8',
    marginVertical:20,
    marginHorizontal:30
  },
  logo: {
    width: 170,
    height: 100,
  },
  header: {
    flexDirection: 'row',
  },
  btn: {
    marginVertical: 50,
    marginHorizontal: 30,
    backgroundColor: '#9370db',
    width: 90,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#9370db',
    fontFamily: 'algerain',
  },
  con2: {
    marginVertical: 15,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textColumn: {
    flex: 1,
  },
  para1: {
    marginVertical: 5,
  },
  para2: {
    marginVertical: 7,
  },
  pic: {
    width: 150,
    height: 200,
  },
  pic2: {
    width: '100%',
    height: 150,
  },
});

export default SiyabongaAfrica;
