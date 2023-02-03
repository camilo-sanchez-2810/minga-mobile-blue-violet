import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../../assets/bkg.png')} resizeMode="cover" style={styles.image}/>
      <View style={styles.fatherTitle}>
      <Text style={styles.headerText}>We announce our next round of funding. Read more →</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.headerTitle}>Your favorite comic shop</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carousel')}>
          <Text style={styles.button}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent: 'center',
    height: 800,
    width: '100%',
  },
  headerText:{
    width:'100%',
    padding: 5,
    textAlign: 'center',
    marginTop: 400,
    fontSize: 18,
    height: 60,
    color: 'white',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
  },
  fatherTitle:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  headerTitle:{
    color:'white',
    marginTop: 300,
    width:'100%',
    textAlign:'center',
    fontSize: 40,
    fontWeight: 'bold'
  },
  buttonContainer:{
    alignItems: 'center',
    width: '100%'
  },
  button:{
    marginTop: 50,
    width: 300,
    backgroundColor:'#4338CA',
    height: '40%',
    textAlign: 'center',
    paddingTop: 20,
    borderRadius: 40,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Home