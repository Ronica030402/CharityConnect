import React, { useState, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const center = {
  latitude: 33.6348792,
  longitude: -117.7426695,
};

const Maps = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);

  const panTo = useCallback(async (lat, lng) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  const locateUser = useCallback(async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});
      panTo(location.coords.latitude, location.coords.longitude);
    }
  }, [panTo]);

  return (
    <View style={{ flex: 1 }}>
      <Text>Charity Connect</Text>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSelectedPlace={setSelectedPlace}
        panTo={panTo}
      />
      <Locate locateUser={locateUser} />
      <MapView
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={{
          latitude: center.latitude,
          longitude: center.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace.lat,
              longitude: selectedPlace.lng,
            }}
            title={selectedPlace.address}
          />
        )}
      </MapView>
    </View>
  );
};

const Locate = ({ locateUser }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'purple', width: 90, height: 30, color: 'white' }}
      onPress={locateUser}
    >
      <Text>AutoLocate</Text>
    </TouchableOpacity>
  );
};

const Search = ({ searchValue, setSearchValue, setSelectedPlace, panTo }) => {
  const handleSearch = async (data, details) => {
    try {
      setSearchValue(data.description);
      setSelectedPlace({
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
        address: data.description,
      });
      panTo(details.geometry.location.lat, details.geometry.location.lng);
    } catch (error) {
      console.log('error!');
    }
  };

  return (
    <View>
      <TextInput
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        placeholder="Enter an address"
      />
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => handleSearch(data, details)}
        fetchDetails={true}
        query={{
          key: 'YOUR_GOOGLE_PLACES_API_KEY',
          language: 'en',
        }}
      />
    </View>
  );
};

export default Maps;
