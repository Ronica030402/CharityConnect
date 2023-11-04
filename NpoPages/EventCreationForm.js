import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function EventCreationForm({ route }) {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [eventTime, setEventTime] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [attendees, setAttendees] = useState(0); // Initialize attendees to 0
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const { events: initialEvents } = route.params || {};

  const [events, setEvents] = useState(initialEvents || []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setEventDate(date);
    hideDatePicker();
  };

  const handleImageUpload = () => {
    const options = {
      title: 'Select Event Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });
  };

  const saveEvent = () => {
    // Validate that attendees is a number
    if (isNaN(attendees)) {
      alert('Please enter a valid number for attendees.');
      return;
    }

    const newEvent = {
      title: eventTitle,
      description: eventDescription,
      date: eventDate.toDateString(),
      time: eventTime,
      ticketPrice: ticketPrice,
      attendees: attendees,
      image: selectedImage,
    };

    setEvents([newEvent, ...events]);
    resetForm();

    // Navigate to NPOEventList after saving the event
    navigation.navigate('NPOEventList', { events: [newEvent, ...events] });
  };

  const resetForm = () => {
    setEventTitle('');
    setEventDescription('');
    setEventDate(new Date());
    setEventTime('');
    setTicketPrice('');
    setAttendees(0);
    setSelectedImage(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Event Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEventTitle(text)}
          value={eventTitle}
        />

        <Text>Event Description:</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline
          onChangeText={(text) => setEventDescription(text)}
          value={eventDescription}
        />

        <Text>Event Date:</Text>
        <Button
          title="Select Date"
          onPress={showDatePicker}
          color="#9867C5"
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <Text>{eventDate.toDateString()}</Text>

        <Text>Event Time:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEventTime(text)}
          value={eventTime}
        />

        <Text>Ticket Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTicketPrice(text)}
          value={ticketPrice}
          keyboardType="numeric"
        />

        <Text>Number of Attendees:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAttendees(text)}
          value={attendees.toString()} // Ensure it's displayed as a string
          keyboardType="numeric"
        />

        <Text>Event Image Upload:</Text>
        {selectedImage && (
          <Image
            source={selectedImage}
            style={styles.selectedImage}
            resizeMode="cover"
          />
        )}
        <Button
          title="Upload Image"
          onPress={handleImageUpload}
          color="#9867C5"
        />
        <View style={styles.space} />
        <Button
          title="Save Event"
          onPress={saveEvent}
          color="#9867C5"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 50,
  },
  innerContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  space: {
    marginBottom: 20,
  },
});




