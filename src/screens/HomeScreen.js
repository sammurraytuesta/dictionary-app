import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import InputArea from './InputArea';
import DisplayWord from './DisplayWord';
import Card from './Card';
import PlayIcon from '../components/themed/PlayIcon';

const HomeScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [displayWord, setDisplayWord] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data[0].meanings[0].definitions[0].definition;
      const wordName = response.data[0].word;
      setDefinition(data);
      setDisplayWord (wordName);
      <PlayIcon />

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.title}>Dictionary App</Text> */}
        <InputArea handleSearch={handleSearch} word={word} setWord={setWord} />

        <DisplayWord displayWord={displayWord} />

        <View style={styles.definitionContainer}>
            {definition ? (
                <Text style={styles.definition}>{definition}</Text>
            ) : null}
        </View>


      </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  definition: {
    fontSize: 20,
    marginTop: 20,
  },
  definitionContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  displayWord: {
    fontSize: 30,
    marginTop: 20,
  },
  displayContainer: {
    alignItems: 'center',
    marginRight: 330,
    marginTop: 20,
  }
});

export default HomeScreen;
