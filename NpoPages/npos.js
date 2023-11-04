import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import nposData from './npos.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NPOPage = () => {
  const navigation = useNavigation();
  const [selectedNPO, setSelectedNPO] = useState(null);

  const handleNPO = (npo) => {
    setSelectedNPO(npo.name);

    switch (npo.name) {
      case 'Siyabonga Africa':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Endangered Wildlife Trust':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Child Welfare South Africa':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Sustainable Agriculture':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'The Viva Foundation of South Africa':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Grace Animal Sanctuary':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'SAME Foundation':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Arts & Culture Trust':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Phambano Technology Development Centre':
        navigation.navigate('Donation',{  NpoName: npo.name});
        break;
      case 'Education Africa':
        navigation.navigate('Donation',{  NpoName: npo.name});
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
        navigation.navigate('Siyabonga Africa',{  NpoName: npo.name});
        break;
      case 'Endangered Wildlife Trust':
        navigation.navigate('Endangered Wildlife Trust',{  NpoName: npo.name});
        break;
      case 'Child Welfare South Africa':
        navigation.navigate('Child Welfare South Africa',{  NpoName: npo.name});
        break;
      case 'Sustainable Agriculture':
        navigation.navigate('Sustainable Agriculture',{  NpoName: npo.name});
        break;
      case 'The Viva Foundation of South Africa':
        navigation.navigate('The Viva Foundation of South Africa',{  NpoName: npo.name});
        break;
      case 'Grace Animal Sanctuary':
        navigation.navigate('Grace Animal Sanctuary',{  NpoName: npo.name});
        break;
      case 'SAME Foundation':
        navigation.navigate('SAME Foundation',{  NpoName: npo.name});
        break;
      case 'Arts & Culture Trust':
        navigation.navigate('Arts & Culture Trust',{  NpoName: npo.name});
        break;
      case 'Phambano Technology Development Centre':
        navigation.navigate('Phambano Technology Development Centre',{  NpoName: npo.name});
        break;
      case 'Education Africa':
        navigation.navigate('Education Africa',{  NpoName: npo.name});
        break;
      default:
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
        <Text style={styles.header}>Choose An NPO To Donate To:</Text>
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

              <TouchableOpacity onPress={() => handleNPOInfo(item)}>
                <Text style={{textDecorationLine:'underline',color:'blue',fontSize:20,}}>Read More</Text>
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

