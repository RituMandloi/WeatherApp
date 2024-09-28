import {Location} from '../services/locationAPI';

export type RootStackParamList = {
  Home: {lat: number; lon: number; name: string} | undefined;
};

export interface RouteType {
  key: string;
  name: string;
  params: RouteParams;
}

export interface RouteParams {
  locations: Location[];
}

export interface SearchScreenViewProps {
  locations: Array<{
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }> | null;
  handleLocationSelect: (lat: number, lon: number, name: string) => void;
}
