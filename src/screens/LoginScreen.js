import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

export const LoginScreen = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    let [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSans_700Bold,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
  return (
    <View
      class="loginScreen"
      style={{
        backgroundColor: "#FCF7E7",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Username"
        onChangeText={setUser}
        style={{
          borderBottomWidth: "1px",
          fontSize: 20,
          fontFamily: "DMSans_400Regular",
          marginBottom: "10%",
          minWidth: 250
        }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{
          borderBottomWidth: "1px",
          fontSize: 20,
          fontFamily: "DMSans_400Regular",
          marginBottom: "30%",
          minWidth: 250
        }}
      />

      <TouchableOpacity
            style={{
              borderWidth: "1px",
              borderRadius: 100,
              backgroundColor: "#FFE6A2",
              minWidth: 240,
              minHeight: 30, 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "center", 
              marginBottom: "5%"
            }}
            onPress={() => console.log("login")}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "DMSans_700Bold",
                color: "#2A4849",
              }}
            >
              {" "}
              Log in{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: "1px",
              borderRadius: 100,
              backgroundColor: "#FFE6A2",
              minWidth: 240,
              minHeight: 30, 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => console.log("login with google")}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "DMSans_700Bold",
                color: "#2A4849",
              }}
            >
              {" "}
              Sign in with Google{" "}
            </Text>
          </TouchableOpacity>
    </View>
  );
};
