import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import PlayIcon from '../components/themed/PlayIcon';

const DisplayWord = ({displayWord}) => {
    return (
      <View style={styles.displayContainer}>
        <Text style={styles.word}>{displayWord}</Text>
        {/* <PlayIcon /> */}
      </View>
    );
};

const styles = StyleSheet.create({
    word: {
        fontSize: 30,
        marginTop: 20,
        alignItems: 'flex-start',
    },
    displayContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 10,
        padding: 10,
    }
});

export default DisplayWord;