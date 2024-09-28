import { useState } from 'react';
import { fetchLocations } from '../services/locationAPI';

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export const useLocationSearch = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchLocation = async (query: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchLocations(query);
      setLocations(data);
    } catch (err) {
      setError('Error fetching locations');
    } finally {
      setIsLoading(false);
    }
  };

  return { locations, searchLocation, isLoading, error };
};
