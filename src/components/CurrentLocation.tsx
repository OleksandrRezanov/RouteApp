import React, {useEffect} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import {StyleSheet} from 'react-native';

const CurrentLocation = () => {
  useEffect(() => {
    Geolocation.requestAuthorization();

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('Current location:', latitude, longitude);
      },
      error => {
        console.error('Error getting current location:', error);
      },
      {enableHighAccuracy: true},
    );
  }, []);

  MapboxGL.setAccessToken(
    'pk.eyJ1Ijoib2xla3NhbmRyZGV2IiwiYSI6ImNsdXUxM3VuczAxbDIycW1veDhvczl2NWoifQ.iUkCR6U9oJ3Ieogz_lfFZQ',
  );

  return (
    <MapboxGL.MapView style={styles.map}>
      <MapboxGL.Camera zoomLevel={15} animationDuration={0} />
    </MapboxGL.MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default CurrentLocation;
