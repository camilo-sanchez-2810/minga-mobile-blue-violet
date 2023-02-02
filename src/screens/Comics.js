import React from "react";

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Button,
} from "react-native";
import ComicsCategories from "../components/ComicsCategories";
import CardsComics from "../components/ComicsCards";

const Comics = () => (
  <View style={StyleSheet.container}>
    <ImageBackground
      source={require("../../assets/bkg.png")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
    <Text style={styles.title}>Comics</Text>

    <TextInput
      placeholder="         Find your comic here"
      source={require("../../assets/Search.png")}
      style={styles.input}
    />
    <View style={styles.View}>
      <Text style={styles.explore}>Explore</Text>
      <View style={styles.container2}>
        <Image
          style={styles.cuadrados}
          source={require("../../assets/hxh.png")}
        />
        <Image
          style={styles.cuadrados}
          source={require("../../assets/dragonball.png")}
        />
        <Image
          style={styles.cuadrados}
          source={require("../../assets/onepiece.png")}
        />
      </View>

    <View>
        <ComicsCategories />
    </View>
    <View>
        <CardsComics />
    </View>
    
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 700,
    width: 400,
  },
  title: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    height: 50,
    width: 320,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 25,
    alignSelf: "center",
  },
  View: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    backgroundColor:'#EBEBEB',
    margin:10
  },
  explore: {
    fontSize: 25,
    marginBottom:60
  },
  cuadrados: {
    marginTop: 10,
    padding: 10,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  container2: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  containerButtons: {
    margin: 10,
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default Comics;
