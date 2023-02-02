import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Searchbar, Card, IconButton } from "react-native-paper";
import { searchOutlined } from "@ant-design/icons";

//TODO: add fonts

const DATA = [
  {
    id: "1",
    title: "Household \nItems",
    picture: "https://picsum.photos/700",
  },
  {
    id: "2",
    title: "Containers",
    picture: "https://picsum.photos/600",
  },
  {
    id: "3",
    title: "Household \nItems",
    picture: "https://picsum.photos/700",
  },
  {
    id: "4",
    title: "Household \nItems",
    picture: "https://picsum.photos/700",
  },
  {
    id: "5",
    title: "Household \nItems",
    picture: "https://picsum.photos/700",
  },
  {
    id: "6",
    title: "Household \nItems",
    picture: "https://picsum.photos/700",
  },
];

const LeftContent = (props) => (
  <IconButton
    icon="camera"
    iconColor="#FFFAE9"
    size={165}
    style={styles.icon}
  />
);

export const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const renderItem = ({ item }) => {
    return (
      <Card mode="contained" style={styles.itemCard}>
        <Card.Cover source={item.picture} style={styles.picture} />
        <Card.Content style={styles.itemCardText}>
          <Text style={styles.itemCardText} variant="titleLarge">
            {item.title}
          </Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.view}>
      <Card
        mode="contained"
        elevation={0}
        style={styles.card}
        onPress={() => navigation.navigate("Camera")}
      >
        <Card.Title
          title={
            <Text>
              Scan {"\n"} Your {"\n"} Garbage
            </Text>
          }
          titleStyle={styles.title}
          titleNumberOfLines="3"
          left={LeftContent}
          leftStyle={styles.left}
          style={styles.CardTitle}
        />
      </Card>

      <Searchbar
        placeholder="Search for items here"
        onChangeText={updateSearch}
        value={search}
        icon={searchOutlined}
        elevation="0"
        style={styles.searchBar}
        inputStyle={styles.text}
        iconColor="#397A89"
        containerStyle={styles.containerStyle}
      />
      <FlatList data={DATA} renderItem={renderItem} numColumns={2} />
    </SafeAreaView>
  );
};
//should I add keyExtractor?
const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
    backgroundColor: "#FCF7E7",
  },
  itemCard: {
    backgroundColor: "#FFE6A2",
    width: 160,
    height: 140,
    margin: 10,
    borderWidth: "3px",
    borderColor: "#397A89",
  },
  itemCardText: {
    color: "#2A4849",
    top: "4%",
    textAlign: "center",
    fontSize: "15px",
  },
  picture: {
    maxHeight: 85,
  },
  cardTitle: {
    borderColor: "red",
    borderRadius: "100px",
    alignSelf: "center",
  },
  icon: {
    top: "120%",
    right: "60%",
  },
  card: {
    width: 360,
    height: 260,
    marginTop: -6,
    marginBottom: 15,
    backgroundColor: "#74CCA8",
    borderRadius: "15px",
    borderWidth: "5x",
    borderColor: "#2A4849",
    backfaceVisibility: "hidden",
  },
  searchBar: {
    borderColor: "#2A4849",
    borderWidth: "3px",
    borderRadius: "15px",
    width: 360,
    height: 40,
    marginBottom: 25,
  },
  text: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#2A4849",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "40px",
    lineHeight: "50px",
    textAlign: "center",
    color: "#FFFAE9",
    position: "relative",
    top: "28%",
    left: "18%",
  },
});

export default SearchScreen;
