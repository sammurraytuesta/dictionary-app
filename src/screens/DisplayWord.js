import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import PlayIcon from '../components/PlayIcon';

const DisplayWord = ({displayWord, phoneticText}) => {
    return (
      <View style={styles.displayContainer}>
        <View>
          <Text style={styles.word}>{displayWord}</Text>
          <Text style={styles.phonetics}>{phoneticText}</Text>
        </View>
        
        <PlayIcon />
      </View>
    );
};

const styles = StyleSheet.create({
    word: {
        fontSize: 30,
        marginTop: 20,
        alignItems: 'flex-start',
    },
    phonetics: {
      fontSize: 20,
      marginTop: 5,
    },
    displayContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 10,
    }
});

export default DisplayWord;