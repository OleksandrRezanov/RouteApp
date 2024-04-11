import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../components/colors';
import {getViewportHeight} from '../utils/getViewportHeight';
import {RouteDescription} from '../components/RouteDescription';
import {SeatsList} from '../components/SeatsList';
import {Footer} from '../components/Footer';

export const SelectSeat = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.header}>Seat availability</Text>

      <View style={styles.info}>
        <RouteDescription />

        <View style={styles.seatInfo}>
          <View style={styles.seatInfoContainer}>
            <Text style={styles.seatInfoText}>Reserved</Text>
            <View style={[styles.colorSpec, styles.colorSpecReserved]} />
          </View>

          <View style={styles.seatInfoContainer}>
            <Text style={styles.seatInfoText}>Available</Text>
            <View style={[styles.colorSpec, styles.colorSpecAvailable]} />
          </View>
        </View>
      </View>

      <View style={styles.seatsContainer}>
        <SeatsList />
      </View>

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
  seatsContainer: {
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
  seatInfo: {
    width: 88,
    marginRight: 21,
  },
  seatInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seatInfoText: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 18,
    color: COLORS.textSecondary,
  },
  colorSpec: {
    width: 23,
    height: 23,
    borderRadius: 5,
  },
  colorSpecReserved: {
    backgroundColor: COLORS.reservedSeat,
    marginBottom: 5,
  },
  colorSpecAvailable: {
    backgroundColor: COLORS.cardText,
  },
});
