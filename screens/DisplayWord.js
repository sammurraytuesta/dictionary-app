import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const DisplayWord = ({word}) => {
    return (
      <View style={styles.displayContainer}>
        <Text style={styles.displayWord}>{word}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    displayWord: {
        fontSize: 30,
        marginTop: 20,
    },
    displayContainer: {
        alignItems: 'center',
        marginRight: 330,
        marginTop: 20,
    }
});

export default DisplayWord;