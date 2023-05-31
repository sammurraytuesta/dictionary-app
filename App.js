import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {useFonts} from 'expo-font';
import { ThemeContext, ThemeProvider, Themes } from './src/context/Theme';
import Navigation from './src/screens/Navigation';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inconsolata-Regular': require('./assets/fonts/inconsolata/static/Inconsolata-Regular.ttf'),
    'Inconsolata-Bold': require('./assets/fonts/inconsolata/static/Inconsolata-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/inter/static/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/inter/static/Inter-Bold.ttf'),
    'Lora-Regular': require('./assets/fonts/lora/static/Lora-Regular.ttf'),
    'Lora-Bold': require('./assets/fonts/lora/static/Lora-Bold.ttf'),
    'Lora-BoldItalic': require('./assets/fonts/lora/static/Lora-BoldItalic.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Navigation/>
    </ThemeProvider>
  );
};

export default App;
