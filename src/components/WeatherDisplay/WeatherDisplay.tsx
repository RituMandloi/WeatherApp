import React from 'react';
import {View, Text, Image} from 'react-native';
import getWeatherImage, {WeatherCode} from '../../helpers/getWeatherImage';
import styles from './WeatherDisplayStyle';

interface WeatherProps {
  weather: {
    currentTemperature: number;
    currentWeatherCode: number;
  };
  locationName: string;
}

const WeatherDisplay: React.FC<WeatherProps> = ({weather, locationName}) => {
  const weatherImage = getWeatherImage(
    String(weather.currentWeatherCode) as WeatherCode,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{locationName}</Text>
      <Text style={styles.temperature}>
        {Math.round(weather.currentTemperature)}°C
      </Text>
      {weatherImage && (
        <Image
          testID="weather-image"
          source={{uri: String(weatherImage)}}
          style={styles.image}
        />
      )}
    </View>
  );
};

export default WeatherDisplay;
