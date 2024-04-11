import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../components/colors';
import {getViewportHeight} from '../utils/getViewportHeight';
import {RouteDescription} from '../components/RouteDescription';
import {Footer} from '../components/Footer';
// import CurrentLocation from '../components/CurrentLocation';
import RouteContext from '../RouteContext';

export const Location = () => {
  const {selectedRoute} = useContext(RouteContext);
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.header}>Location</Text>

      <View style={styles.info}>
        <RouteDescription />

        <View style={styles.speedInfoContainer}>
          <Image
            style={styles.speedImg}
            source={require('../img/icons/speed_icon.png')}
          />
          <Text style={styles.speedValue}>
            {`${selectedRoute.routeSpeed}kmph`}
          </Text>
        </View>
      </View>

      {/* <View style={styles.mapContainer}>
        <CurrentLocation />
      </View> */}

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: getViewportHeight(),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.appBg,
  },
  header: {
    marginLeft: 10,
    marginTop: 50,
    fontWeight: '500',
    fontSize: 26,
    lineHeight: 32.5,
    color: COLORS.textPrimary,
  },
  mapContainer: {
    marginTop: 79,
    marginBottom: 10,
    paddingHorizontal: 36,
    flexGrow: 1,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  speedInfoContainer: {
    width: 105,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  speedImg: {
    width: 29,
    height: 29,
  },
  speedValue: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17.5,
  },
});
