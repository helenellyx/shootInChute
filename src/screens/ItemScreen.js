import * as React from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  View,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { Octicons, FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function ResultsScreen({ navigation }) {
    const [loaded] = useFonts({
        DMSans_400Regular,
        DMSans_700Bold,
      });
    
      if (!loaded) {
        return null;
      }

      return(
        <View style={styles.background}>
            <View style={styles.card}>
                <Text style={styles.itemName}>Item Name</Text>
                <Text style={styles.itemProperties}>Properties:</Text>
                <Text style={styles.itemInformation}>Information..</Text>
                <Text style={styles.itemTextImage}>Images:</Text>

                <View style={styles.image}></View>

            </View>

        </View>
      )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#397A89",
        height: "100%"

    },
    card: {
        backgroundColor: "#FFFAE9",
        top: "25%",
        height: "80%",
        borderRadius: "50%"
    },
    itemName: {
        top: "5%",
        left: "10%",
        fontSize: "40%",
        fontFamily: "DMSans_700Bold",
    },

    itemProperties: {
        top: "6%",
        left: "10%",
        fontSize: "20%",
        fontFamily: "DMSans_700Bold",
    },
    itemInformation: {
        top: "7%",
        left: "10%",
        fontSize: "15%",
        fontFamily: "DMSans_400Regular",

    },
    itemTextImage: {
        top: "35%",
        left: "10%",
        fontSize: "20%",
        fontFamily: "DMSans_700Bold",
    },
    image: {
        backgroundColor: "#FFE6A2",
        height: "20%",
        top: "37%",
        left: "10%",
        width: "30%",
        borderRadius: "10%"
    }

})