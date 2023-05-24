import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Image} from 'react-native';
import axios from 'axios';
import SearchIcon from '../components/themed/SearchIcon';



const InputArea = ({handleSearch, word, setWord}) => {

    return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a word"
            placeholderTextColor={'black'}
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

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#dcdcdc',
      paddingHorizontal: 10,
      height: 45,
      backgroundColor: '#dcdcdc',
      marginHorizontal: 15,
      marginTop: 15,
    },

    input: {
      flex: 1,
      height: 40,
    },
    button: {
      padding: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    definition: {
      fontSize: 20,
      marginTop: 20,
    },
    searchButton: {

    }
});

export default InputArea;
