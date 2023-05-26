import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useThemeColors } from '../hooks/useThemeColors.js';
import { Title, Phonetics } from '../components/themed';
import PlayIcon from '../components/svgr/PlayIcon';

const DisplayWord = ({displayWord, phoneticText}) => {
    return (
      <View style={styles.displayContainer}>
        <View>
          <Title>{displayWord}</Title>
          <Phonetics style={styles.phonetics}>{phoneticText}</Phonetics>
        </View>
        <View style={styles.play}>
          {( displayWord ? <PlayIcon /> : null)}
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    phonetics: {
      marginTop: 5,
    },
    play: {
      width: 50,
      height: 50,
    },
    displayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
    }
});

export default DisplayWord;