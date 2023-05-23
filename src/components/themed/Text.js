import { Text as DefaultText } from 'react-native';
import { useThemeColors } from 'hooks/useThemeColors';

const Text = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.text, fontFamily: 'Inconsolata-Regular', fontSize: 16 },
        style,
      ]}
      {...rest}
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.text, fontFamily: 'Inconsolata-Bold', fontSize: 16 },
        style,
      ]}
      {...rest}
    />
  );
};

export { Text, TextBold };
export default Text;