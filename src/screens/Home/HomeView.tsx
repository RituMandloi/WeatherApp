//*> Home View
import React from 'react';
import {View, Text} from 'react-native';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import ForecastDisplay from '../../components/ForecastDisplay/ForecastDisplay';
import styles from './HomeStyle';
import {HomeScreenViewProps} from '../../types/home';

const HomeView: React.FC<HomeScreenViewProps> = ({
  weather,
  forecast,
  locationName,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <Text style={styles.searchText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>Error fetching weather data.</Text>;
  }

  return (
    <View style={styles.container}>
      {weather && (
        <WeatherDisplay locationName={locationName} weather={weather} />
      )}
      {forecast && <ForecastDisplay forecast={forecast} />}
    </View>
  );
};

export default React.memo(HomeView);
