//*> ForecastDisplay Component
import React, {useCallback} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import getWeatherImage, {WeatherCode} from '../../helpers/getWeatherImage';
import {ForecastDisplayProps, ForecastType} from '../../types/components';
import styles from './ForecastDisplayStyle';

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({forecast}) => {
  const renderItem = useCallback(({item}: {item: ForecastType}) => {
    const weatherImage = getWeatherImage(
      String(item.weatherCode) as WeatherCode,
    );
    return (
      <View style={styles.forecastItem}>
        <View>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.day}>
            {Math.round(item.averageTemperature)}°C
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
  }, []);

  return (
    <FlatList
      data={forecast}
      keyExtractor={item => item.day}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

export default React.memo(ForecastDisplay);
