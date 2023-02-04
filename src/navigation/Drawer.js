import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import Carousel from '../screens/Carousel';
import SignOut from '../screens/SignOut';
import MenuButtons from '../components/MenuButtons';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {

  return (
    <Drawer.Navigator initialRouteName="Home"
     drawerContent={(props) => <MenuItems {...props}/> } 
     >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Sign In" component={SignIn} />
    <Drawer.Screen name="Sign Out" component={SignOut} />
    <Drawer.Screen name='Carousel' component={Carousel}/>
  </Drawer.Navigator>
  )
}

const MenuItems = ({navigation}) => {

  let { is_online } = useSelector(store => store.auth)

  return(
    <DrawerContentScrollView style={styles.content}>
      <Text style= {styles.title}>Minga</Text>
      <MenuButtons
       text= 'Home'
       onPress={() => navigation.navigate('Home')} />
      {is_online ?
        <MenuButtons
        text= 'Sign Out'
        onPress={() => navigation.navigate('Sign Out')} />
        :
        <MenuButtons
        text= 'Sign In'
        onPress={() => navigation.navigate('Sign In')} />
      }
       
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  content:{
    padding: 15,
    backgroundColor: '#4338CA'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})

export default DrawerNavigation