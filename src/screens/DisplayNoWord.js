import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '../components/themed';
import { useCustomTheme } from '../hooks/useCustomTheme';


const DisplayNoWord = ({isWord}) => {
    const { colors } = useCustomTheme();
    return (
        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
            <Text style={{fontSize: 15, color: colors.text}}>{isWord}</Text>
        </View>
    );
};

export default DisplayNoWord;