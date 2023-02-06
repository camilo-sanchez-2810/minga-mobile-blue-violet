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

const NewRole = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        
        <ImageBackground
          source={require("../../assets/newRole.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.title2}>Sign up to</Text>
        <Text style={styles.title}>Minga.com</Text>
          <Text style={styles.text1}>
            Minga.com is the best place to find manga reviews. We've been super
            impress by the quality of applicants.
          </Text>
          <Text style={styles.text2}>Madhushan sasanka</Text>

          <View>
          <Pressable onPress={()=>navigation.navigate("Home")}
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

          <Pressable onPress={()=>navigation.navigate("Home")}
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

        </ImageBackground>

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    alignItems:'baseline'
  },
  container1: {
    marginTop: 50,
    
  },
  title: {
    fontSize: 40,
    marginBottom:20,
    alignSelf:'center'
  },
  title2: { 
    fontSize: 20,
    marginBottom:20,
    alignSelf:'center'
  },
  text1: {
    marginTop:60,
    margin:20,
    marginLeft: 70,
    width: 200,
    fontSize: 18,
    
    
  },
  text2: {
    marginLeft:70,
  },
  button: {
    marginTop: 20,
    borderRadius: 15,
    padding: 12,
    width: 300,
    alignSelf:'center',
    
    },
    textAuthor1:{
fontSize:18
    },
 
  textAuthor2: {
    color: "grey",
  },
  image:{
    width:400,
    height:600,
    justifyContent:'center',
  },
});
export default NewRole;
