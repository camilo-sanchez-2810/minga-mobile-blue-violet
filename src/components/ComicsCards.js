import { View, Text ,StyleSheet, Image,ScrollView} from 'react-native'
import React from 'react'

const ComicsCards = () => {
  return (
    <ScrollView>
<View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>
    <View style={styles.containerCards}>
      <View style={styles.textCard}>
        <Text style={styles.textCardIn}>Superman Comic</Text>
        <Text style={styles.textCardIn}>Type</Text>
      </View>
      <Image style={styles.CardImage}source={require('../../assets/ejemploCard.png')} />
    </View>

    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    containerCards: {
      flex: 1,
      backgroundColor:'white',
      borderRadius: 20,
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:20,
      marginTop:20
      
    },
    textCard:{
       borderLeftWidth: 5,
       borderLeftColor:'blue',
       alignItems:'center',
       justifyContent:'center',
       height:100,
       marginTop:20
       
    },
    textCardIn:{
        marginLeft:10
    },
    CardImage:{
        borderTopLeftRadius:80,
        borderBottomLeftRadius:80,
        borderBottomRightRadius:20,
        borderTopRightRadius:20
    }
})

export default ComicsCards