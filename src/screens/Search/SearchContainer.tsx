//*> Search Container
import React, {useCallback} from 'react';
import SearchScreenView from './SearchView';
import {RootStackParamList, RouteType} from '../../types/search';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';

const SearchContainer: React.FC = () => {
  const route = useRoute<RouteType>();
  const locations = route?.params?.locations || 52.52;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLocationSelect = useCallback(
    (lat: number, lon: number, name: string) => {
      navigation.navigate('Home', {lat, lon, name});
    },
    [navigation],
  );

  return (
    <SearchScreenView
      locations={locations}
      handleLocationSelect={handleLocationSelect}
    />
  );
};

export default React.memo(SearchContainer);
