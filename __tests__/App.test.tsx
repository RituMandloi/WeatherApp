import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

it('should render the App', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId('root-navigation')).toBeTruthy();
});
