import React from 'react';
import { render } from '@testing-library/react-native';
import ForecastDisplay from '../ForecastDisplay';
import getWeatherImage from '../../../helpers/getWeatherImage';
import { ForecastDisplayProps } from '../../../types/components';

jest.mock('../../../helpers/getWeatherImage');

describe('ForecastDisplay Component', () => {
  const mockForecast: ForecastDisplayProps['forecast'] = [
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders forecast items correctly', () => {
    (getWeatherImage as jest.Mock).mockImplementation((weatherCode) =>
      `https://weather.com/weather-icon-${weatherCode}.png`
    );

    const { getByText, getAllByTestId } = render(<ForecastDisplay forecast={mockForecast} />);
    expect(getByText('2024-09-27')).toBeTruthy();
    expect(getByText('16°C')).toBeTruthy();
    expect(getByText('2024-09-28')).toBeTruthy();
    expect(getByText('11°C')).toBeTruthy();

    const images = getAllByTestId('weather-image');
    expect(images).toHaveLength(2);
    expect(images[0].props.source.uri).toBe('https://weather.com/weather-icon-61.png');
    expect(images[1].props.source.uri).toBe('https://weather.com/weather-icon-80.png');
  });

  it('does not render images if getWeatherImage returns null', () => {
    (getWeatherImage as jest.Mock).mockReturnValue(null);

    const { queryAllByTestId } = render(<ForecastDisplay forecast={mockForecast} />);

    const images = queryAllByTestId('weather-image');
    expect(images).toHaveLength(0);
  });
});
