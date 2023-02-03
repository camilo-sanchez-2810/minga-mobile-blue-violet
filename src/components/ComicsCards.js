import { View, Text ,StyleSheet, Image,ScrollView} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const ComicsCards = () => {

  const {comics} = useSelector((store)=> store?.comics)
  console.log(comics)

  return (
    <ScrollView style={styles.container}>
    {comics?.map((card, index)=>{
      return(
        <View 
        key={index}
        style={styles.containerCards}>
              <View style={styles.textCard}>
                <Text style={styles.textCardIn}>{card.title}</Text>
                <Text style={styles.textCardIn}>{card.category_id.name}</Text>
              </View>
              <Image style={styles.CardImage}source={card.photo} />
            </View>
            )
    })}
    
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
      marginTop:10,
      
      
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
    },
    container:{
      height:330
    }
})

export default ComicsCards