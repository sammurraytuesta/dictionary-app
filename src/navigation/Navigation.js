import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useThemeColors } from '../hooks/useThemeColors';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import HomeScreen from '../screens/HomeScreen';
import ThemeSetting from '../screens/ThemeSetting';
import Logo from '../components/svgr/Logo';
import MoonIcon from '../components/svgr/MoonIcon';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  const { colors } = useThemeColors();

  const [fontsLoaded] = useFonts({
    'Inconsolata-Regular': require('../../assets/fonts/inconsolata/static/Inconsolata-Regular.ttf'),
    'Inconsolata-Bold': require('../../assets/fonts/inconsolata/static/Inconsolata-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/inter/static/Inter-Regular.ttf'),
    'Inter-Bold': require('../../assets/fonts/inter/static/Inter-Bold.ttf'),
    'Lora-Regular': require('../../assets/fonts/lora/static/Lora-Regular.ttf'),
    'Lora-Bold': require('../../assets/fonts/lora/static/Lora-Bold.ttf'),
    'Lora-BoldItalic': require('../../assets/fonts/lora/static/Lora-BoldItalic.ttf'),
  });

  useEffect(() => {
    const fetchSetting = async () => {
      if (!colors.loading && fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    fetchSetting();
  }, [colors.loading, fontsLoaded]);

  const navigationTheme = {
    colors: {
      primary: colors.text,
      background: colors.textBold,
      card: colors.background,
      text: colors.text,
      color: colors.text,
      border: 'transparent',
    },
  };

  if (colors.loading) return null;
  if (!fontsLoaded) return null;

  const homeIcon = ({ color }) => <Logo stroke={color} />;
  const themeIcon = ({ color }) => <MoonIcon stroke={color} />;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            const icon = route.name === 'Home' ? homeIcon({ color }) : themeIcon({ color });
            return icon;
          },
          tabBarStyle: { paddingTop: 60, paddingBottom: 10 },
          tabBarLabelStyle: { display: 'none' },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Theme"
          component={ThemeSetting}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
