export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Weather {
  location: string;
  currentTemperature: number;
  currentWeatherCode: number;
}

export interface DailyForecast {
  day: string;
  averageTemperature: number;
  weatherCode: number;
}
