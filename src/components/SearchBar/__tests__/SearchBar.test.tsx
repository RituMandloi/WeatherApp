import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText } = render(<SearchBar onSearch={() => { }} />);
        expect(getByPlaceholderText('Search location')).toBeTruthy();
    });

    it('calls onSearch with correct input', () => {
        const mockOnSearch = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={mockOnSearch} />);

        const input = getByPlaceholderText('Search location');
        fireEvent.changeText(input, 'Berlin');
        fireEvent.press(getByText('Search'));

        expect(mockOnSearch).toHaveBeenCalledWith('Berlin');
    });
});
