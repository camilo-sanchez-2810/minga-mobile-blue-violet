import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import MenuButtons from '../components/MenuButtons';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
     drawerContent={(props) => <MenuItems {...props}/> } 
     >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Sign In" component={SignIn} />
  </Drawer.Navigator>
  )
}

const MenuItems = ({navigation}) => {
  return(
    <DrawerContentScrollView style={styles.content}>
      <Text style= {styles.title}>Minga</Text>
      <MenuButtons
       text= 'Home'
       onPress={() => navigation.navigate('Home')} />
             <MenuButtons
       text= 'Sign In'
       onPress={() => navigation.navigate('Sign In')} />
       
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