import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  Text, TextBold, Title, Subtitle, Phonetics, Italics, Emphasize} from '../components/themed';

const Card = ({ meaning }) => {
  return (
    <View style={styles.meaningContainer}>
      <View style={styles.partOfSpeechContainer}>
        <Italics>{meaning.partOfSpeech}</Italics>
        <View style={styles.horizontalLine} />
      </View>
      <Subtitle>Meaning</Subtitle>
      {meaning.definitions.length != 0 ? 
        <View style={styles.definitionsContainer}>
          {meaning.definitions.map((def, index) => (
            <Text key={index}>{def}</Text>
          ))}
        </View>
        : null
      }
      {meaning.synonyms.length != 0 ? 
        <View style={styles.nyms}>
          <Subtitle>Synonyms</Subtitle>
          {meaning.synonyms.map((def, index) => (
              <Emphasize key={index}>{def}</Emphasize>
          ))}
        </View>
        : null
      }
      {meaning.antonyms.length != 0 ? 
        <View style={styles.nyms}>
          <Subtitle>Antonyms</Subtitle>
          {meaning.antonyms.map((def, index) => (
              <Emphasize key={index}>{def}</Emphasize>
          ))}
        </View>
        : null
      }
      {meaning.example.some((item) => item !== undefined) ? (
        <Subtitle style={styles.example}>"{meaning.example}"</Subtitle>
      ): null}
    </View>
  );
};

const styles = StyleSheet.create({
  partOfSpeechContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meaningContainer: {
    alignItems: 'left',
    marginTop: 20,
    marginHorizontal: 20,
  },
  definitionsContainer: {
    marginBottom: 20,
  },
  horizontalLine: {
    borderBottomColor: '#afafaf',
    borderBottomWidth: 0.5,
    height: 12,
    width: '90%',
  },
  nyms: {
    flexDirection: 'row',
  },
  example: {
    marginTop: -15,
  },
});

export default Card;
