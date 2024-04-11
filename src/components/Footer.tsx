import React from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../components/colors';
import {useNavigation} from '@react-navigation/native';

export const Footer = () => {
  const navigation = useNavigation();
  const onPressHandler = (navigateTo: string) => {
    navigation.navigate(navigateTo);
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => onPressHandler('SelectRoute')}
        style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../img/icons/bus_icon.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => onPressHandler('Location')}>
        <Image
          style={styles.icon}
          source={require('../img/icons/map_icon.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => onPressHandler('SelectSeat')}>
        <Image
          style={styles.icon}
          source={require('../img/icons/info_icon.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
    paddingVertical: 25,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: COLORS.cardText,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  iconWrapper: {
    width: 30,
    height: 30,
  },
});
