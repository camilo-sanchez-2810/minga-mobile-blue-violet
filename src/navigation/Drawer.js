import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import Comics from '../screens/Comics'
import NewRole from '../screens/NewRole';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Sign In" component={SignIn} />
    <Drawer.Screen name="Comics" component={Comics} />
    <Drawer.Screen name="NewRole" component={NewRole} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation