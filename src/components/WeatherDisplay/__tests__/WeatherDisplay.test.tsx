import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherDisplay from '../WeatherDisplay';
import getWeatherImage from '../../../helpers/getWeatherImage';

jest.mock('../../../helpers/getWeatherImage');

describe('WeatherDisplay Component', () => {
  const mockWeather = {
    currentTemperature: 17.5,
    currentWeatherCode: 61,
  };

  const locationName = 'Berlin';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders location name and current temperature correctly', () => {
    (getWeatherImage as jest.Mock).mockReturnValue(
      'https://weather.com/weather-icon-61.png',
    );

    const {getByText} = render(
      <WeatherDisplay weather={mockWeather} locationName={locationName} />,
    );

    expect(getByText(locationName)).toBeTruthy();
    expect(getByText('18°C')).toBeTruthy();
  });

  it('renders the correct weather image', () => {
    (getWeatherImage as jest.Mock).mockReturnValue(
      'https://weather.com/weather-icon-61.png',
    );

    const {getByTestId} = render(
      <WeatherDisplay weather={mockWeather} locationName={locationName} />,
    );

    const image = getByTestId('weather-image');
    expect(image.props.source.uri).toBe(
      'https://weather.com/weather-icon-61.png',
    );
  });

  it('does not render image if getWeatherImage returns null', () => {
    (getWeatherImage as jest.Mock).mockReturnValue(null);

    const {queryByTestId} = render(
      <WeatherDisplay weather={mockWeather} locationName={locationName} />,
    );

    const image = queryByTestId('weather-image');
    expect(image).toBeNull();
  });
});
