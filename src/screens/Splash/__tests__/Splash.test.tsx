import React from 'react';
import {render} from '@testing-library/react-native';
import Splash from '../SplashContainer';
import SplashView from '../SplashView';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native');

describe('SplashContainer Component', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigation as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('navigates to Home after 2 seconds', () => {
    render(<Splash />);
    jest.runAllTimers();
    expect(mockReplace).toHaveBeenCalledWith('Home');
  });
});

describe('SplashView Component', () => {
  it('renders the splash screen with app name', () => {
    const {getByText} = render(<SplashView />);

    expect(getByText('Weather App')).toBeTruthy();
  });
});
