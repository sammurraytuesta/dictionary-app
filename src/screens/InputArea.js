import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import axios from 'axios';

const InputArea = ({handleSearch, word, setWord}) => {

    return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a word"
            value={word}
            onChangeText={text => setWord(text)}
          />
          <Pressable style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      paddingHorizontal: 10,
      width: "90%",
      height: 45,
      backgroundColor: 'grey',
    },

    input: {
      flex: 1,
      height: 40,
      marginRight: 10,
    },
    button: {
      marginLeft: 10,
      backgroundColor: '#4285f4',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    definition: {
      fontSize: 20,
      marginTop: 20,
    },
});

export default InputArea;
