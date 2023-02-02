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

function ItemCard() {
  return (
    <Pressable style={styles.itemCard}>
      <View style={styles.itemCardBottom}></View>
      <View style={styles.itemCardTop}>
        <Text style={styles.itemCardName}>Item Name #1</Text>
        <Text style={styles.itemCardProperties}>Properties..</Text>
        <View style={styles.itemCardImage} ></View>
      </View>
    </Pressable>
  );
}

export default function ResultsScreen({ navigation }) {
  const [loaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.background}>
      <View style={styles.imageBackground}></View>
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FCF7E7",
    height: "100%",
  },
  imageBackground: {
    backgroundColor: "#FFE6A2",
    height: "25%",
    top: "5%",
    left: "5%",
    width: "90%",
    borderRadius: "20%",
  },
  itemCard: {
    top: "8%",
    borderRadius: "15%",
    height: "23%",
    width: "90%",
    left: "5%",
    marginTop: "5%",
  },
  itemCardBottom: {
    backgroundColor: "#397A89",
    top: "0%",
    height: "90%",
    left: "5%",
    width: "95%",
    borderRadius: "15%",
  },
  itemCardTop: {
    backgroundColor: "#FFE6A2",
    top: "-80%",
    height: "90%",
    left: "0%",
    width: "95%",
    borderRadius: "15%",
  },
  itemCardName: {
    fontFamily: "DMSans_700Bold",
    padding: "5%",
  },
  itemCardProperties: {
    fontFamily: "DMSans_400Regular",
    left: "5%",
  },
  itemCardImage: {
    backgroundColor: "#FFFAE9",
    height: "40%",
    top: "10%",
    width: "20%",
    left: "5%",
    borderRadius: "5%",
  }
});
