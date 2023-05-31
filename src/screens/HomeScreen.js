import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useCustomTheme } from '../hooks/useCustomTheme';
import axios from 'axios';
import InputArea from './InputArea';
import DisplayWord from './DisplayWord';
import Footer from './Footer';
import Card from './Card';
import DisplayNoWord from './DisplayNoWord';

const HomeScreen = () => {
  const { colors } = useCustomTheme();
  const [word, setWord] = useState('');
  const [displayWord, setDisplayWord] = useState('');
  const [phoneticText, setPhoneticText] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [audioUrl, setAudioUrl] = useState('');
  const [isWord, setIsWord] = useState('');
  const [displayError, setDisplayError] = useState(true);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const wordName = response.data[0].word;
      const phoneticText = response.data[0].phonetic;
      const phonetics = response.data[0].phonetics;
      let url = '';
      for (let i = 0; i < phonetics.length; i++) {
        if (phonetics[i].audio) {
          url = phonetics[i].audio;
          break;
        }
      }
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
      setDisplayError(true);
    } catch (error) {
        setDisplayError(false);
        setIsWord("Sorry pal, we couldn't find definitions for the word you were looking for.You can try the search again at later time or head to the web instead" );
    }
  };

  return (
    <ScrollView testID='home-screen' contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
        <InputArea handleSearch={handleSearch} word={word} setWord={setWord} />

            {displayError ? 
              <> 
                <DisplayWord 
                  displayWord={displayWord} 
                  phoneticText={phoneticText} 
                  audioUrl={audioUrl} 
                /> 

                {meanings.map((mean, index) => (
                  <Card key={index} meaning={mean} />
                ))}

                {displayWord ? <Footer displayWord={displayWord} /> : null}
              </> : <DisplayNoWord isWord={isWord}/> }
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default HomeScreen;
