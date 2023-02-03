import { View, Text , Pressable,StyleSheet} from 'react-native'
import React, { useCallback ,useState,useRef} from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from 'axios';
import { useSelector } from 'react-redux';



const ComicsCategories = () => {
  const [categories, setCategories] = useState([]);
  const categoriess = useSelector((store) => store.comics.categories);
  console.log(categoriess)

  const getData = async () => {
    try {
      const response = await axios.get("https://minga-backendo.onrender.com/api/categories");
      setCategories(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(()=>{
     getData()
      
    },[])
  )
  

  return (
    <View style={styles.container}>
{categories.map((category)=>{
  return(
<Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.button,
      ]}>
  <Text style={styles.textCategory}>{category.name}</Text>
</Pressable>
  )
})}

      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom:110
    },
    button:{
        backgroundColor:'#FFE0DF',
        padding:10,
        borderRadius:20,
        width:80,
        height:35,
        marginTop:65,
       
        
    },
    textCategory:{
        color:'#EF8481',
        alignSelf:'center',
        
    }
    
  });

export default ComicsCategories