import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../src/context/Theme';
import Navigation from '../src/navigation/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
        <ThemeProvider>
            <Navigation/>
        </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;