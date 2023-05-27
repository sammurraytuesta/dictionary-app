import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useThemeColors } from '../hooks/useThemeColors.js';
import { Text, Subtitle, Italics} from '../components/themed';
import InputArea from './InputArea';
import DisplayWord from './DisplayWord';
import Footer from './Footer';
import Card from './Card';
import PlayIcon from '../components/svgr/PlayIcon';

const HomeScreen = () => {
  const [word, setWord] = useState('');
  const [displayWord, setDisplayWord] = useState('');
  const [phoneticText, setPhoneticText] = useState('');
  const [meanings, setMeanings] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const wordName = response.data[0].word;
      const phoneticText = response.data[0].phonetic;
      const meanings = response.data[0].meanings.map(meaning => {
        return {
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.map(def => def.definition),
          synonyms: meaning.synonyms,
          antonyms: meaning.antonyms,
          example: meaning.definitions.map(def => def.example),
        };
      });
      setDisplayWord(wordName);
      setPhoneticText(phoneticText);
      setMeanings(meanings);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <InputArea handleSearch={handleSearch} word={word} setWord={setWord} />

        <DisplayWord displayWord={displayWord} phoneticText={phoneticText} />

        {meanings.map((mean, index) => (
          <Card key={index} meaning={mean} />
        ))}

        <Footer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
