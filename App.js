import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/Drawer';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
}

export default App