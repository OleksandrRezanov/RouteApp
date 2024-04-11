import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from './colors';
import RouteContext from '../RouteContext';

export const RouteDescription = () => {
  const {selectedRoute} = useContext(RouteContext);
  const {routeCode, routeTitle} = selectedRoute;
  return (
    <View style={styles.cardHeader}>
      <Text style={styles.routeCode}>{routeCode}</Text>
      <Text style={styles.routeTitle}>{routeTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    paddingTop: 5,
    paddingLeft: 15,
    width: '55%',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: COLORS.cardHeaderBg,
  },
  routeCode: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27,
    color: COLORS.cardText,
  },
  routeTitle: {
    marginBottom: 6,
    textAlign: 'left',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 13.5,
    color: COLORS.cardText,
  },
});
