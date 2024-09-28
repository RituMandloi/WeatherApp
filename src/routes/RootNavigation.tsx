//*> Root Navigator
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/SplashContainer';
import Home from '../screens/Home/HomeContainer';
import Search from '../screens/Search/SearchContainer';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
