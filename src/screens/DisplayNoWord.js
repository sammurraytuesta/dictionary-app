import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';


const DisplayNoWord = ({isWord}) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}> {isWord} </Text>
        </View>
    );
};

export default DisplayNoWord;