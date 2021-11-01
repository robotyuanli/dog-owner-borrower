import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './navigation';
import { AuthProvider } from './stores/useAuth';
import { defaultTheme } from './constants/Theme';

export default function App() {
	return (
		<AuthProvider>
			<NativeBaseProvider theme={defaultTheme}>
				<SafeAreaProvider>
					<Navigation />
					<StatusBar />
				</SafeAreaProvider>
			</NativeBaseProvider>
		</AuthProvider>
	);
}
