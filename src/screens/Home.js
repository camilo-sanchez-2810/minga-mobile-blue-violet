import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <ImageBackground source={require('../../assets/bkg.png')} resizeMode="cover" style={styles.image}/>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent: 'center',
    height: 800,
    width: 500,
  },
})

export default Home