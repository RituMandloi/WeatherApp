import {renderHook, act} from '@testing-library/react-hooks';
import {useLocationSearch} from '../useLocationSearch';
import {fetchLocations} from '../../services/locationAPI';

jest.mock('../../services/locationAPI');

describe('useLocationSearch Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches locations successfully', async () => {
    const mockLocations = [
      {id: 1, name: 'Berlin', latitude: 52.52, longitude: 13.41},
      {id: 2, name: 'Munich', latitude: 48.13, longitude: 11.58},
    ];

    (fetchLocations as jest.Mock).mockResolvedValue(mockLocations);

    const {result} = renderHook(() => useLocationSearch());

    await act(async () => {
      await result.current.searchLocation('Berlin');
    });

    expect(result.current.locations).toEqual(mockLocations);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles error when fetching locations fails', async () => {
    (fetchLocations as jest.Mock).mockRejectedValue(new Error('API is down'));

    const {result} = renderHook(() => useLocationSearch());

    await act(async () => {
      await result.current.searchLocation('Unknown');
    });

    expect(result.current.locations).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('Error fetching locations');
  });

  it('sets loading state correctly', async () => {
    const mockLocations = [
      {id: 1, name: 'Berlin', latitude: 52.52, longitude: 13.41},
    ];

    (fetchLocations as jest.Mock).mockResolvedValue(mockLocations);

    const {result} = renderHook(() => useLocationSearch());

    act(() => {
      result.current.searchLocation('Berlin');
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await result.current.searchLocation('Berlin');
    });

    expect(result.current.isLoading).toBe(false);
  });
});
