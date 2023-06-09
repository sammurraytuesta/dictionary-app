import { Text as DefaultText } from 'react-native';
import { useThemeColors } from '../../hooks/useThemeColors';

const Text = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.text, fontFamily: 'Lora-Regular', fontSize: 10 },
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
        { color: colors.text, fontFamily: 'Lora-Bold', fontSize: 16 },
        style,
      ]}
      {...rest}
    />
  );
};

const Title = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textBold, fontFamily: 'Lora-Bold', fontSize: 40 },
        style,
      ]}
      {...rest}
    />
  );
};

const Subtitle = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textDescriptor, fontFamily: 'Lora-Regular', fontSize: 12, marginBottom: 10, },
        style,
      ]}
      {...rest}
    />
  );
};

const Emphasize = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textAccent, fontFamily: 'Lora-Bold', fontSize: 12, marginBottom: 10, marginHorizontal: 10,},
        style,
      ]}
      {...rest}
    />
  );
};

const Phonetics = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textAccent, fontFamily: 'Inter-Regular', fontSize: 15 },
        style,
      ]}
      {...rest}
    />
  );
};

const Italics = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textBold, fontFamily: 'Lora-BoldItalic', fontSize: 15, marginBottom: 20, },
        style,
      ]}
      {...rest}
    />
  );
};

export { Text, TextBold, Title, Subtitle, Phonetics, Italics, Emphasize};
export default Text;