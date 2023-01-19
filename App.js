import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Octicons } from '@expo/vector-icons'

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  )
}



const Tab = createBottomTabNavigator();

// Tabs menu
function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
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
          return <Octicons name={iconName} size={size} color={color} />
        },
        
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          width: 353,
          height: 69,
          left: 20,
          top: 740,
          borderRadius: 28,
          backgroundColor: '#74CCA8',
        }
  })} >
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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