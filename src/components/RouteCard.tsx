import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from './colors';
import {Route} from '../types/Route';
import {useNavigation} from '@react-navigation/native';
import RouteContext from '../RouteContext';

interface Props {
  route: Route;
}

export const RouteCard: React.FC<Props> = ({route}) => {
  const navigation = useNavigation();
  const {setSelectedRoute} = useContext(RouteContext);

  const onPressHandler = () => {
    setSelectedRoute(route);
    navigation.navigate('SelectSeat');
  };

  const {routeCode, routeTitle} = route;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPressHandler}>
      <View style={styles.cardHeader}>
        <Text style={styles.routeCode}>{routeCode}</Text>
        <Text style={styles.routeTitle}>{routeTitle}</Text>
      </View>
      <View style={styles.busImageContainer}>
        <Image style={styles.busImage} source={require('../img/bus_pic.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.cardText,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardHeader: {
    paddingTop: 25,
    paddingBottom: 7,
    paddingHorizontal: 7,
    backgroundColor: COLORS.cardHeaderBg,
  },
  routeCode: {
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 37.5,
    color: COLORS.cardText,
  },
  routeTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: COLORS.cardText,
  },
  busImageContainer: {
    paddingVertical: 12,
    paddingLeft: 12,
  },
  busImage: {
    width: '100%',
  },
});
