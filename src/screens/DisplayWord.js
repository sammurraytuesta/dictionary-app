import React, { useState } from 'react';
import { View, StyleSheet, Audio, Pressable } from 'react-native';
import axios from 'axios';
import { useThemeColors } from '../hooks/useThemeColors.js';
import { Title, Phonetics } from '../components/themed';
import PlayIcon from '../components/svgr/PlayIcon';

const DisplayWord = ({displayWord, phoneticText, audioUrl}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  let sound = null;

  const playAudio = async () => {
    try {
      const {sound: playbackSound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );
      sound = playbackSound;
      setIsPlaying(true);
    } catch (error) {
      console.log('Error loading audio:', error);
    }
  };

  const stopAudio = () => {
    if (sound) {
      sound.stopAsync();
      setIsPlaying(false);
    }
  };
    
  return (
    <View style={styles.displayContainer}>
      <View>
        <Title>{displayWord}</Title>
        <Phonetics style={styles.phonetics}>{phoneticText}</Phonetics>
      </View>
      <View>
        <Pressable style={styles.play} onPress={playAudio}>
          {( displayWord ? <PlayIcon /> : null)}
        </Pressable>
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