//*> Splash Container
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/splash';
import SplashView from './SplashView';

const SplashContainer: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
    return () => {};
  }, [navigation]);

  return <SplashView />;
};

export default SplashContainer;
