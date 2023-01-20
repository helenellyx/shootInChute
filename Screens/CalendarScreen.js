import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useFonts, DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans'
import { LocaleConfig } from 'react-native-calendars';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';

LocaleConfig.locales['custom'] = {
    monthNames: [
      'January',
      'February', 
      'March',
      'April',
      'May',
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November',
      'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "TODAY"
  };
  LocaleConfig.defaultLocale = 'custom';
  
  const CircleLabel = props => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: 25, 
        height: 25, 
        borderRadius: 75,
        margin: 10,
        ...props.circleStyle
        }}/>
      <Text style="auto"> {props.labelText} </Text> 
      </View> 
    );
  }
  

export const CalendarScreen = () => {
    let [fontsLoaded] = useFonts({
        DMSans_400Regular, 
        DMSans_700Bold
      });

      if (!fontsLoaded) {
        return <AppLoading/>
      }
    return (
    <View class="label-page" style={{flexDirection:'column', flex: 1, backgroundColor: '#FCF7E7'}}>

    <View class="button-header" style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <AntDesign.Button name="close" color="#2A4849" backgroundColor="#FCF7E7" size={30} style={{marginRight: "60%", marginBottom: "3%"}} />
      <AntDesign.Button name="plus" color="#2A4849" backgroundColor="#FCF7E7" size={30} style={{}} />
      </View>
    <View class="label-table" style={{ flexDirection: 'row', flex: 1}}>

    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}> 
      <CircleLabel circleStyle={{backgroundColor: "#74CCA8"}} labelText="Collection Day"/>
    </View>

    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}> 
      <CircleLabel circleStyle={{backgroundColor: "#397A89"}} labelText="Custom Event"/>
    </View>
          
    </View> 
    <View class="scroll-calendar" style={{flex: 14}}> 
      <CalendarList 
        pastScrollRange={3}
        futureScrollRange={3}
        theme={{
          backgroundColor: '#FCF7E7', 
          calendarBackground: '#FCF7E7',
          dayTextColor: '#2A4849', 
          monthTextColor: '#2A4849', 
          textMonthFontWeight: 'bold',
          textMonthFontFamily: 'DMSans_700Bold', 
          textDayFontFamily: 'DMSans_400Regular'
        }}
        > 
      </CalendarList>
      </View> 
    </View>
        );
    }