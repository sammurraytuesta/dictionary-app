import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Linking } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors.js';
import { Text, TextBold } from '../components/themed';
import NewWindowIcon from '../components/svgr/NewWindowIcon';


const Footer = ({displayWord}) => {

    const openLink = () => {
        const url = `https://en.wiktionary.org/wiki/${displayWord}`;
        Linking.openURL(url);
    }
    return (
        <View style={styles.footer}>      
            <View style={styles.horizontalLine} />
            <View style={styles.footerContainer}>
                <Text style={styles.text}>Source </Text>
                <Pressable onPress={openLink}>
                    <Text style={styles.text}>    https://en.wiktionary.org/wiki/{displayWord}    </Text>
                </Pressable>
                <Pressable onPress={openLink}>
                    <NewWindowIcon />
                </Pressable>
            </View>

        </View>


    );
};

const styles = StyleSheet.create({
    horizontalLine: {
      borderBottomColor: '#afafaf',
      borderBottomWidth: 0.5,
      height: 5,
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 10,
    },
    footer: {
        flex: 1,
        width: '90%',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 10,
    },
});

export default Footer;