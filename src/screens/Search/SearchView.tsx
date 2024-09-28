import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './SearchStyle';
import { SearchScreenViewProps } from '../../types/search';

const SearchScreenView: React.FC<SearchScreenViewProps> = ({ locations, handleLocationSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.locationItem}
            onPress={() => handleLocationSelect(item.latitude, item.longitude, item.name)}
          >
            <Text style={styles.locationText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreenView;
