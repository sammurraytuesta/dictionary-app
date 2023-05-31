import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {useFonts} from 'expo-font';
import { useThemeColors } from './src/hooks/useThemeColors';

const Stack = createStackNavigator();

const App = () => {
  const { colors } = useThemeColors();
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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textBold,
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
