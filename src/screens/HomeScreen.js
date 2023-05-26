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
  const [definitions, setDefinitions] = useState([]);
  const [displayWord, setDisplayWord] = useState('');
  const [phoneticText, setPhoneticText] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const wordName = response.data[0].word;
      const phoneticText = response.data[0].phonetic;
      const definitionArray = response.data[0].meanings[0].definitions.map(def => def.definition);
      setDisplayWord(wordName);
      setPhoneticText(phoneticText);
      setDefinitions(definitionArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <InputArea handleSearch={handleSearch} word={word} setWord={setWord} />

        <DisplayWord displayWord={displayWord} phoneticText={phoneticText} />

        {/* Put this in card.
          * pass in type of definitions: noun, verb, etc.
          * pass in arrays for meanings and synonyms */}
        {( displayWord ? 
          <View style={styles.definitionContainer}>
            <Subtitle>Meaning</Subtitle>
            {definitions.map((definition, index) => (
              <Text key={index} style={styles.definition}>
                {definition}
              </Text>
            ))}
          </View>
        : null)}

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
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  definition: {
    marginTop: 10,
  },
  definitionContainer: {
    alignItems: 'left',
    marginTop: 20,
    marginHorizontal: 20,
  },
  displayWord: {
    fontSize: 30,
    marginTop: 20,
  },
  displayContainer: {
    alignItems: 'center',
    marginRight: 330,
    marginTop: 20,
    marginHorizontal: 20,
  }
});

export default HomeScreen;
