import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useCustomTheme } from '../hooks/useCustomTheme';
import axios from 'axios';
import InputArea from './InputArea';
import DisplayWord from './DisplayWord';
import Footer from './Footer';
import Card from './Card';

const HomeScreen = () => {
  const { colors } = useCustomTheme();
  const [word, setWord] = useState('');
  const [displayWord, setDisplayWord] = useState('');
  const [phoneticText, setPhoneticText] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [audioUrl, setAudioUrl] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const wordName = response.data[0].word;
      const phoneticText = response.data[0].phonetic;
      const url = response.data[0].phonetics[0].audio;
      const meanings = response.data[0].meanings.map(meaning => {
        return {
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.map(def => ({
            definition: def.definition,
            example: def.example, 
          })),
          synonyms: meaning.synonyms,
          antonyms: meaning.antonyms,
        };
      });
      setDisplayWord(wordName);
      setPhoneticText(phoneticText);
      setMeanings(meanings);
      setAudioUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView testID='home-screen test-background' contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
        <InputArea handleSearch={handleSearch} word={word} setWord={setWord} />

            <DisplayWord displayWord={displayWord} phoneticText={phoneticText} audioUrl={audioUrl} />

            {meanings.map((mean, index) => (
              <Card key={index} meaning={mean} />
            ))}

            {displayWord ? <Footer displayWord={displayWord} /> : null}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default HomeScreen;
