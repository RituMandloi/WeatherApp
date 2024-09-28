import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './SearchBarStyle';
import {SearchBarProps} from '../../types/components';
import COLOR_CONST from '../../utils/colors';

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search location"
        placeholderTextColor={COLOR_CONST.greyColor}
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleSearch}
      />
      <Button
        disabled={input.trim().length === 0}
        title="Search"
        onPress={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
