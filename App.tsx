//*> Root App
import React from 'react';
import RootNavigation from './src/routes/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider testID="root-navigation">
      <RootNavigation />
    </SafeAreaProvider>
  );
}