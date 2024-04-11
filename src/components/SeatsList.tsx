import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../components/colors';
import RouteContext from '../RouteContext';

export const SeatsList = () => {
  const {selectedRoute} = useContext(RouteContext);
  const {availableSeatsLeft, availableSeatsRight, totalSeats} = selectedRoute;
  const isSeatReserved = (seat: number, list: number[]) => !list.includes(seat);
  const totalSeatsCount = totalSeats.length;
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('Location');
  };
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.rowContainer}>
        <View style={styles.listContainer}>
          {totalSeats.map((seat: number, index: number) => (
            <TouchableOpacity
              style={[
                styles.seat,
                isSeatReserved(seat, availableSeatsLeft) && {
                  backgroundColor: COLORS.reservedSeat,
                },
                index < totalSeatsCount - 2 && styles.seatMargin,
              ]}
              key={`left${seat}`}
              onPress={onPressHandler}>
              <Text style={styles.seatNumber}>{seat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.listContainer}>
          {totalSeats.map((seat: number, index: number) => (
            <TouchableOpacity
              style={[
                styles.seat,
                isSeatReserved(seat, availableSeatsRight) && {
                  backgroundColor: COLORS.reservedSeat,
                },
                index < totalSeatsCount - 2 && styles.seatMargin,
              ]}
              key={`right${seat}`}
              onPress={onPressHandler}>
              <Text style={styles.seatNumber}>{seat}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    width: 108,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  seat: {
    width: 47,
    height: 47,
    borderRadius: 8,
    backgroundColor: COLORS.cardText,
  },
  seatMargin: {
    marginBottom: 19,
  },
  seatNumber: {
    textAlign: 'center',
    lineHeight: 47,
    fontSize: 19,
    fontWeight: '400',
    color: COLORS.textPrimary,
  },
});
