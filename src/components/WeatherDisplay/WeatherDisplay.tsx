//*> WeatherDisplay Component
import React, {useMemo} from 'react';
import {View, Text, Image} from 'react-native';
import getWeatherImage, {WeatherCode} from '../../helpers/getWeatherImage';
import styles from './WeatherDisplayStyle';
import {WeatherProps} from '../../types/components';

const WeatherDisplay: React.FC<WeatherProps> = React.memo(
  ({weather, locationName}) => {
    const weatherImage = useMemo(() => {
      return getWeatherImage(String(weather.currentWeatherCode) as WeatherCode);
    }, [weather.currentWeatherCode]);

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
  },
);

export default React.memo(WeatherDisplay);
