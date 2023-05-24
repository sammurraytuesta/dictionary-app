import { CardAnimationContext } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DisplayWord from './DisplayWord';

const Card = (definition) => {

    return (
        <>     
            

            <View style={styles.definitionContainer}>
            {definition ? (
                <Text style={styles.definition}>{definition}</Text>
            ) : null}
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    definition: {
        fontSize: 20,
        marginTop: 20,
      },
      definitionContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
      },
      displayWord: {
        fontSize: 30,
        marginTop: 20,
      },
      displayContainer: {
        alignItems: 'center',
        marginRight: 330,
        marginTop: 20,
      },
});


export default Card;