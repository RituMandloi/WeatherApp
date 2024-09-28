import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeView from './HomeView';
import { useWeather } from '../../hooks/useWeather';
import { useLocationSearch } from '../../hooks/useLocationSearch';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, RouteType } from '../../types/home';
import styles from './HomeStyle';

const HomeContainer: React.FC = () => {
    const route = useRoute<RouteType>();
    const initialLat = route?.params?.lat || 52.52;
    const initialLon = route?.params?.lon || 13.41;
    const locationName = route?.params?.name || 'Custom Location';
    const { weather, forecast, isLoading, error } = useWeather(initialLat, initialLon);
    const { locations, searchLocation, isLoading: isSearching, error: searchError } = useLocationSearch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleSearch = async (location: string) => {
        await searchLocation(location);
    };

    useEffect(() => {
        if (locations.length > 0) {
            navigation.navigate('Search', { locations });
        }
    }, [locations]);

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {isSearching && <Text style={styles.searchText}>Searching for locations...</Text>}
            {searchError && <Text style={styles.errorText}>Error: {searchError}</Text>}
            <HomeView
                weather={weather}
                locationName={locationName}
                forecast={forecast}
                isLoading={isLoading}
                error={error}
            />
        </>
    );
};

export default HomeContainer;
