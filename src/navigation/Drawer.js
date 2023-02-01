import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" style={styles.color}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Sign In" component={SignIn} />
  </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  color:{
    color: 'blue',
    backgroundColor: 'blue'
  }
})

export default DrawerNavigation