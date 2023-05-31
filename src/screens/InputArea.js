import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Pressable, Image} from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors.js';
import SearchIcon from '../components/svgr/SearchIcon.js';



const InputArea = ({handleSearch, word, setWord}) => {
  const { colors } = useThemeColors();

  const styles = StyleSheet.create({
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.searchBar,
        paddingHorizontal: 15,
        height: 45,
        backgroundColor: colors.searchBar,
        marginHorizontal: 20,
        marginTop: 15,
      },
      input: {
        flex: 1,
        height: 40,
        fontFamily: 'Lora-Bold',
        color: colors.textBold,
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      definition: {
        fontSize: 20,
        marginTop: 20,
      },
  });

    return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a word"
            placeholderTextColor={colors.textDescriptor}
            value={word}
            keyboardType='default'
            onChangeText={text => setWord(text)}
          />
          <Pressable style={styles.button} onPress={handleSearch}>
            <SearchIcon />
          </Pressable>

        </View>
    );
};

export default InputArea;
