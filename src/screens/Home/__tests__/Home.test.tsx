import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreenContainer from '../HomeContainer';
import HomeScreenView from '../HomeView';
import { useWeather } from '../../../hooks/useWeather';
import { useLocationSearch } from '../../../hooks/useLocationSearch';
import { useNavigation, useRoute } from '@react-navigation/native';

jest.mock('../../../hooks/useWeather');
jest.mock('../../../hooks/useLocationSearch');
jest.mock('@react-navigation/native');

describe('HomeScreenContainer Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });

    (useRoute as jest.Mock).mockReturnValue({
      params: {
        lat: 52.52,
        lon: 13.41,
        name: 'Berlin',
      },
    });

    (useWeather as jest.Mock).mockReturnValue({
      weather: { currentTemperature: 20, currentWeatherCode: 61 },
      forecast: [
        { day: '2024-09-27', averageTemperature: 15, weatherCode: 61 },
      ],
      isLoading: false,
      error: null,
    });

    (useLocationSearch as jest.Mock).mockReturnValue({
      locations: [],
      searchLocation: jest.fn(),
      isLoading: false,
      error: null,
    });
  });

  it('renders the SearchBar, HomeView, and location search text', () => {
    const { getByText, getByPlaceholderText } = render(<HomeScreenContainer />);

    expect(getByPlaceholderText('Search location')).toBeTruthy();
    expect(getByText('Berlin')).toBeTruthy();
    expect(getByText('15°C')).toBeTruthy();
  });

  it('displays searching text when searching for locations', () => {
    (useLocationSearch as jest.Mock).mockReturnValue({
      locations: [],
      searchLocation: jest.fn(),
      isLoading: true,
      error: null,
    });

    const { getByText } = render(<HomeScreenContainer />);

    expect(getByText('Searching for locations...')).toBeTruthy();
  });

  it('navigates to Search screen when locations are available', async () => {
    (useLocationSearch as jest.Mock).mockReturnValue({
      locations: [{ id: 1, name: 'Berlin', latitude: 52.52, longitude: 13.41 }],
      searchLocation: jest.fn(),
      isLoading: false,
      error: null,
    });

    render(<HomeScreenContainer />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Search', {
        locations: [{ id: 1, name: 'Berlin', latitude: 52.52, longitude: 13.41 }],
      });
    });
  });

  it('displays error message when search fails', () => {
    (useLocationSearch as jest.Mock).mockReturnValue({
      locations: [],
      searchLocation: jest.fn(),
      isLoading: false,
      error: 'Error fetching locations',
    });

    const { getByText } = render(<HomeScreenContainer />);

    expect(getByText('Error: Error fetching locations')).toBeTruthy();
  });
});



describe('HomeScreenView Component', () => {
    const mockWeather = {
      currentTemperature: 17.5,
      currentWeatherCode: 61,
      location: 'Berlin'
    };
  
    const mockForecast = [
      {
        day: '2024-09-27',
        averageTemperature: 16,
        weatherCode: 61,
      },
      {
        day: '2024-09-28',
        averageTemperature: 11,
        weatherCode: 80,
      },
    ];
  
    const locationName = 'Berlin';
  
    it('renders loading state', () => {
      const { getByText } = render(<HomeScreenView isLoading={true} error={null} weather={null} forecast={[]} locationName={locationName} />);
  
      expect(getByText('Loading...')).toBeTruthy();
    });
  
    it('renders error message when there is an error', () => {
      const { getByText } = render(<HomeScreenView isLoading={false} error="Error fetching weather data." weather={null} forecast={[]} locationName={locationName} />);
  
      expect(getByText('Error fetching weather data.')).toBeTruthy();
    });
  
    it('renders WeatherDisplay and ForecastDisplay when data is available', () => {
      const { getByText } = render(
        <HomeScreenView
          isLoading={false}
          error={null}
          weather={mockWeather}
          forecast={mockForecast}
          locationName={locationName}
        />
      );
  
      expect(getByText(locationName)).toBeTruthy();
  
      expect(getByText('18°C')).toBeTruthy();
      expect(getByText('2024-09-27')).toBeTruthy();
      expect(getByText('16°C')).toBeTruthy();
      expect(getByText('2024-09-28')).toBeTruthy();
      expect(getByText('11°C')).toBeTruthy();
    });
  });
  