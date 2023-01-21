import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/searchScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  elevation: 0,
  colors: {
    background: '#FCF7E7',
    card: '#FFE6A2',
    outline: '#74CCA8',
    border: '#397A89',
    secondary: '#74CCA8',
    tertiary: '#2A4849',
  fonts: {

  }

  },
};

//options={{headerShown: false}} 
export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const HomeScreen= () => {
  return(
  <View style={styles.container}>
      <Text>home screen</Text>
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



