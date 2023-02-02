import { View, Text , Pressable,StyleSheet} from 'react-native'
import React from 'react'

const ComicsCategories = () => {
  return (
    <View>
      <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.button,
      ]}>
  <Text style={styles.textCategory}>Category</Text>
</Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    button:{
        backgroundColor:'#FFE0DF',
        padding:10,
        borderRadius:20,
        width:80,
        marginTop:80
    },
    textCategory:{
        color:'#EF8481',
        alignSelf:'center'
    }
    
  });

export default ComicsCategories