import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { ProvideAuth } from './stores/useAuth';
import { defaultTheme } from './constants/Theme';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ProvideAuth>
        <NativeBaseProvider theme={defaultTheme}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </ProvideAuth>
    );
  }
}
