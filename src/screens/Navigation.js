import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useCustomTheme } from '../hooks/useCustomTheme';
import HomeScreen from '../screens/HomeScreen';
import ThemeSetting from '../screens/ThemeSetting';

const Stack = createStackNavigator();

const Navigation = () => {
  const { colors } = useCustomTheme();
  
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
        <Stack.Screen name="Theme" component={ThemeSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
