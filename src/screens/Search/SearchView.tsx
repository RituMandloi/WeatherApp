//*> Splash View
import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './SearchStyle';
import {LocationType, SearchScreenViewProps} from '../../types/search';

const SearchView: React.FC<SearchScreenViewProps> = ({
  locations,
  handleLocationSelect,
}) => {
  const renderItem = ({item}: {item: LocationType}) => (
    <TouchableOpacity
      key={item.id}
      style={styles.locationItem}
      onPress={() =>
        handleLocationSelect(item.latitude, item.longitude, item.name)
      }>
      <Text style={styles.locationText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(SearchView);
