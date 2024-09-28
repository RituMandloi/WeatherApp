import {LOCATION_API_END_POINT} from '../utils/endpoints';
import {fetchWithErrorHandling} from '../helpers/apiFetcher';

export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  admin1?: string;
  country?: string;
}

export const fetchLocations = async (query: string) => {
  const response = await fetchWithErrorHandling(
    `${LOCATION_API_END_POINT}${query}`,
  );
  const data = await response.json();
  return data.results.map((location: Location) => ({
    id: location.id,
    name: `${location.name}${location.admin1 ? '-' + location.admin1 : ''}, ${
      location.country
    }`,
    latitude: location.latitude,
    longitude: location.longitude,
  }));
};
