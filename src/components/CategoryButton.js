import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useFocusEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterCategoryComicsActions from "../store/comicCategories/actions";
import { color } from "react-native-reanimated";
const { filterCategoryComics } = filterCategoryComicsActions;

const CategoryButton = (props) => {
  const { id, index, name } = props;
  const [click, setClick] = useState(true);
  const dispatch = useDispatch();
  console.log("hola")
  console.log(name); 

  const color = (index) => {
    if (index === 0) {
      return styles.shonen;
    }
    if (index === 1) {
      return styles.shojo;
    }

    if (index === 2) {
      return styles.dc;
    }

    if (index === 3) {
      return styles.manwha;
    }

    if (index === 4) {
      return styles.marvel;
    }

    if (index === 5) {
      return styles.seinen;
    }
  };

  const getId = (e) => {
    setClick(!click);
    dispatch(filterCategoryComics(id));
  };
  return (
  <View>
      {click ? (
        <Pressable onPress={getId}>
          <Text style={color(index)}id={id}>
            {name} 
          </Text>
        </Pressable>
      ) : (
        <Pressable onPress={getId}>
          <Text style={styles.buttonOnPress}id={id}>
            {name}
          </Text>
        </Pressable>
      )}
      
      </View>
  );
};
export default CategoryButton;
const styles = StyleSheet.create({
  buttonOnPress: {
    color:'white',
    backgroundColor: "#ef8481",
    padding:8,
    borderRadius:15
  },
  shonen: {
    color: '#ef8481',
        backgroundColor: '#ffe0df',
        padding:8,
        borderRadius:15
  },
  manwha: {
    color: '#fc9c57',
    backgroundColor: '#ffdfc8',
    padding:8,
    borderRadius:15
    
  },
  marvel: {
    color:'#00ba88',
        backgroundColor: '#d1fbf0',
        padding:8,
        borderRadius:15
  },
  dc: {
    color: '#8883f0',
    backgroundColor: '#e0dbff',
    padding:8,
    borderRadius:15
  },
  shojo: {
    
    color: '#f083d5',
    backgroundColor: '#ffdbfc',
    padding:8,
    borderRadius:15
  },
  seinen: {
    color: '#fcff42',
        backgroundColor: '#fffedb',
        padding:8,
        borderRadius:15
  },
});




