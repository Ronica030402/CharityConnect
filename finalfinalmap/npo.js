import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import nposData from '../NpoPages/npos.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NPOPage = () => {
  const navigation = useNavigation();
  const [selectedNPO, setSelectedNPO] = useState(null);

  const handleNPO = (npo) => {
    setSelectedNPO(npo.name);

    switch (npo.name) {
      case 'Siyabonga Africa':
        navigation.navigate('SiyabongaDrawer');
        break;
      case 'Endangered Wildlife Trust':
        navigation.navigate('EndangeredDrawer');
        break;
      case 'Child Welfare South Africa':
        navigation.navigate('ChildDrawer');
        break;
      case 'Sustainable Agriculture':
        navigation.navigate('SustainableDrawer');
        break;
      case 'The Viva Foundation of South Africa':
        navigation.navigate('VivaDrawer');
        break;
      case 'Grace Animal Sanctuary':
        navigation.navigate('GraceDrawer');
        break;
      case 'SAME Foundation':
        navigation.navigate('SameDrawer');
        break;
      case 'Arts & Culture Trust':
        navigation.navigate('ArtsDrawer');
        break;
      case 'Phambano Technology Development Centre':
        navigation.navigate('PhambanoDrawer');
        break;
      case 'Education Africa':
        navigation.navigate('EducationDrawer');
        break;
      default:
        // Handle other NPOs or add a fallback here
        break;
    }
  };

  const handleNPOInfo = (npo) => {
    setSelectedNPO(npo.name);

    switch (npo.name) {
      case 'Siyabonga Africa':
        navigation.navigate('SiyabongaDrawer');
        break;
      case 'Endangered Wildlife Trust':
        navigation.navigate('EndangeredDrawer');
        break;
      case 'Child Welfare South Africa':
        navigation.navigate('ChildDrawer');
        break;
      case 'Sustainable Agriculture':
        navigation.navigate('SustainableDrawer');
        break;
      case 'The Viva Foundation of South Africa':
        navigation.navigate('VivaDrawer');
        break;
      case 'Grace Animal Sanctuary':
        navigation.navigate('GraceDrawer');
        break;
      case 'SAME Foundation':
        navigation.navigate('SameDrawer');
        break;
      case 'Arts & Culture Trust':
        navigation.navigate('ArtsDrawer');
        break;
      case 'Phambano Technology Development Centre':
        navigation.navigate('PhambanoDrawer');
        break;
      case 'Education Africa':
        navigation.navigate('EducationDrawer');
        break;
      default:
        // Handle other NPOs or add a fallback here
        break;
    }
  };

  
  const handleLocationClick = (npo) => {
  if (npo && npo.latitude && npo.longitude) {
    navigation.navigate('MapScreen', { selectedNPO: npo });
  }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Choose An NPO To Donate Towards:</Text>
        <FlatList
          data={nposData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.npoItem} onPress={() => handleNPO(item)}>
              <Text style={styles.npoName}>{item.name}</Text>
              <Text style={styles.npoMission}>{item.mission}</Text>
              <TouchableOpacity style={styles.location} onPress={() => handleLocationClick(item)}>
              <Text style={{color: "blue"}}>NPO Location</Text>
                <MaterialIcons name="location-on" size={40} color="green" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
        {selectedNPO && (
          <View style={styles.confirmationModal}>
            <Text>You are choosing :</Text>
            <Text style={styles.selectedNPOName}>{selectedNPO}</Text>
            <Text>Thank you!</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  npoItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0B0FF',
    borderRadius: 5,
  },
  npoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  npoMission: {
    fontSize: 16,
  },
  confirmationModal: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  selectedNPOName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    marginVertical: 5,
   padding: 4,
    borderWidth: 0.2, 
    
  },
});

export default NPOPage;

