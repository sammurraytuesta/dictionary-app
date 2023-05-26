import { CardAnimationContext } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors.js';
import { Text, TextBold } from '../components/themed';
import DisplayWord from './DisplayWord';

const Card = (mean) => {

    console.log(mean);

    return (
        <>     
            <View style={styles.meaningContainer}>
            <Text style={styles.meaning}>{mean.meaning.partOfSpeech}</Text>
            <Text>Meaning</Text>
            {mean ? (
                <>
                  {mean.meaning.definitions.map( (def, index ) => 
                    <Text key={index}>{def}</Text>
                  )}
                </>
            ) : null}
            </View>
        </>

    );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  meaning: {
    marginTop: 10,
  },
  meaningContainer: {
    alignItems: 'left',
    marginTop: 20,
    marginHorizontal: 20,
  },
});


export default Card;