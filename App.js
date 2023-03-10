import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Button, View} from 'react-native';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { NewEventScreen } from './src/screens/NewEventScreen';
import { LoginScreen } from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ItemScreen from './src/screens/ItemScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import CameraScreen from './src/screens/CameraScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

// Tabs menu
function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if(route.name ==='Profile'){
            iconName = 'person';
          } 
          color = focused ? '#FFE6A2' : '#FCF7E7';

          // You can return any component that you like here!
          return <Octicons name={iconName} size={35} color={color} />
        },
        
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabIconStyle,     
        
  })} >
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} /> 
		</Tab.Navigator>

  )
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
    
      <NavigationContainer>
        <MyTabs />

      </NavigationContainer>

	);
}

const styles = StyleSheet.create({ 
  tabBar: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    width: '90%',
    height: '8%',
    borderRadius: 28,
    left: '5%',
    top: '88%',
    backgroundColor: '#74CCA8',
  },
  tabIconStyle: {
    top: 15,
  }
});