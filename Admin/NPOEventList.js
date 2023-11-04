import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NPOEventList = ({ route }) => {
  const { events } = route.params || {};
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Time: {item.time}</Text>
      <Text>Ticket Price: {item.ticketPrice}</Text>
      <Text>Number of Attendees: {item.attendees}</Text>
      {item.image && <Image source={item.image} style={styles.eventImage} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
      <Button
        title="Add Another Event"
        onPress={() => navigation.navigate('EventCreationForm', { events })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 50,
  },
  eventItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0B0FF',
    borderRadius: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventImage: {
    width: 200,
    height: 200,
  },
});

export default NPOEventList;









