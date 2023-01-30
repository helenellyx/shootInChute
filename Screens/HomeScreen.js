import * as React from "react";
//import { ScrollView } from 'react-native-web';
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  View,
  Pressable,
} from "react-native";
import { Octicons, FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["custom"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  today: "TODAY",
};

LocaleConfig.defaultLocale = "custom";

export default function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.background}>
      <Pressable style={styles.calendarLayout}>
        <Calendar
          style={{
            height: '20%',
            top: '0%',
            left: '0%',
            width: '60%',
            backgroundColor: "#FCF7E7",
         
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            "stylesheet.day.basic": {
              base: {
                width: 20
              }
            },
            backgroundColor: "#FCF7E7",
            calendarBackground: "FCF7E7",
            textSectionTitleColor: "#b6c1cd",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#74CCA8",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "blue",
            indicatorColor: "blue",
            textDayFontFamily: "DMSans_400Regular",
            textMonthFontFamily: "DMSans_400Regular",
            textDayHeaderFontFamily: "DMSans_400Regular",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 12,
            textMonthFontSize: 12,
            textDayHeaderFontSize: 12,
          }}
        />
        <View style={styles.countDown} >
          <Text style={styles.recyclingDayText} >Recycling Day</Text>
          <Text>5</Text>
          <Text>Days</Text>

        </View>


      </Pressable>

      <Pressable style={styles.cameraButton}>
        <FontAwesome
          name={"camera"}
          size={70}
          color={"#FCF7E7"}
          style={{ top: 23 }}
        />
        <Text
          style={{
            fontFamily: "DMSans_700Bold",
            fontSize: 15,
            color: "#FCF7E7",
            top: 30,
          }}
        >
          Scan garbage
        </Text>
      </Pressable>

      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Search")}
      >
        <Octicons name={"search"} size={80} color={"#397A89"} />
        <Text
          style={{
            fontFamily: "DMSans_700Bold",
            fontSize: 15,
            color: "#2A4849",
          }}
        >
          Search for an item
        </Text>
      </Pressable>

      <Pressable style={styles.mapsButton}>
        <Text style={{
            fontFamily: "DMSans_700Bold",
            fontSize: 15,
            color: "#2A4849",
            top: 10, 
            left: 15,
          }}>Location</Text>
      </Pressable>

      <View style={{}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FCF7E7",
    height: "100%",
  },
  calendarLayout: {
    position: "absolute",
    height: '30%',
    width: '90%',
    left: '5%',
    top: '4%',
    borderRadius: 15,
    backgroundColor: "#FCF7E7",
    borderColor: "#2A4849",
    borderWidth: 3,
  },
  countDown: {
    left: "60%",
  },
  recyclingDayText: {
    backgroundColor: "red",
    width: "35%",
    textAlign: "center",
    height: "25%",

  },


  cameraButton: {
    height: '15%',
    width: '50%',
    left: '10%',
    top: '30%',
    borderRadius: 15,
    backgroundColor: "#397A89",
    borderWidth: 3,
    borderColor: "#2A4849",
    alignItems: "center",
  },
  searchButton: {
    height: '15%',
    width: '50%',
    left: '40%',
    top: '24%',
    borderRadius: 15,
    backgroundColor: "#FFE6A2",
    borderWidth: 3,
    borderColor: "#2A4849",
    justifyContent: "center",
    alignItems: "center",
  },
  mapsButton: {
    height: '18%',
    width: '80%',
    left: '10%',
    top: '26%',
    borderRadius: 15,
    backgroundColor: "#FCF7E7",
    borderWidth: 3,
    borderColor: "#2A4849",
  },
});
