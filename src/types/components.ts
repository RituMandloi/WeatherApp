export interface ForecastDisplayProps {
  forecast: Array<ForecastType>;
}

export interface SearchBarProps {
  onSearch: (location: string) => void;
}

export interface ForecastType {
  day: string;
  averageTemperature: number;
  weatherCode: number;
}

export interface WeatherProps {
  weather: {
    currentTemperature: number;
    currentWeatherCode: number;
  };
  locationName: string;
}
