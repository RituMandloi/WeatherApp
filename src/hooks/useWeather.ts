import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherAPI';

interface Weather {
  location: string;
  currentTemperature: number;
  currentWeatherCode: number;
}

interface DailyForecast {
  day: string;
  averageTemperature: number;
  weatherCode: number;
}

export const useWeather = (latitude: number, longitude: number) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<DailyForecast[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeather(latitude, longitude);
        setWeather({
          location: 'Custom Location',
          currentTemperature: data.current.temperature_2m,
          currentWeatherCode: data.daily.weather_code[0],
        });

        const weeklyForecast: DailyForecast[] = data.daily.time.map((day: string, index: number) => ({
          day,
          averageTemperature: Math.round((data.daily.temperature_2m_max[index] + data.daily.temperature_2m_min[index]) / 2),
          weatherCode: data.daily.weather_code[index],
        }));

        setForecast(weeklyForecast);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setIsLoading(false);
      }
    };

    getWeatherData();
  }, [latitude, longitude]);

  return { weather, forecast, isLoading, error };
};
