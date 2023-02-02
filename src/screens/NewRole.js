import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const NewRole = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>Sign up to</Text>
        <Text style={styles.title}>Minga.com</Text>
        <ImageBackground
          source={require("../../assets/newRole.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text1}>
            Minga.com is the best place to find manga reviews. We've been super
            impress by the quality of applicants.
          </Text>
          <Text style={styles.text2}>Madhushan sasanka</Text>
        </ImageBackground>

        <View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#9ac3f5" : "white",
                borderColor: "black",
              },
              styles.button,
            ]}
          >
            <Text style={styles.textAuthor1}>Join as an Author!</Text>
            <Text style={styles.textAuthor2}>
              I'm a reader writting a manga
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#9ac3f5" : "white",
                
              },
            
              styles.button,
            ]}
          >
            <Text style={styles.textAuthor1}>Join as an Company!</Text>
            <Text style={styles.textAuthor2}>
              I'm a company and I want to publish my comics
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom:60
  },
  text1: {
    margin: 30,
    width: 200,
    fontSize: 18,
    
  },
  text2: {
    marginLeft:30,
  },
  button: {
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
    width: 300,
    },
 
  textAuthor2: {
    color: "grey",
  },
  image:{
    width:400,
    height:200,
    justifyContent:'center',
  },
});
export default NewRole;
