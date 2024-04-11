import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView, View} from 'react-native';
import {RouteCard} from '../components/RouteCard';
import {COLORS} from '../components/colors';
import {getViewportHeight} from '../utils/getViewportHeight';
import RouteContext from '../RouteContext';
import {Route} from '../types/Route';

export const SelectRoute: React.FC = () => {
  const {routes} = useContext(RouteContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Select your route</Text>
      <ScrollView>
        {routes.map((route: Route) => (
          <View style={styles.card} key={route.routeCode}>
            <RouteCard route={route} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 52,
    height: getViewportHeight(),
    backgroundColor: COLORS.appBg,
  },
  header: {
    marginBottom: 39,
    color: COLORS.textPrimary,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
  },
  card: {
    marginBottom: 25,
  },
});
