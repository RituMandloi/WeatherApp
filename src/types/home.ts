import { Location } from "../services/locationAPI";

export type RootStackParamList = {
  Search: { locations: Location[] } | undefined;
};

export interface RouteType {
  key: string;
  name: string;
  params: RouteParams;
}

export interface RouteParams {
  lat?: number;
  lon?: number;
  name?: string;
}

export interface HomeScreenViewProps {
  weather: {
    location: string;
    currentTemperature: number;
    currentWeatherCode: number;
  } | null;
  forecast: Array<{
    day: string;
    averageTemperature: number;
    weatherCode: number;
  }> | null;
  isLoading: boolean;
  locationName: string;
  error: string | null;
}