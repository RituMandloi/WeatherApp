export interface ForecastDisplayProps {
    forecast: Array<{
        day: string;
        averageTemperature: number;
        weatherCode: number;
    }>;
}

export interface SearchBarProps {
    onSearch: (location: string) => void;
}
