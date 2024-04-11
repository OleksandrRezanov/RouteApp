import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const CurrentLocation: React.FC = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.15,
    longitudeDelta: 0.121,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.15,
          longitudeDelta: 0.121,
        });
      },
      error => console.error(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  if (region.latitude === 37.78825 && region.longitude === -122.4324) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={false}
        showsMyLocationButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default CurrentLocation;
