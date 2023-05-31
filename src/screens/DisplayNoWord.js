import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useCustomTheme } from '../hooks/useCustomTheme';


const DisplayNoWord = ({isWord}) => {
    const { colors } = useCustomTheme();
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.text}}> {isWord} </Text>
        </View>
    );
};

export default DisplayNoWord;