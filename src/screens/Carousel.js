import { View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import React, {useCallback, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import carouselActions from '../store/carousel/actions'
import Slide from '../components/CarouselItem'
const {getCarousel} = carouselActions

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const { comics } = useSelector((store) => store?.carousel)
    const dispatch = useDispatch()

    const prev = () => {
        if(current > 0) {
          return setCurrent(current - 1)
        }
        return setCurrent(comics.length - 1)
      }
      const next = () => {
        if(current < (comics.length - 1)) {
          return setCurrent(current + 1)
        }
        return setCurrent(0)
      }

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getCarousel())
        },[])
    )
    useFocusEffect(
        React.useCallback(() => {
            let idInterval = setInterval(() => {
                next()
            }, 4000)
            return () => clearInterval(idInterval)
        })
    )
  return (
    <ScrollView style={styles.content}>
        <ImageBackground source={require('../../assets/MangaPhoto.png')} style={styles.mangaPhoto}>
            <Image source={require('../../assets/librito.png')} style={styles.librito}/>
            <View style={styles.textContent}>
                <Text style={styles.title}>For the love of comic</Text>
                <Text style={styles.text}>Explore our varieties</Text>
                <Text style={styles.text}>#MingaLove❤️</Text>
            </View>
        </ImageBackground>
        <View style={styles.trendingContent}>
            <Text style={styles.trending}>Trending Manga</Text>
        </View>
        <View style={styles.carousel}>
            {comics?.map((comic, index) => 
                    <View style={styles.carouselContent} key={comic._id}>
                        {current === index ? (
                            <Slide photo={comic.photo} title={comic.title} description={comic.description} prev={prev} next={next} style={styles.column}/>
                        )
                    : null
                    }
                    </View>
                )}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title:{
        color: 'white',
         width: '100%',
         textAlign:'center',
         fontSize: 25,
         fontWeight:'bold',
         marginTop: 15
    },
    text:{
        color: 'white',
        marginLeft: 30,
        marginTop: 15
    },
    librito:{
        marginTop: 10,
        marginLeft: 10
    },
    mangaPhoto:{
        marginTop:50,
        width:'100%',
        height:200,
        borderRadius: '25%'
    },
    content:{
        backgroundColor: '#EBEBEB;',
        height: 900,
        width: '100%',
    },
    textContent:{
        alignItems: 'flex-start',
        width: '100%'
    },
    trendingContent:{
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    trending:{
        fontSize:25,
        fontWeight:'bold',
        color: 'grey'
    },
    carousel:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:'100%',
        justifyContent: 'space-around',
        height: 650
    },
    carouselContent:{
        flexDirection: 'column',
        width: '100%'
    },
    column:{
        flexDirection: 'column'
    },

      description:{
        textAlign:'center',
        
      },
})

export default Carousel