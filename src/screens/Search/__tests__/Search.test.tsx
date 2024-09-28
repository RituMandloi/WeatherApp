import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchScreenContainer from '../SearchContainer';
import SearchScreenView from '../SearchView';
import { useNavigation, useRoute } from '@react-navigation/native';

jest.mock('@react-navigation/native');

describe('SearchScreenContainer Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });

    (useRoute as jest.Mock).mockReturnValue({
      params: {
        locations: [
          { id: 1, name: 'Berlin', latitude: 52.52, longitude: 13.41 },
          { id: 2, name: 'Munich', latitude: 48.14, longitude: 11.58 },
        ],
      },
    });
  });

  it('renders SearchScreenView with the list of locations', () => {
    const { getByText } = render(<SearchScreenContainer />);

    expect(getByText('Berlin')).toBeTruthy();
    expect(getByText('Munich')).toBeTruthy();
  });

  it('calls handleLocationSelect when a location is pressed', () => {
    const { getByText } = render(<SearchScreenContainer />);

    fireEvent.press(getByText('Berlin'));

    expect(mockNavigate).toHaveBeenCalledWith('Home', {
      lat: 52.52,
      lon: 13.41,
      name: 'Berlin',
    });
  });
});

describe('SearchScreenView Component', () => {
  const mockHandleLocationSelect = jest.fn();
  const locations = [
    { id: 1, name: 'Berlin', latitude: 52.52, longitude: 13.41 },
    { id: 2, name: 'Munich', latitude: 48.14, longitude: 11.58 },
  ];

  it('renders the list of locations', () => {
    const { getByText } = render(
      <SearchScreenView locations={locations} handleLocationSelect={mockHandleLocationSelect} />
    );

    expect(getByText('Berlin')).toBeTruthy();
    expect(getByText('Munich')).toBeTruthy();
  });

  it('calls handleLocationSelect when a location is pressed', () => {
    const { getByText } = render(
      <SearchScreenView locations={locations} handleLocationSelect={mockHandleLocationSelect} />
    );

    fireEvent.press(getByText('Berlin'));

    expect(mockHandleLocationSelect).toHaveBeenCalledWith(52.52, 13.41, 'Berlin');
  });
});
