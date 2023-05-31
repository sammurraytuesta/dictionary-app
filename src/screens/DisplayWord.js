import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Audio } from 'expo-av'; 
import { Title, Phonetics } from '../components/themed';
import PlayIcon from '../components/svgr/PlayIcon';

const DisplayWord = ({ displayWord, phoneticText, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Playing Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  const playAudio = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync({uri: audioUrl});
        setSound(sound);
        await sound.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.log('Error playing audio:', error);
      }
    };
  
    const stopAudio = async () => {
      if (sound) {
        await sound.stopAsync();
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
        <Pressable testID='play-audio' style={styles.play} onPress={playAudio} >
          {displayWord ? <PlayIcon /> : null}
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
  },
});

export default DisplayWord;