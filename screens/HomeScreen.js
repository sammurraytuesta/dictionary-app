import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import InputArea from './InputArea';
import DisplayWord from './DisplayWord';
import WordInfo from './WordInfo';

const HomeScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data[0].meanings[0].definitions[0].definition;
      setDefinition(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Dictionary App</Text> */}
      <InputArea handleSearch={handleSearch} word={word} setWord={setWord} />

      <DisplayWord word={word} />

      <View style={styles.definitionContainer}>
        {definition ? (
          <Text style={styles.definition}>{definition}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
