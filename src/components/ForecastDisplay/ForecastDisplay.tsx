import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import getWeatherImage, {WeatherCode} from '../../helpers/getWeatherImage';
import {ForecastDisplayProps} from '../../types/components';
import styles from './ForecastDisplayStyle';

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({forecast}) => {
  return (
    <FlatList
      data={forecast}
      keyExtractor={item => item.day}
      numColumns={2}
      renderItem={({item}) => {
        const weatherImage = getWeatherImage(
          String(item.weatherCode) as WeatherCode,
        );
        return (
          <View style={styles.forecastItem}>
            <View>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.day}>
                {' '}
                {Math.round(item.averageTemperature)}°C{' '}
              </Text>
            </View>
            <View>
              {weatherImage && (
                <Image
                  testID="weather-image"
                  source={{uri: weatherImage}}
                  style={styles.weatherImage}
                />
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default ForecastDisplay;
