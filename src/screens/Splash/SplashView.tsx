//*> Splash View
import React from 'react';
import {View, Text} from 'react-native';
import styles from './SplashStyle';

interface SplashScreenViewProps {}

const SplashView: React.FC<SplashScreenViewProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weatherText}>Weather App</Text>
    </View>
  );
};

export default SplashView;
