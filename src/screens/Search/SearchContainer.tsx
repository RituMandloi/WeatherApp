//*> Search Container
import React from 'react';
import SearchScreenView from './SearchView';
import {RootStackParamList, RouteType} from '../../types/search';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';

const SearchContainer: React.FC = () => {
  const route = useRoute<RouteType>();
  const locations = route?.params?.locations || 52.52;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLocationSelect = (lat: number, lon: number, name: string) => {
    navigation.navigate('Home', {lat, lon, name});
  };

  return (
    <SearchScreenView
      locations={locations}
      handleLocationSelect={handleLocationSelect}
    />
  );
};

export default SearchContainer;
