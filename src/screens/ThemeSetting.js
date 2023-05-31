import React, { useContext, Fragment } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useCustomTheme } from '../hooks/useCustomTheme';
import { ThemeContext, Themes } from '../context/Theme';

const Border = () => {
    const { colors } = useCustomTheme();
  return <View style={[styles.border, { backgroundColor: colors.text }]} />;
};

const ThemeRow = ({ children, checked, onPress }) => {
    const { colors } = useCustomTheme();

  const checkedStyle = [styles.checkbox, { borderColor: colors.text }, { marginHorizontal: 10 }];

  if (checked) {
    checkedStyle.push({
      borderColor: colors.background,
      backgroundColor: colors.text,
    });
  }

  return (
    <Pressable style={[styles.row, {backgroundColor: colors.background,}]} onPress={onPress}>
      <View style={checkedStyle} />
      <Text style={[styles.text, {color: colors.text,}]}>{children}</Text>
    </Pressable>
  );
};

const ThemeSetting = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { colors } = useCustomTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {Themes.map((key, index) => (
        <Fragment key={key}>
          <ThemeRow onPress={() => setTheme(key)} checked={theme === key}>
            {key}
          </ThemeRow>
          {index !== Themes.length - 1 && <Border />}
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    height: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
});

export default ThemeSetting;
