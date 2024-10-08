import {WEATHER_API_END_POINT} from '../utils/endpoints';
import {fetchWithErrorHandling} from '../helpers/apiFetcher';

export const fetchWeather = async (latitude: number, longitude: number) => {
  const response = await fetchWithErrorHandling(
    `${WEATHER_API_END_POINT}${latitude}&longitude=${longitude}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,weather_code`,
  );
  return response.json();
};
