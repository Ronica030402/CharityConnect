import React, { useRef, useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from './environment';
import Constants from "expo-constants";
import { Audio } from 'expo-av';
import * as Location from 'expo-location';
import nposData from '../NpoPages/npos.json';

export default function MapScreen({ route, navigation }) {
  const mapRef = useRef(null);
  const soundObject = useRef(new Audio.Sound());
  const isSoundLoaded = useRef(false);
  const [userLocation, setUserLocation] = useState(null);
  const [selectedNPOLocation, setSelectedNPOLocation] = useState(null);
  const [mapType, setMapType] = useState('standard'); // Initial map type is standard

  useEffect(() => {
    const loadAudio = async () => {
      try {
        await soundObject.current.loadAsync(require('./Images/aviator.mp3'));
        isSoundLoaded.current = true;
      } catch (error) {
        console.error('Failed to load sound', error);
      }
    };

    loadAudio();
  }, []);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setUserLocation({ latitude, longitude });
      } catch (error) {
        console.error('Error getting user location', error);
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    if (route.params && route.params.selectedNPO) {
      setSelectedNPOLocation({
        latitude: route.params.selectedNPO.latitude,
        longitude: route.params.selectedNPO.longitude,
      });
      zoomToMarker(route.params.selectedNPO.latitude, route.params.selectedNPO.longitude);
    }
  }, [route.params]);

  const zoomToMarker = async (latitude, longitude) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    }

    if (isSoundLoaded.current) {
      try {
        await soundObject.current.unloadAsync();
        await soundObject.current.loadAsync(require('./aviator.mp3'));
        await soundObject.current.playAsync();
      } catch (error) {
        console.error('Failed to play sound', error);
      }
    }
  };

  const openMapsAppWithDirections = () => {
    if (selectedNPOLocation) {
      const { latitude, longitude } = selectedNPOLocation;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      Linking.openURL(url);
    }
  };

  const toggleMapType = () => {
    // Toggle between 'standard' and 'satellite' map types
    if (mapType === 'standard') {
      setMapType('satellite');
    } else {
      setMapType('standard');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: -26.270760,
          longitude: 28.112268,
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}
        mapType={mapType} // Set the map type based on the state
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Your Location"
            pinColor="blue"
            onPress={() => zoomToMarker(userLocation.latitude, userLocation.longitude)}
          />
        )}

        {selectedNPOLocation && (
          <Marker
            coordinate={selectedNPOLocation}
            pinColor="red"
            onPress={() => zoomToMarker(selectedNPOLocation.latitude, selectedNPOLocation.longitude)}
          >
            <Callout style={{ width: 200 }}>
              <Text>Name: <Text style={{ color: "blue" }}>{route.params.selectedNPO.name}</Text></Text>
              <Text>Address: <Text style={{ color: "red" }}>{route.params.selectedNPO.address}</Text></Text>
              <Text>Phone: <Text style={{ color: "blue" }}>{route.params.selectedNPO.Tel}</Text></Text>
              <Text>Email: <Text style={{ color: "red" }}>{route.params.selectedNPO.Email}</Text></Text>
              <Text>Website: <Text style={{ color: "blue" }}>{route.params.selectedNPO.Website}</Text></Text>
            </Callout>
          </Marker>
        )}
      </MapView>
      <View style={styles.mapTypeButton}>
        <TouchableOpacity onPress={toggleMapType}>
          <Text>Toggle Map Type ({mapType === 'standard' ? 'Satellite' : 'Standard'})</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  map: {
    width: '100%',
    height: '100%',
  },

 
  mapTypeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 4,
  },
});