import { useCustomTheme } from './useCustomTheme';
import Colors from '../constants/Colors';

export const useThemeColors = () => {
  const customTheme = useCustomTheme();

  return {
    theme: customTheme.theme,
    colors: Colors[customTheme.theme],
  };
}