import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../screens/Home'
import SignIn from '../screens/SingIn';
import MenuButtons from '../components/MenuButtons';
import SingUp from "../screens/SingUp"
import NewCompany from "../screens/NewCompany"
import NewAuthor from '../screens/NewAuthor';
import SignOut from '../screens/SingOut';


const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={(props) => <MenuItems {...props}/> } 
    >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Sign In" component={SignIn} />
    <Drawer.Screen name="Sign Out" component={SignOut} />
    <Drawer.Screen name="Sign Up" component={SingUp} />
    <Drawer.Screen name="New Company" component={NewCompany} />
    <Drawer.Screen name="New Author" component={NewAuthor} />
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
        <MenuButtons
      text= 'Sign Up'
      onPress={() => navigation.navigate('Sign Up')} />
        <MenuButtons
      text= 'New Company'
      onPress={() => navigation.navigate('New Company')} />
        <MenuButtons
      text= 'New Author'
      onPress={() => navigation.navigate('New Author')} />
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