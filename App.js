import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CalendarScreen } from './Screens/CalendarScreen';
import { NewEventScreen } from './Screens/NewEventScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CalendarScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="New Event" component={NewEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return(
  <View style={styles.container}>
      <Text>home screen</Text>
    </View>
);
  }

const SearchScreen = () => {
  return(
    <View style={styles.container}>
        <Text>search screen</Text>
      </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



