import { renderHook } from '@testing-library/react-hooks';
import { useWeather } from '../useWeather';
import { fetchWeather } from '../../services/weatherAPI';

jest.mock('../../services/weatherAPI');

describe('useWeather Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches weather data successfully', async () => {
    const mockWeatherData = {
      current: {
        temperature_2m: 17.7,
      },
      daily: {
        time: [
          '2024-09-27',
          '2024-09-28',
          '2024-09-29',
          '2024-09-30',
          '2024-10-01',
          '2024-10-02',
          '2024-10-03',
        ],
        temperature_2m_max: [19.5, 14.1, 14, 15, 15.1, 12.9, 14.7],
        temperature_2m_min: [13.2, 8.2, 6.5, 6.8, 9.5, 9.6, 6.7],
        weather_code: [61, 80, 3, 3, 63, 63, 3],
      },
    };

    (fetchWeather as jest.Mock).mockResolvedValue(mockWeatherData);

    const { result, waitForNextUpdate } = renderHook(() => useWeather(52.52, 13.41));

    await waitForNextUpdate();

    expect(result.current.weather).toEqual({
      location: 'Custom Location',
      currentTemperature: 17.7,
      currentWeatherCode: 61,
    });

    expect(result.current.forecast).toEqual([
      { day: '2024-09-27', averageTemperature: 16, weatherCode: 61 },
      { day: '2024-09-28', averageTemperature: 11, weatherCode: 80 },
      { day: '2024-09-29', averageTemperature: 10, weatherCode: 3 },
      { day: '2024-09-30', averageTemperature: 11, weatherCode: 3 },
      { day: '2024-10-01', averageTemperature: 12, weatherCode: 63 },
      { day: '2024-10-02', averageTemperature: 11, weatherCode: 63 },
      { day: '2024-10-03', averageTemperature: 11, weatherCode: 3 },
    ]);

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles error when fetching weather data fails', async () => {
    (fetchWeather as jest.Mock).mockRejectedValue(new Error('API is down'));

    const { result, waitForNextUpdate } = renderHook(() => useWeather(52.52, 13.41));

    await waitForNextUpdate();

    expect(result.current.weather).toBe(null);
    expect(result.current.forecast).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('Error fetching weather data');
  });

  it('sets loading state correctly', async () => {
    const mockWeatherData = {
      current: {
        temperature_2m: 17.7,
      },
      daily: {
        time: ['2024-09-27', '2024-09-28'],
        temperature_2m_max: [19.5, 14.1],
        temperature_2m_min: [13.2, 8.2],
        weather_code: [61, 80],
      },
    };

    (fetchWeather as jest.Mock).mockResolvedValue(mockWeatherData);

    const { result, waitForNextUpdate } = renderHook(() => useWeather(52.52, 13.41));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });
});
