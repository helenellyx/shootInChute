import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { useFonts, DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

export const NewEventScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date()); 
  const [datePicked, setDatePicked] = useState(false); 

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    setDatePicked(true);
    hideDatePicker();
  };

  let [fontsLoaded] = useFonts({
    DMSans_400Regular, 
    DMSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View class="new-event-page" style={{flex: 1, 
      backgroundColor: '#FCF7E7'
      }}>

      <View class="input-fields" style={{margin: "10%", flexDirection: 'column', justifyContent: 'center'}}> 
      <Text style={{fontSize: 30, fontFamily: "DMSans_700Bold", alignSelf: 'center', marginBottom: "30%"}}> {title ? title : "New Reminder"} </Text>
      <TextInput placeholder="Event Name" onChangeText={setTitle} style={{borderBottomWidth: "1px", fontSize: 20, fontFamily: "DMSans_400Regular", marginBottom: "20%" }}/>
      <TextInput placeholder="Event Description" onChangeText={setDesc} style={{borderBottomWidth: "1px", fontSize: 20, fontFamily: "DMSans_400Regular", marginBottom: "20%" }}/>
      <View class="remind-row" style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}> 
        <Text style={{fontSize: 20, fontFamily: "DMSans_400Regular", marginLeft: '-1%', color: '#2A4849'}}> Date </Text>
        <TouchableOpacity style={{ borderBottomWidth: "1px" }} onPress={showDatePicker}>
          <Text style={{fontSize: 20, fontFamily: "DMSans_400Regular", color: '#2A4849'}}> {datePicked ? date.toDateString() : "Select a Date"} </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View class="button-row" style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "40%"}}> 
      
      <TouchableOpacity style={{ flex: 4, borderWidth: "1px", borderRadius: 100, marginRight: '30%', backgroundColor: '#FFE6A2'}} onPress={() => navigation.navigate('Home')}>
        <Text style={{fontSize: 20, fontFamily: "DMSans_400Regular", alignSelf: 'center', color: '#2A4849'}}> Cancel </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 4, borderWidth: "1px", borderRadius: 100, backgroundColor: '#FFE6A2'}} onPress={() => console.log("Save")}>
        <Text style={{fontSize: 20, fontFamily: "DMSans_700Bold", alignSelf: 'center', color: '#2A4849'}}> Add </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
