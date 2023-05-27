import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../components/themed';

const Card = ({ meaning }) => {
  return (
    <View style={styles.meaningContainer}>
      <Text style={styles.meaning}>{meaning.partOfSpeech}</Text>
      <Text>Meaning</Text>
      {meaning.definitions.map((def, index) => (
        <Text key={index}>{def}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  meaning: {
    marginTop: 10,
  },
  meaningContainer: {
    alignItems: 'left',
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default Card;
