import React from 'react'
import { Image, Text, StyleSheet, View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Slide = ({photo, title, description, prev, next}) => {
  return (
    <ScrollView style={styles.content}>
    <Image source={{uri: `${photo}`}} alt={title} style={styles.image}/>
    <View style={styles.btnContainer}>
            <TouchableOpacity onPress={prev}><Text style={styles.prevNext}>{"<"}</Text></TouchableOpacity>
            <TouchableOpacity onPress={next}><Text style={styles.prevNext}>{">"}</Text></TouchableOpacity>
    </View>
    <View style={styles.descriptionContainer}>
    <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContent}>
      <Text style={styles.description}>{description}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image:{
    height:200,
    borderRadius: 30,
    resizeMode: 'cover'
  },
  title:{
    padding: 15,
    fontSize:24,
    fontWeight:'bold',
    marginLeft: 7
  },
  descriptionContainer:{
    width:'100%',
    height: 900
  },    
  descriptionContent:{
    width:'90%'
  },

  description:{
    width:'100%',
    marginLeft: 20
  },
  prevNext:{
    fontSize: 30,
    width:200,
    height: 50,
    padding:5,
    color: 'black',
    textAlign:'center'
  },
  btnContainer:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection:'row',
    
  },
})

export default Slide