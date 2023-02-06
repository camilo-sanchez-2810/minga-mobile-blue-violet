import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "./CategoryButton";

const ComicsCategories = () => {
  const [categories, setCategories] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get(
        "https://minga-backendo.onrender.com/api/categories"
      );
      setCategories(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );


  return (
    <View style={styles.container}>
      {categories.map((category, index) => {
        return (
          <Button
            index={index}
            key={index}
            id={category._id}
            name={category.name}>
              <Text>a</Text>
            </Button>
            
          
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'space-between',
    marginTop:70,
    marginBottom:15
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: 50,
    height: 35,
    marginTop: 65,
    marginRight: 8,
    color: "white",
  },
  textCategory: {
    color: "white",
    alignSelf: "center",
  },
});

export default ComicsCategories;
