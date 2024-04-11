import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProvider} from './src/RouteContext';
import {SelectRoute} from './src/screens/SelectRoute';
import {SelectSeat} from './src/screens/SelectSeat';
import {Location} from './src/screens/Location';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <RouteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SelectRoute" component={SelectRoute} />
          <Stack.Screen name="SelectSeat" component={SelectSeat} />
          <Stack.Screen name="Location" component={Location} />
        </Stack.Navigator>
      </NavigationContainer>
    </RouteProvider>
  );
}

export default App;
