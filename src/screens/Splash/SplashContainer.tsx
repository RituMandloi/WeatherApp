//*> Splash Container
import { StatusBar } from 'react-native'
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/splash';
import SplashView from './SplashView';

const Splash: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    useFocusEffect(useCallback(() => {
        StatusBar.setHidden(true);
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
        return () => {
          StatusBar.setHidden(false);
        }
      }, []));
    
    return (
        <SplashView />
    )
}

export default Splash;